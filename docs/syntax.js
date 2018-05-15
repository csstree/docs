/* eslint-env browser */
/* global csstree */
function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function formatName(type, name) {
    switch (SECTION_MAP[type]) {
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

function buildMatchTree(match, stack) {
    function createMatchBlock(type, content, syntaxMatch) {
        var node = document.createElement('div');
        var caption = content || type;

        node.className = 'match-tree-node' + (type ? ' match-tree-node_' + type : '');
        node.innerHTML =
            '<span class="children"></span>' +
            '<span class="label">' + caption + '</span>';

        node.querySelector('.label').syntaxMatch = syntaxMatch || null;

        return {
            node: node,
            children: node.querySelector('.children')
        };
    }

    function buildNested(items, container) {
        items.forEach(function(item) {
            this.appendChild(buildMatchTree(item, stack), this.firstChild);
        }, container);
    }

    var syntax = match.syntax || match;
    var result;

    if (match.node) {
        result = createMatchBlock('ASTNode', match.token, stack.concat(match));
    } else {
        result = createMatchBlock(syntax.type, syntax.name ? syntax.type + ':' + syntax.name : '');

        if (match.match) {
            stack.push(match);
            buildNested(match.match, result.children);
            stack.pop();
        }
    }

    return result.node;
}

function validateValue() {
    var value = valueInput.value;
    var isEmpty = !/\S/.test(value);
    var match;
    var error;

    try {
        var ast = csstree.parse(value, {
            context: 'value'
        });

        if (!isEmpty) {
            match = defaultSyntax.match(currentSyntax, ast);
        }
    } catch (e) {
        error = e.message + (e.sourceFragment ? '\n' + e.sourceFragment() : '');
    }

    if (match) {
        error = match.error;
    }

    valueInputResultEl.classList.toggle('valid', !error);
    valueInputResultEl.classList.toggle('empty', isEmpty);
    valueInputResultEl.innerText = error || '';

    valueInputMatchTreeEl.innerHTML = '';
    valueInputMatchEl.innerHTML = '';
    if (!error && match && match.matched) {
        valueInputMatchEl.innerText = JSON.stringify(match.matched, null, 2);
        valueInputMatchTreeEl.appendChild(buildMatchTree(match.matched, []));
    }

    if (match && match.iterations) {
        valueInputMatchIterationCountEl.innerHTML = match.iterations;
        valueInputMatchIterationCountEl.style.display = '';
    } else {
        valueInputMatchIterationCountEl.style.display = 'none';
    }
}

function decodeParams() {
    var hash = location.hash.substr(1);
    var parts = hash.split('&');
    var ref = parts[0] || '';
    var section = SECTION_MAP[ref.split(':')[0]];
    var name = ref.split(':')[1];
    var from = parts[1] || '';

    return {
        section: section,
        name: name,
        matchType: from.split(':')[0],
        matchName: from.split(':')[1]
    };
}

function buildContentUsedBy(info, section, name) {
    var usedBy = syntaxUsage[info.type + ':' + info.name] || {};
    var usedByKeys = Object.keys(usedBy).sort(function(a, b) {
        a = usedBy[a].name;
        b = usedBy[b].name;
        return a > b ? 1 : a < b ? -1 : 0;
    });
    var lists = usedByKeys.reduce(function(result, key) {
        var usage = usedBy[key];
        var html =
            '<a href="#' + usage.type + ':' + usage.name + '&' + section + ':' + name + '">' +
                escapeHtml(formatName(usage.type, usage.name)) +
            '</a>';

        switch (usage.type) {
            case 'Type':
                result.Types.push(html);
                break;
            case 'Property':
                result.Properties.push(html);
                break;
            case 'Function':
                result.Functions.push(html);
                break;
        }

        return result;
    }, {
        Properties: [],
        Types: [],
        Functions: []
    });

    document.getElementById('usedBy').innerHTML =
        Object.keys(lists).some(function(name) {
            return lists[name].length > 0;
        })
            ? Object.keys(lists).map(function(name) {
                if (lists[name].length) {
                    return (
                        '<div class="section">' +
                            '<h4>' + name + ' (' + lists[name].length + ')</h4>' +
                            '<ul>' +
                                lists[name].sort().map(function(item) {
                                    return '<li>' + item + '</li>';
                                }).join('') +
                            '</ul>' +
                        '</div>'
                    );
                }
              }).join('')
            : '<span style="color: #888">No syntaxes</span>';
}

function buildContentMatchTree(info) {
    function walk(node, container) {
        var complex = false;
        var el = document.createElement('div');
        el.className = 'node-wrapper';

        var contentEl = document.createElement('div');
        contentEl.className = 'node-content';
        el.appendChild(contentEl);

        var mainEl = document.createElement('div');
        mainEl.className = 'node';
        contentEl.appendChild(mainEl);

        if (visited.has(node)) {
            mainEl.classList.add('node_recursive');
            mainEl.innerHTML = 'Recursive';
            container.appendChild(el);
            return complex;
        }

        if (node.type === 'If') {
            visited.set(node);
            ifStack.push(node);
        }

        elByNode.set(node, {
            root: el,
            content: contentEl,
            main: mainEl
        });

        switch (node.type) {
            case 'Match':
                mainEl.classList.add('node_match');
                mainEl.innerHTML = node.type;

                var toNode = null;
                for (var i = ifStack.length - 1, prev = node; i >= 0; i--) {
                    var ifStackItem = ifStack[i];
                    if (prev === ifStackItem.then) {
                        toNode = ifStackItem.then;
                        break;
                    }
                    prev = ifStackItem;
                }

                if (toNode !== null) {
                    laterConnections.push({
                        from: mainEl,
                        to: toNode,
                        num: 0,
                        total: { count: 0}
                    });
                }
                break;

            case 'Mismatch':
                mainEl.classList.add('node_mismatch');
                mainEl.innerHTML = node.type;

                var toNode = null;
                for (var i = ifStack.length - 1, prev = node; i >= 0; i--) {
                    var ifStackItem = ifStack[i];
                    if (prev === ifStackItem.then) {
                        toNode = ifStackItem.else;
                        break;
                    }
                    prev = ifStackItem;
                }

                if (toNode !== null) {
                    laterConnections.push({
                        from: mainEl,
                        to: toNode,
                        num: 0,
                        total: { count: 0}
                    });
                }
                break;

            case 'DisallowEmpty':
                mainEl.classList.add('node_disallow-empty');
                mainEl.innerHTML = node.type;
                break;

            case 'Type':
            case 'Property':
            case 'Keyword':
            case 'Function':
            case 'Token':
            case 'String':
            case 'Comma':
                if (!node.match) {
                    var key = false;

                    switch (node.type) {
                        case 'Type':
                            key = '<a href="#Type:' + node.name + '">&lt;' + node.name + '&gt;</a>';
                            break;
                        case 'Property':
                            key = '<a href="#Property:' + node.name + '">&lt;\'' + node.name + '\'&gt;</a>';
                            break;
                        case 'Function':
                            key = node.name + '(';
                            break;
                        case 'Keyword':
                            key = node.name;
                            break;
                        case 'Token':
                        case 'String':
                            key = node.value;
                            break;
                        case 'Comma':
                            key = ',';
                            break;
                    }

                    mainEl.classList.add('node_check');
                    mainEl.innerHTML =
                        '<span class="node__label">' + node.type + '</span>' +
                        '<span class="node__key">' + key + '</span>';
                    break;
                }

            default:
                var nestedEl = document.createElement('div');
                nestedEl.className = 'nested';

                el.appendChild(nestedEl);

                var nodeTypeEl = mainEl.appendChild(document.createElement('div'));
                nodeTypeEl.className = 'node__type';
                nodeTypeEl.innerHTML = node.type;
                nestedEl.classList.add('nested_labeled')

                complex = true;

                var nestedSimpleEl = nestedEl;
                var nestedOffset = {
                    count: 0
                };
                var values = node.type === 'Enum' ? node.map : node;
                for (var key in values) {
                    if (values === node && key === 'syntax' || key === 'type') {
                        continue;
                    }

                    var value = values[key];
                    var isNested = value && typeof value === 'object';

                    var field = mainEl.appendChild(document.createElement('div'));
                    field.className = 'node-field';
                    field.innerHTML = (
                        '<span class="node-field-label">' +
                            key +
                        '</span>' +
                        '<span>' +
                            (isNested ?
                                '<span class="connection-dot"></span>'
                                : typeof value === 'function' ? '[function]' : JSON.stringify(value)
                            ) +
                        '</span>'
                    );

                    if (isNested) {
                        if (walk(value, nestedEl)) {
                            // complex
                            nestedSimpleEl = elByNode.get(value);
                        } else {
                            // simple
                            if (nestedEl !== nestedSimpleEl) {
                                nestedSimpleEl.content.appendChild(elByNode.get(value).root);
                            }
                        }

                        connections.push({
                            from: field.lastChild.lastChild,
                            to: elByNode.get(value).main,
                            num: nestedOffset.count++,
                            total: nestedOffset
                        });
                    }
                }
        }

        container.appendChild(el);

        if (node.type === 'If') {
            ifStack.pop();
        }

        return complex;
    }

    var visited = new Map();
    var elByNode = new Map();
    var ifStack = [];
    var laterConnections = [];
    var connections = [];

    matchTreeEl.innerHTML = '';
    walk(info.match, matchTreeEl);

    matchTreeNodeCountEl.innerHTML = elByNode.size;

    // don't show additional connections since it makes a mess currently
    // laterConnections.forEach(function(later) {
    //     connections.push({
    //         from: later.from,
    //         to: elByNode.get(later.to).main,
    //         num: later.num,
    //         total: later.total
    //     });
    // });

    // build connections
    var baseBox = matchTreeEl.getBoundingClientRect();
    matchTreeConnectionsEl.innerHTML = '';
    connections
        .map(function(connection) {
            var from = connection.from.getBoundingClientRect();
            var to = connection.to.getBoundingClientRect();
            var back = from.right > to.left;

            var x1 = from.right - baseBox.left - 3;
            var y1 = from.top - baseBox.top + from.height / 2;
            var x2 = (back ? to.right + 1 : to.left - 1) - baseBox.left;
            var y2 = to.top - baseBox.top + 10;
            var midX = back ? 16 : 12 + Math.abs(connection.num - connection.total.count) * 5;

            if (y1 === y2) {
                return [
                    'M', x1, y1,
                    'H', x2 
                ].join(' ');
            }

            var arc = Math.abs(y1 - y2) > 16 ? 8 : 0;
            var arcY = y2 < y1 ? -arc : arc;

            return [
                'M', x1, y1,
                'h', midX - arc,
                'q', [arc, 0], [arc, arcY],
                'V', y2 - arcY,
                'q', [0, arcY], [back ? -arc : arc, arcY],
                'H', x2
            ].join(' ');
        })
        .forEach(function(path) {
            var pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');

            pathEl.classList.add('connection');
            pathEl.setAttribute('d', path);

            matchTreeConnectionsEl.appendChild(pathEl);
        });
}

function updateContent(focusValueInput) {
    var params = decodeParams();
    var section = params.section;
    var name = params.name;
    var contentEl = document.querySelector('article');
    var nestedEl = document.querySelector('#syntax-tree');
    var info;

    switch (section) {
        case 'Property':
            info = defaultSyntax.getProperty(name);
            currentSyntax = info;
            break;
        case 'Type':
            info = defaultSyntax.getType(name);
            currentSyntax = info;
            break;
        case 'Function':
            info = defaultSyntax.functions[name];
            currentSyntax = info.syntax.children;
            document.getElementById('value-function-name').innerHTML = info.name + '(';
            break;
    }

    contentEl.style.display = info ? '' : 'none';
    nestedEl.style.display = 'none';
    valueInput.parentNode.classList.toggle('value-is-function-children', section === 'Function');

    validateValue();
    if (focusValueInput) {
        valueInput.focus();
        valueInput.select();
    }

    if (!name || !info) {
        try {
            localStorage.removeItem('csstree-syntax');
        } catch(e) {}
        return;
    }

    document.querySelector('h1').innerText = formatName(section, name);

    var syntax = '';
    var syntaxHtml = '';
    var editingEnabled = true;

    if (info.syntax) {
        syntax = cssSyntax.generate(info.syntax);
        syntaxHtml = cssSyntax.generate(info.syntax, false, function(str, node) {
            if (node.type === 'Type' || node.type === 'Property') {
                str = '<a href="#' + node.type + ':' + node.name + '" style="white-space: nowrap">' + escapeHtml(str) + '</a>';
            }
            if (node.type === params.matchType && node.name === params.matchName) {
                str = '<span class="match">' + str + '</span>';
            }
            return str;
        });
    } else if (info.match) {
        syntax = 'generic';
        syntaxHtml = syntax;
        editingEnabled = false;
    }

    syntaxInput.disabled = !editingEnabled;
    if (syntaxInput.value !== syntax) {
        syntaxInput.value = syntax;
    }
    syntaxString.innerHTML = syntaxHtml;

    if (info.syntax) {
        var nested = {};

        cssSyntax.walk(info.syntax, function walk(node) {
            var nestedSection;
            var nestedName;
            var ref;

            switch (node.type) {
                case 'Type':
                    nestedName = node.name;
                    ref = nestedName;
                    nestedSection = 'types';
                    break;

                case 'Property':
                    nestedName = node.name;
                    ref = '\'' + node.name + '\'';
                    nestedSection = 'properties';
                    break;

                default:
                    return;
            }

            if (nestedName === name && nestedSection === section) {
                return;
            }

            var nestedInfo = defaultSyntax[nestedSection] && defaultSyntax[nestedSection][nestedName];

            if (nestedInfo && !nestedInfo.syntax) {
                return;
            }

            if (nestedInfo) {
                if (ref in nested === false) {
                    nested[ref] = {
                        section: nestedSection,
                        name: nestedName,
                        syntax: cssSyntax.generate(nestedInfo.syntax)
                    };
                    cssSyntax.walk(nestedInfo.syntax, walk);
                }
            } else {
                nested[ref] = {
                    error: 'missed syntax'
                };
            }
        });

        nestedEl.innerHTML = '';
        Object.keys(nested).forEach(function(ref) {
            var item = document.createElement('div');
            var info = nested[ref];

            item.innerHTML = info.error
                ? '&lt;' + ref + '&gt; = <span class="error">' + info.error + '</span>'
                : '<a href="#' + info.section + ':' + info.name + '">&lt;' + ref + '&gt;</a> = ' + escapeHtml(info.syntax);

            nestedEl.appendChild(item);
        });

        if (nestedEl.firstChild) {
            nestedEl.style.display = '';
        }
    }

    buildContentUsedBy(info, section, name);
    buildContentMatchTree(info);
}

function updateFilter() {
    if (currentFilter === filterInput.value.trim()) {
        return;
    }

    currentFilter = filterInput.value.trim();
    var filterRx = new RegExp('(' + currentFilter.replace(/[\('\)]/g, '\\$&') + ')', 'i');

    Array.prototype.forEach.call(document.querySelectorAll('#toc li a'), function(link) {
        var name = link.dataset.name;

        if (currentFilter !== '') {
            if (filterRx.test(name)) {
                link.innerHTML = name.split(filterRx).map(function(text, idx) {
                    return idx % 2
                        ? '<span class="match-entry">' + escapeHtml(text) + '</span>'
                        : escapeHtml(text);
                }).join('');
                link.parentNode.classList.remove('mismatch');
            } else {
                link.parentNode.classList.add('mismatch');
            }
        } else {
            link.innerText = name;
            link.parentNode.classList.remove('mismatch');
        }
    });

    Array.prototype.forEach.call(document.querySelectorAll('#toc h2 .count'), function(counter) {
        var list = counter.parentNode.nextSibling;
        var count = list.querySelectorAll('li:not(.mismatch)').length;

        counter.innerText = count;
        counter.style.visibility = count ? 'visible' : 'hidden';
        list.classList.toggle('no-matches', !count);
    });
}

function updatePinnedMatchSyntax(pinnedEl) {
    [].slice.call(valueInputMatchTreeEl.parentNode.querySelectorAll('.pinned'))
        .forEach(function(el) {
            el.classList.remove('pinned');
        });

    valueInputMatchHoverPopupEl.querySelector('.instruction').innerHTML = valueInputMatchHoverPinned
        ? '(click outside trace block to unpin)'
        : '(click to pin trace block)';

    if (valueInputMatchHoverPinned && pinnedEl) {
        var cursor = pinnedEl;
        while (cursor !== valueInputMatchTreeEl.parentNode) {
            cursor.classList.add('pinned');
            cursor = cursor.parentNode;
        }
    }
}

function buildMatchTrace(hoverSyntax) {
    var mainMatch = hoverSyntax[hoverSyntax.length - 1];
    var matchNode = mainMatch.node;
    var childrenSyntaxes = (mainMatch.childrenMatch || []).map(function(match) {
        return match.syntax;
    });

    switch (mainMatch.syntax.type) {
        case 'Generic':
            hoverSyntax = hoverSyntax.slice(0, -1);
            break;
        default:
            hoverSyntax = hoverSyntax.slice();
    }

    var matches = hoverSyntax.reverse().map(function(match, idx, array) {
        var syntax = match.syntax || currentSyntax;
        var prevSyntax = idx > 0 ? array[idx - 1].syntax : null;

        switch (syntax.type) {
            case 'Type':
                syntax = defaultSyntax.getType(syntax.name).syntax || syntax;
                break;
            case 'Property':
                syntax = defaultSyntax.getProperty(syntax.name).syntax || syntax;
                break;
        }

        var syntaxStr = cssSyntax.generate(syntax, false, function(str, node) {
            if (node.type === 'Type' || node.type === 'Property') {
                str = '<span style="white-space: nowrap">' + escapeHtml(str) + '</span>';
            }

            if (node === prevSyntax) {
                str = '<span class="match"><span class="tail"></span>' + str + '</span>';
            } else if (childrenSyntaxes.indexOf(node) !== -1) {
                str = '<span class="children-match">' + str + '</span>';
            }

            return str;
        });

        if (idx === 0) {
            if (syntax.multiplier && syntax.multiplier.comma && matchNode.type === 'Operator' && matchNode.value === ',') {
                syntaxStr = syntaxStr.replace(/#({[\d,]+})?$/, '<span class="match">#</span>$1');
            }
        }

        return (
            '<li>' +
                '<span class="syntax">' +
                    '<span class="lines">' +
                        syntaxStr +
                    '</span>' +
                '</span>' +
            '</li>'
        );
    });

    return '<ul>' + matches.join('') + '</ul>';
}

function setHoverMatchSyntax(hoverSyntax) {
    if (valueInputMatchHoverSyntax !== hoverSyntax) {
        valueInputMatchHoverSyntax = hoverSyntax;
        if (hoverSyntax) {
            clearTimeout(valueInputMatchHoverTimer);
            mainEl.classList.add('match-syntax-visible');
            valueInputMatchHoverPopupEl.querySelector('.trace').innerHTML = buildMatchTrace(hoverSyntax);
        } else {
            mainEl.classList.remove('match-syntax-visible');
        }
    }
}

function findHoverMatchSyntax(cursor) {
    var hoverSyntax = null;

    while (cursor !== null) {
        if (cursor.syntaxMatch) {
            hoverSyntax = cursor.syntaxMatch;
            break;
        }
        cursor = cursor.parentNode;
    }

    return hoverSyntax;
}

function collectUsage(type, dict) {
    function processDescriptor(descriptor) {
        if (descriptor && descriptor.syntax !== null) {
            cssSyntax.walk(descriptor.syntax, {
                enter: function(node) {
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
                            if (!functionX.has(node) && host.name in defaultSyntax.functions) {
                                var curSyntax = cssSyntax.generate(defaultSyntax.functions[host.name].syntax);
                                var newSyntax = cssSyntax.generate(node)

                                if (curSyntax !== newSyntax) {
                                    console.log([
                                        cssSyntax.generate(defaultSyntax.functions[host.name].syntax),
                                        cssSyntax.generate(node)
                                    ].join('\n'));
                                }
                            }
                            functionX.add(node);
                            defaultSyntax.functions[host.name] = {
                                type: node.type,
                                name: node.name,
                                syntax: node
                            };
                        }

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
                    }
                },
                leave: function(node) {
                    if (node.type === 'Function') {
                        host = hostStack.pop();
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
        host = dict[name];
        hostStack.push(host);
        processDescriptor(host, true);
        hostStack.pop();
    }
}

var SECTION_MAP = {
    Property: 'Property',
    Type: 'Type',
    Function: 'Function',
    properties: 'Property',
    types: 'Type',
    functions: 'Function'
};
var cssSyntax = csstree.grammar;
var defaultSyntax = csstree.lexer;
var brokenMap = defaultSyntax.validate();
var tocEl = document.querySelector('#toc');
var mainEl = document.querySelector('#main');
var valueInput = document.getElementById('value-input');
var valueInputResultEl = document.getElementById('value-input-result');
var valueInputMatchEl = document.getElementById('value-match');
var valueInputMatchIterationCountEl = document.getElementById('value-match-iteration-count');
var valueInputMatchTreeEl = document.getElementById('value-match-tree');
var valueInputMatchHoverPopupEl = document.getElementById('value-match-hover-syntax');
var valueInputMatchHoverTimer = null;
var valueInputMatchHoverSyntax = null;
var valueInputMatchHoverPinned = false;
var filterInput = document.querySelector('#filter > input');
var matchTreeEl = document.getElementById('match-tree');
var matchTreeNodeCountEl = document.getElementById('match-tree-node-count');
var matchTreeConnectionsEl = document.getElementById('match-tree-connections');
var syntaxInput = document.querySelector('#syntax-input');
var syntaxString = document.querySelector('#syntax');
var currentFilter = '';
var currentSyntax;
var syntaxUsage = {};
var functionX = new Set();

defaultSyntax.functions = {};

collectUsage('Property', defaultSyntax.properties);
collectUsage('Type', defaultSyntax.types);

valueInput.addEventListener('input', function() {
    valueInputMatchHoverPinned = false;
    validateValue();
    setHoverMatchSyntax(null);
    updatePinnedMatchSyntax();
    localStorage.setItem('csstree-syntax', JSON.stringify({
        hash: location.hash,
        value: valueInput.value
    }));
});
syntaxInput.addEventListener('input', function() {
    var ref = location.hash.substr(1);
    var section = ref.split(':')[0];
    var name = ref.split(':')[1];

    switch (section) {
        case 'Property':
            defaultSyntax.addProperty_(name, syntaxInput.value);
            updateContent();
            break;
        case 'Type':
            defaultSyntax.addType_(name, syntaxInput.value);
            updateContent();
            break;
    }
});
valueInputMatchTreeEl.addEventListener('mouseenter', function(e) {
    setHoverMatchSyntax(findHoverMatchSyntax(e.target));
    updatePinnedMatchSyntax(e.target);
}, true);
valueInputMatchTreeEl.addEventListener('mouseleave', function() {
    clearTimeout(valueInputMatchHoverTimer);
    if (!valueInputMatchHoverPinned) {
        valueInputMatchHoverTimer = setTimeout(function() {
            setHoverMatchSyntax(null);
        }, 100);
    }
}, true);
document.addEventListener('click', function(e) {
    if (valueInputMatchHoverPopupEl.contains(e.target)) {
        return;
    }

    var matchSyntax = findHoverMatchSyntax(e.target);

    if (matchSyntax) {
        valueInputMatchHoverPinned = !valueInputMatchHoverPinned;
    } else {
        valueInputMatchHoverPinned = false;
    }

    setHoverMatchSyntax(matchSyntax);
    updatePinnedMatchSyntax(e.target);
}, true);

['properties', 'types', 'functions'].forEach(function(section) {
    var sectionEl = document.createElement('section');
    var headerEl = document.createElement('h2');
    var listEl = document.createElement('ul');
    var brokenCount = 0;

    Object.keys(defaultSyntax[section]).sort().forEach(function(name) {
        var broken = brokenMap && brokenMap[section] ? brokenMap[section].indexOf(name) !== -1 : false;
        var itemEl = document.createElement('li');
        var linkEl = document.createElement('a');
        var caption = formatName(section, name);

        brokenCount += broken;
        linkEl.href = '#' + SECTION_MAP[section] + ':' + name;
        linkEl.className = broken ? 'error' : '';
        linkEl.setAttribute('data-name', caption);
        linkEl.appendChild(document.createTextNode(
            caption
        ));

        itemEl.appendChild(linkEl);
        listEl.appendChild(itemEl);
    });

    headerEl.innerHTML =
        section +
        ' <span class="count">' + listEl.childNodes.length + '</span>' +
        (brokenCount ? ' <span class="error"><small>[broken:' + brokenCount + ']</small></span>' : '');
    sectionEl.appendChild(headerEl);
    sectionEl.appendChild(listEl);

    tocEl.appendChild(sectionEl);
});

(function() {
    try {
        var last = JSON.parse(localStorage.getItem('csstree-syntax'));
        if (last.hash === location.hash) {
            valueInput.value = last.value;
        }
    } catch(e) {
        localStorage.removeItem('csstree-syntax');
    }
})();

window.addEventListener('hashchange', updateContent.bind(null, true), false);
updateContent(true);
updateFilter();
