/* global discovery, csstree */

function collectUsage(type, dict, defaultSyntax, syntaxUsage) {
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

                        if (!syntaxUsage.hasOwnProperty(id)) {
                            syntaxUsage[id] = Object.create(null);
                        }

                        syntaxUsage[id][host.type + ':' + host.name] = host;

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
                                functionDescriptor.syntaxes = new Set();
                                defaultSyntax.functions[host.name] = functionDescriptor;
                            }

                            if (!functionDescriptor.syntaxes.has(node)) {
                                var functionSyntax = extractFunction(node, stack);
                                var functionSyntaxStr = csstree.grammar.generate(functionSyntax);
                                
                                if (!functionDescriptor.syntaxes.has(functionSyntaxStr)) {
                                    functionDescriptor.syntax.terms.push(functionSyntax);
                                }

                                functionDescriptor.syntaxes.add(node);
                                functionDescriptor.syntaxes.add(functionSyntaxStr);
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
    const usage = {};
    const typeOrder = ['Property', 'Type', 'Function'];

    csstree.lexer.validate();
    csstree.lexer.functions = functions;
    collectUsage('Property', properties, csstree.lexer, usage);
    collectUsage('Type', types, csstree.lexer, usage);

    data.usage = usage;
    data.dict = [].concat(
        Object.values(properties),
        Object.values(types),
        Object.values(functions)
    );

    discovery.addQueryHelpers({
        formatName(current) {
            const { type, name } = current || {};

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
        },
        typeSorting(current) {
            const idx = typeOrder.indexOf(current);

            return idx !== -1 ? idx : Infinity;
        },
        usedBy(current) {
            const { type, name } = current || {};

            return usage[`${type}:${name}`];
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
