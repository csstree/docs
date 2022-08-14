/* global discovery */
const csstree = require('css-tree');

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function buildMatchTrace(trace) {
    let childrenSyntaxes = [];
    let childrenClose = null;

    trace = trace.slice().reverse();

    if (trace[0].syntax === null) {
        trace.shift();
    }

    if (trace[0].syntax && trace[0].syntax.type === 'Function') {
        childrenSyntaxes = trace[1].match.slice(1, -1).map(match => match.syntax);
        childrenClose = trace[1].match[trace[1].match.length - 1].syntax;
    }

    let prevSyntax = trace.shift().syntax;
    const matches = trace.map(function(match, idx, array) {
        let { syntax } = match;

        switch (syntax.type) {
            case 'Type':
                syntax = csstree.lexer.getType(syntax.name).syntax || syntax; // FIXME: should relay on model data
                break;
            case 'Property':
                syntax = csstree.lexer.getProperty(syntax.name).syntax || syntax; // FIXME: should relay on model data
                break;
            case 'AtrulePrelude':
                syntax = csstree.lexer.getAtrule(syntax.name).prelude.syntax || syntax; // FIXME: should relay on model data
                break;
            case 'Function':
                syntax = csstree.lexer.functions[syntax.name].syntax || syntax; // FIXME: should relay on model data
                break;
        }

        const syntaxStr = csstree.definitionSyntax.generate(syntax, function(str, node) {
            if (node.type === 'Type' || node.type === 'Property') {
                str = escapeHtml(str);
            }

            if (node.type === 'Type' || node.type === 'Property' ||
                node.type === 'Keyword' || node.type === 'Function' ||
                node.type === 'Multiplier') {
                str = '<span class="atom">' + str + '</span>';
            }

            if (node === prevSyntax) {
                const origStr = str;
                let offset;

                if (node.type === 'Multiplier') {
                    offset = str.lastIndexOf('#');
                    str = '#';
                }

                str = [
                    '<span class="match">',
                    `<span class="${idx > 0 ? 'connector-up' : 'clear-up'}"></span>`,
                    `<span class="${idx !== array.length - 1 ? 'connector-down' : 'clear-down'}"></span>`,
                    '<span class="magick-box"></span>',
                    '<span class="match-caption">' + str + '</span>',
                    '</span>'
                ].join('');

                if (node.type === 'Multiplier') {
                    str = origStr.substr(0, offset) + str + origStr.substr(offset + 1);
                }
            } else if (childrenSyntaxes.includes(node) || node === childrenClose) {
                str = '<span class="children-match"><span class="match-caption">' + str + '</span></span>';
            }

            return str;
        });

        prevSyntax = match.syntax;

        return (
            '<li>' +
                '<span class="syntax">' +
                    syntaxStr +
                '</span>' +
            '</li>'
        );
    });

    return '<ul>' + matches.join('') + '</ul>';
}

discovery.view.define('syntax-match-trace', function(el, config, data) {
    el.innerHTML = buildMatchTrace(data);
});
