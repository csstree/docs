/* global discovery, csstree */

const functionSyntaxes = new WeakMap();

function syntaxName(syntax) {
    const { type, name } = syntax || {};

    switch (type) {
        case 'Property':
            return '<\'' + name + '\'>';

        case 'Type':
            return '<' + name + '>';

        case 'Function':
            return name + '()';

        default:
            return name;
    }
}

function collectUsage(type, dict, defaultSyntax) {
    function createGroup(terms, combinator) {
        return {
            type: 'Group',
            terms: terms,
            combinator: combinator,
            explicit: false,
            disallowEmpty: false
        };
    }

    function extractFunction(node, stack) {
        const parent = stack[stack.length - 1];
        const start = parent.terms.indexOf(node);

        for (var i = start; i < parent.terms.length; i++) {
            if (parent.terms[i].type === 'Token' && parent.terms[i].value === ')') {
                i++;
                break;
            }
        }

        return createGroup(parent.terms.slice(start, i), ' ');
    }

    function processDescriptor(descriptor) {
        if (descriptor && descriptor.syntax !== null) {
            var stack = [];

            csstree.grammar.walk(descriptor.syntax, {
                enter: function(node) {
                    if (
                        (node.type === 'Token' && node.value === '(') ||
                        (node.type === 'Type' && node.name === 'function-token')
                    ) {
                        hostStack.push(null);
                    }

                    if (node.type === 'Type' ||
                        node.type === 'Property' ||
                        node.type === 'Function') {
                        var id = node.type + ':' + node.name;

                        if (node.type === 'Function') {
                            hostStack.push(host);
                            host = node;
                            
                            var functionDescriptor = defaultSyntax.functions[host.name];

                            if (!functionDescriptor) {
                                functionDescriptor = defaultSyntax.createDescriptor(
                                    createGroup([], '|'),
                                    node.type,
                                    node.name
                                );
                                functionSyntaxes.set(functionDescriptor, new Set());
                                defaultSyntax.functions[host.name] = functionDescriptor;
                            }

                            const functionSyntax = functionSyntaxes.get(functionDescriptor);

                            if (!functionSyntax.has(node)) {
                                const functionSyntaxAst = extractFunction(node, stack);
                                const functionSyntaxStr = csstree.grammar.generate(functionSyntaxAst);
                                
                                if (!functionSyntax.has(functionSyntaxStr)) {
                                    functionDescriptor.syntax.terms.push(functionSyntaxAst);
                                }

                                functionSyntax.add(node);
                                functionSyntax.add(functionSyntaxStr);
                            }
                        }

                        stack.push(node);

                        if (id in visited === false) {
                            visited[id] = true;
                            switch (node.type) {
                                case 'Type':
                                    processDescriptor(defaultSyntax.getType(node.name), false);
                                    break;
                                case 'Property':
                                    processDescriptor(defaultSyntax.getProperty(node.name), false);
                                    break;
                            }
                        }
                    } else {
                        stack.push(node);
                    }
                },
                leave: function(node) {
                    stack.pop();
                    if (node.type === 'Token' && node.value === ')') {
                        host = hostStack.pop() || host;
                    }
                }
            });
        }
    }

    // helps to avoid recursion
    var visited;
    var host;
    var hostStack = [];

    for (var name in dict) {
        visited = Object.create(null);
        visited[type + ':' + name] = true;
        host = dict[name];
        hostStack.push(host);
        processDescriptor(host);
        hostStack.pop();
    }
}

discovery.setPrepare(function(data) {
    const { properties, types } = csstree.lexer;
    const functions = Object.create(null);
    const typeOrder = ['Property', 'Type', 'Function'];
    const typeDict = {
        Property: properties,
        Type: types,
        Function: functions
    };

    csstree.lexer.validate();
    csstree.lexer.functions = functions;
    collectUsage('Property', properties, csstree.lexer);
    collectUsage('Type', types, csstree.lexer);

    data.dict = [
        ...Object.values(properties),
        ...Object.values(types),
        ...Object.values(functions)
    ];

    data.dict.forEach(item => {
        let insideFunction = 0;
        item.refs = [];

        if (item.syntax) {
            csstree.grammar.walk(item.syntax, {
                enter: node => {
                    if (node.type in typeDict) {
                        const dict = typeDict[node.type];

                        if (node.name in dict === false) {
                            data.dict.push(dict[node.name] = {
                                type: node.type,
                                name: node.name,
                                syntax: null,
                                match: null,
                                refs: []
                            });
                        }

                        item.refs.push({
                            node,
                            insideFunction: insideFunction > 0,
                            resolved: dict[node.name]
                        });
                    }

                    if (node.type === 'Function') {
                        insideFunction++;
                    }
                },
                leave: node => {
                    if (node.type === 'Function') {
                        insideFunction--;
                    }
                }
            });
        }
    });

    const syntaxIndex = data.dict.reduce(
        (map, item) => map
            .set(item, item)
            .set(`${item.type}:${item.name}`, item),
        new Map()
    );
    discovery.addEntityResolver(value => {
        if (value) {
            value = syntaxIndex.get(value) || syntaxIndex.get(`${value.type}:${value.name}`);
        }

        if (value) {
            return {
                type: value.type,
                id: value.name,
                name: syntaxName(value),
                entity: value
            };
        }
    });

    discovery.addQueryHelpers({
        formatName: syntaxName,
        typeSorting(current) {
            const idx = typeOrder.indexOf(current);

            return idx !== -1 ? idx : Infinity;
        },
        mdn(current) {
            if (current) {
                if (current.type === 'Property' || current.type === 'Type') {
                    return data.mdn[current.type === 'Property' ? 'properties' : 'syntaxes'][current.name] || null;
                }
            }
            return null;
        },
        name(current) {
            const name = typeof current === 'string' ? current : (current && current.name) || false;
            return name ? csstree.keyword(name) : null;
        },
        patch(current) {
            if (current) {
                if (current.type === 'Property' || current.type === 'Type') {
                    return data.patch[current.type === 'Property' ? 'properties' : 'syntaxes'][current.name] || null;
                }
            }
            return null;
        },
        syntax(current) {
            if (current) {
                if (current.syntax) {
                    return csstree.grammar.generate(current.syntax);
                }

                if (typeof current.match) {
                    return '(generic)';
                }
            }

            return '(unknown)';
        },
        match(current, value) { // FIXME: change argument order: current, syntax
            const { type, name } = current || {};

            let matchValue = type === 'Function' ? name + '(' + value + ')' : value;
            let isEmpty = !/\S/.test(matchValue);
            let match;
            let error = null;

            try {
                const ast = csstree.parse(matchValue, {
                    context: 'value'
                });

                if (!isEmpty) {
                    match = csstree.lexer.match(current, ast);
                }
            } catch (e) {
                error = e.message + (e.sourceFragment ? '\n' + e.sourceFragment() : '');
            }

            if (match) {
                error = match.error;
            }

            return {
                match: !error && match && match.matched || null,
                iterations: match && match.iterations || null,
                error
            }
        }
    })
});
