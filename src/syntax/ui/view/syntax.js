/* global discovery, csstree */

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function markupSyntax(syntax, match) {
    return csstree.grammar.generate(syntax, function(str, node) {
        if (node.type === 'Type' || node.type === 'Property') {
            const entityDescriptor = discovery.resolveEntity(node);
            const error = !entityDescriptor || !entityDescriptor.entity.match;

            str = `<a href="#${node.type}:${node.name}"${error ? ' class="error"': ''}>${escapeHtml(str)}</a>`;

            if (match && match.type === node.type && match.name === node.name) {
                str = `<span class="match">${str}</span>`;
            }
        }

        return str;
    });
}

discovery.view.define('syntax', function(el, config, data) {
    const { type, syntax, match, matchType, matchName } = data || {};
    let syntaxHtml = '';

    if (syntax) {
        if (type === 'Function') {
            syntax.combinator = '|<br>';
        }

        syntaxHtml = markupSyntax(syntax, {
            type: matchType,
            name: matchName
        });

        if (type === 'Function') {
            syntax.combinator = '|';
        }
    } else if (match) {
        syntaxHtml = 'generic';
    }

    el.innerHTML = syntaxHtml;
}, { tag: 'span' });