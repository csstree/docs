/* global discovery, csstree */

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function buildMatchTrace(trace) {
    var childrenSyntaxes = [];
    trace = trace.slice().reverse();

    if (typeof trace[0].syntax === 'function') {
        trace.shift();
    }

    if (trace[0].syntax && trace[0].syntax.type === 'Function') {
        childrenSyntaxes = trace[1].match.slice(1, -1).map(match => match.syntax);
    }

    var prevSyntax = trace.shift().syntax;
    var matches = trace.map(function(match, idx) {
        var syntax = match.syntax;

        switch (syntax.type) {
            case 'Type':
                syntax = csstree.lexer.getType(syntax.name).syntax || syntax; // FIXME: should relay on model data
                break;
            case 'Property':
                syntax = csstree.lexer.getProperty(syntax.name).syntax || syntax; // FIXME: should relay on model data
                break;
        }

        var syntaxStr = csstree.grammar.generate(syntax, function(str, node) {
            if (node.type === 'Type' || node.type === 'Property') {
                str = '<span style="white-space: nowrap">' + escapeHtml(str) + '</span>';
            }

            if (node === prevSyntax) {
                var origStr = str;
                var offset;

                if (node.type === 'Multiplier') {
                    offset = str.lastIndexOf('#');
                    str = '#';
                }

                if (idx > 0) {
                    str = '<span class="tail"></span>' + str;
                }

                str = '<span class="match">' + str + '</span>';

                if (node.type === 'Multiplier') {
                    str = origStr.substr(0, offset) + str + origStr.substr(offset + 1);
                }
            } else if (childrenSyntaxes.indexOf(node) !== -1) {
                str = '<span class="children-match">' + str + '</span>';
            }

            return str;
        });

        prevSyntax = match.syntax;

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

discovery.view.define('syntax-match-trace', function(el, config, data) {
    el.innerHTML = buildMatchTrace(data);
});
