/* eslint-env browser */
/* global discovery, csstree, ga */

const functionSyntaxes = new WeakMap();
const { definitionSyntax } = csstree;

function syntaxName(syntax) {
    const { type, name, parent } = syntax || {};

    switch (type) {
        case 'Property':
            return '<\'' + name + '\'>';

        case 'Type':
            return '<' + name + '>';

        case 'Function':
            return name + '()';

        case 'Atrule':
            return '@' + name;

        case 'AtrulePrelude':
            return '@' + name + ':prelude';

        case 'AtruleDescriptor':
            return '@' + parent + '/' + name;

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
            const stack = [];

            definitionSyntax.walk(descriptor.syntax, {
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
                        const id = node.type + ':' + node.name;

                        if (node.type === 'Function') {
                            hostStack.push(host);
                            host = node;

                            let functionDescriptor = defaultSyntax.functions[host.name];

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
                                const functionSyntaxStr = definitionSyntax.generate(functionSyntaxAst);

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
    let visited;
    let host;
    const hostStack = [];

    for (let name in dict) {
        visited = Object.create(null);
        visited[type + ':' + name] = true;
        host = dict[name];
        hostStack.push(host);
        if (type === 'Atrule') {
            processDescriptor(host.prelude);
            for (let descriptor in host.discriptors) {
                processDescriptor(host.descriptors[descriptor]);
            }
        } else {
            processDescriptor(host);
        }
        hostStack.pop();
    }
}

function syntaxRefs(syntax, typeDict, globalDict) {
    let insideFunction = 0;
    const refs = [];

    if (typeof syntax === 'string') {
        syntax = definitionSyntax.parse(syntax);
    }

    if (syntax) {
        definitionSyntax.walk(syntax, {
            enter: node => {
                if (node.type in typeDict) {
                    const dict = typeDict[node.type];

                    if (globalDict && node.name in dict === false) {
                        globalDict.push(dict[node.name] = {
                            type: node.type,
                            name: node.name,
                            syntax: null,
                            match: null,
                            refs: []
                        });
                    }

                    refs.push({
                        node,
                        insideFunction: insideFunction > 0,
                        resolved: dict[node.name] || null
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

    return refs;
}

discovery.setPrepare(function(data, { defineObjectMarker, addQueryHelpers }) {
    const { properties, types, atrules } = csstree.lexer;
    const functions = Object.create(null);
    const typeOrder = ['Atrule', 'AtrulePrelude', 'AtruleDescriptor', 'Property', 'Type', 'Function'];
    const typeDict = {
        Atrule: atrules,
        AtrulePrelude: Object.fromEntries(
            Object.entries(atrules)
                .map(([key, { prelude }]) => prelude && [key, prelude])
                .filter(Boolean)
        ),
        AtruleDescriptor: Object.fromEntries(
            Object.entries(atrules).reduce(
                (res, [key, { descriptors }]) =>
                    descriptors
                        ? res.concat(Object.entries(descriptors).map(([name, value]) => [key + '/' + name, value]))
                        : res,
                []
            )
        ),
        Property: properties,
        Type: types,
        Function: functions
    };
    const markers = Object.fromEntries(Object.keys(typeDict).map(type => [
        type,
        defineObjectMarker(type, {
            refs: [value => `${value.type}:${value.name}`],
            lookupRefs: [value => `${value.type}:${value.name}`],
            ref: 'name',
            title: obj => syntaxName(obj),
            page: type
        })
    ]));

    csstree.lexer.validate();
    csstree.lexer.functions = functions;
    collectUsage('Atrule', atrules, csstree.lexer);
    collectUsage('Property', properties, csstree.lexer);
    collectUsage('Type', types, csstree.lexer);

    data.dict = [].concat(...Object.values(typeDict).map(dict => Object.values(dict)));
    for (const item of data.dict) {
        item.refs = syntaxRefs(item.syntax, typeDict, data.dict);
        markers[item.type](item);
    }

    addQueryHelpers({
        formatName: syntaxName,
        typeSorting(current) {
            const idx = typeOrder.indexOf(current);

            return idx !== -1 ? idx : Infinity;
        },
        isProblem: discovery.queryFn('(no match and type != "Atrule") or refs.resolved.[no match]'),
        mdn(current) {
            if (current) {
                switch (current.type) {
                    case 'Atrule':
                    case 'AtrulePrelude':
                        return data.mdn.atRules['@' + current.name] || null;

                    case 'AtruleDescriptor': {
                        const atrule = data.mdn.atRules['@' + current.parent];
                        return (atrule && atrule.descriptors && atrule.descriptors[current.name]) || null;
                    }

                    case 'Property':
                    case 'Type':
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
        syntaxAst(current) {
            const syntax = current ? current.syntax || current : null;

            return typeof syntax === 'string'
                ? definitionSyntax.parse(syntax)
                : syntax || null;
        },
        syntax(current) {
            if (current) {
                if (current.syntax) {
                    return definitionSyntax.generate(current.syntax);
                }

                if (typeof current.match) {
                    return '(generic)';
                }
            }

            return '(unknown)';
        },
        refs(current) {
            return current ? current.refs || syntaxRefs(current.syntax || current, typeDict) : [];
        },
        syntaxChildren(current) {
            const children = [];

            if (current) {
                if (current.term) {
                    children.push(current.term);
                }
                if (current.terms) {
                    children.push(...current.terms);
                }
            }

            return children;
        },
        match(current, value) { // FIXME: change argument order: current, syntax
            const { type, name } = current || {};

            let matchValue = type === 'Function' ? name + '(' + value + ')' : value;
            let isEmpty = !/\S/.test(matchValue);
            let match;
            let error = null;

            try {
                if (!isEmpty) {
                    match = csstree.lexer.match(current, matchValue);
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
            };
        }
    });
});

if (/^csstree.github.io$/i.test(location.host)) {
    /* eslint-disable */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    /* eslint-enable */

    ga('create', 'UA-84136412-1', 'auto');
    ga('send', 'pageview');
}

window.csstree = csstree;
