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
            str = '<a href="#' + node.type + ':' + node.name + '" style="white-space: nowrap">' + escapeHtml(str) + '</a>';
        }

        if (match && node.type === match.type && node.name === match.name) {
            str = '<span class="match">' + str + '</span>';
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
});
