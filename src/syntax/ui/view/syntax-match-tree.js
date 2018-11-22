/* eslint-env browser */
/* global discovery */

// <h2>Match result:<span id="value-match-iteration-count"></span></h2>
// <div id="value-input-result"></div>
// <div id="value-match-wrapper">
//     <div id="value-match-hover-syntax" hidden>
//         <div class="header">Match trace <span class="instruction"></span></div>
//         <div class="trace"></div>
//     </div>
//     <div id="value-match-tree"></div>
// </div>

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function formatName(type, name) {
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

function createMatchBlock(type, content, syntaxMatchTrace) {
    const node = document.createElement('div');
    const caption = content || type;

    node.className = 'match-tree-node' + (type ? ' match-tree-node_' + type : '');
    node.innerHTML =
        '<span class="children"></span>' +
        '<span class="label">' + caption + '</span>';

    node.querySelector('.label').syntaxMatchTrace = syntaxMatchTrace || null;

    return {
        node: node,
        children: node.querySelector('.children')
    };
}

function buildMatchResult(match, stack) {
    var syntax = match.syntax || match;
    var result;

    if (match.node) {
        result = createMatchBlock('ASTNode', match.token, stack.concat(match));
    } else {
        result = createMatchBlock(
            syntax.type,
            syntax.name ? escapeHtml(formatName(syntax.type, syntax.name)) : ''
        );

        if (match.match) {
            stack.push(match);
            match.match.forEach(function(item) {
                this.appendChild(buildMatchResult(item, stack), this.firstChild);
            }, result.children);
            stack.pop();
        }
    }

    return result.node;
}

function findSyntaxMatchTrace(cursor) {
    let trace = null;

    while (cursor !== null) {
        if (cursor.syntaxMatchTrace) {
            trace = cursor.syntaxMatchTrace;
            break;
        }
        cursor = cursor.parentNode;
    }

    return trace;
}

discovery.view.define('syntax-match-tree', function(el, config, data) {
    function setPinned(pinnedEl) {
        [].slice.call(el.querySelectorAll('.pinned')).forEach(el =>
            el.classList.remove('pinned')
        );

        if (pinned && pinnedEl) {
            var cursor = pinnedEl;

            while (cursor !== el) {
                cursor.classList.add('pinned');
                cursor = cursor.parentNode;
            }
        }
    }

    function setTrace(trace) {
        if (currentTrace !== trace) {
            currentTrace = trace;

            clearTimeout(resetTimer);
            if (typeof onTrace === 'function') {
                onTrace(trace);
            }
        }
    }

    const { onTrace, onPinned, ignoreClickElements } = config;
    let currentTrace;
    let resetTimer;
    let pinned = false;

    el.appendChild(buildMatchResult(data, []));

    el.addEventListener('mouseenter', function(e) {
        setTrace(findSyntaxMatchTrace(e.target));
        setPinned(e.target);
    }, true);
    el.addEventListener('mouseleave', function() {
        clearTimeout(resetTimer);

        if (!pinned) {
            resetTimer = setTimeout(function() {
                setTrace(null);
            }, 100);
        }
    }, true);

    document.addEventListener('click', function handler(e) {
        // self terminating event listener
        if (!document.body.contains(el)) {
            document.removeEventListener('click', handler, true);
            return;
        }

        if (Array.isArray(ignoreClickElements) && ignoreClickElements.some(el => el.contains(e.target))) {
            return;
        }

        const trace = findSyntaxMatchTrace(e.target);
        const newPinned = trace ? !pinned : false;

        if (newPinned !== pinned && typeof onPinned === 'function') {
            pinned = newPinned;
            onPinned(pinned);
        }

        setTrace(trace);
        setPinned(e.target);
    }, true);
});
