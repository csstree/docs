/* eslint-env browser */
/* global discovery */

// <svg>
//     <marker id="match-graph-connections-marker" viewBox="0 0 5 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="6" markerHeight="4" orient="auto">
//         <path d="M 0 0 L 10 5 L 0 10 z" fill="#bbb"/>
//     </marker>
// </svg>
discovery.dom.container.appendChild(
    createSvgElement('svg', { style: 'position:absolute;z-index:-1;width:0;height:0' }, [
        createSvgElement(
            'marker',
            {
                id: 'match-graph-connection-marker',
                viewBox: '0 0 5 10',
                refX: '0',
                refY: '5',
                markerUnits: 'strokeWidth',
                markerWidth: '6',
                markerHeight: '4',
                orient: 'auto'
            },
            [createSvgElement('path', { d: 'M 0 0 L 10 5 L 0 10 z', fill: 'rgba(150, 150, 150, 0.65)' })]
        )
    ])
);

function setupElement(el, attrs, children) {
    if (typeof attrs === 'string') {
        attrs = {
            class: attrs
        };
    }

    for (let attrName in attrs) {
        if (attrName.startsWith('on')) {
            el.addEventListener(attrName.substr(2), attrs[attrName]);
        } else {
            el.setAttribute(attrName, attrs[attrName]);
        }
    }

    if (Array.isArray(children)) {
        children.forEach(child => el.appendChild(child && child.nodeType ? child : createText(child)));
    } else if (typeof children === 'string') {
        el.innerHTML = children;
    }

    return el;
}

function createElement(tag, attrs, children) {
    return setupElement(document.createElement(tag), attrs, children);
}

function createSvgElement(tag, attrs, children) {
    return setupElement(document.createElementNS('http://www.w3.org/2000/svg', tag), attrs, children);
}

function createText(text) {
    return document.createTextNode(String(text));
}

discovery.view.define('match-graph', function(el, config, data) {
    function walk(node, container) {
        if (node.type === 'MatchGraph') {
            return walk(node.match, container);
        }

        let complex = false;
        let el;
        let contentEl;
        let mainEl;

        el = createElement('div', 'node-wrapper', [
            contentEl = createElement('div', 'node-content', [
                mainEl = createElement('div', 'node')
            ])
        ]);

        if (visited.has(node)) {
            mainEl.classList.add('node_recursive');
            mainEl.innerHTML = 'Recursive';
            container.appendChild(el);
            return true;
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
            case 'Match': {
                mainEl.classList.add('node_match');
                mainEl.innerHTML = node.type;

                let toNode = null;
                for (let i = ifStack.length - 1, prev = node; i >= 0; i--) {
                    const ifStackItem = ifStack[i];

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
            }

            case 'Mismatch': {
                mainEl.classList.add('node_mismatch');
                mainEl.innerHTML = node.type;

                let toNode = null;
                for (let i = ifStack.length - 1, prev = node; i >= 0; i--) {
                    const ifStackItem = ifStack[i];

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
            }

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
            case 'Comma': {
                if (!node.match) {
                    let key = false;

                    switch (node.type) {
                        case 'Type':
                            key = '<a href="#Type:' + node.name + '">&lt;' + node.name + '&gt;</a>';
                            break;
                        case 'Property':
                            key = '<a href="#Property:' + node.name + '">&lt;\'' + node.name + '\'&gt;</a>';
                            break;
                        case 'Function':
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
            }

            default: {
                mainEl.classList.add('node_default');

                const nestedEl = el.appendChild(createElement('div', 'nested nested_labeled'));

                mainEl.appendChild(createElement('div', 'node__type', node.type));
                complex = true;

                let nestedSimpleEl = nestedEl;
                const values = node.type === 'Enum' ? node.map : node;
                const nestedOffset = {
                    count: 0
                };
                for (const key in values) {
                    if (values === node && key === 'syntax' || key === 'type') {
                        continue;
                    }

                    const value = values[key];
                    const isNested = value && typeof value === 'object';
                    const field = mainEl.appendChild(
                        createElement(
                            'div',
                            'node-field',
                            '<span class="node-field-label">' +
                                key +
                            '</span>' +
                            '<span>' +
                                (isNested
                                    ? '<span class="connection-dot"></span>'
                                    : typeof value === 'function' ? '[function]' : JSON.stringify(value)
                                ) +
                            '</span>'
                        )
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
        }

        container.appendChild(el);

        if (node.type === 'If') {
            ifStack.pop();
        }

        return complex;
    }

    const visited = new Map();
    const elByNode = new Map();
    const ifStack = [];
    const laterConnections = [];
    const connections = [];

    const matchTreeEl = createElement('div', 'graph');
    let matchTreeConnectionsEl;

    if (data) {
        walk(data, matchTreeEl);
    }

    // <h2>Match graph:<span id="match-graph-node-count"></span></h2>
    // <div id="match-graph-canvas">
    //     <svg id="match-graph-connections-canvas"></svg>
    //     <div id="match-graph"></div>
    // </div>
    el.appendChild(
        createElement('h2', 'view-header', 'Match graph<span class="view-badge node-count">' + elByNode.size + '</span>')
    );
    el.appendChild(
        createElement('div', 'canvas', [
            matchTreeConnectionsEl = createSvgElement('svg', 'connections-canvas'),
            matchTreeEl
        ])
    );

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
    setTimeout(() => {
        const baseBox = matchTreeEl.getBoundingClientRect();

        connections
            .map(function(connection) {
                const from = connection.from.getBoundingClientRect();
                const to = connection.to.getBoundingClientRect();
                const back = from.right > to.left;

                const x1 = from.right - baseBox.left;
                const y1 = from.top - baseBox.top + from.height / 2;
                const x2 = (back ? to.right + 1 : to.left - 1) - baseBox.left - 7;
                const y2 = to.top - baseBox.top + 10;
                const midX = back ? 16 : 12 + Math.abs(connection.num - connection.total.count) * 5;

                if (y1 === y2) {
                    return [
                        'M', x1, y1,
                        'H', x2
                    ].join(' ');
                }

                const arc = Math.abs(y1 - y2) > 16 ? 8 : 0;
                const arcY = y2 < y1 ? -arc : arc;

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
                matchTreeConnectionsEl.appendChild(
                    createSvgElement('path', {
                        class: 'connection',
                        d: path
                    })
                );
            });
    }, 0);
});
