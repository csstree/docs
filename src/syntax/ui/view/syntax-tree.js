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

discovery.view.define('syntax-tree', function(el, config, data) {
    const { type, name, syntax, matchType, matchName } = data;
    const nested = {};

    if (!syntax) {
        return;
    }

    csstree.grammar.walk(syntax, function walk(node) {
        var nestedType = node.type;
        var nestedName = node.name;
        var nestedSyntax = null;
        var ref;

        switch (node.type) {
            case 'Type':
                nestedSyntax = csstree.lexer.types[nestedName]; // FIXME: should relay on data only
                ref = nestedName;
                break;

            case 'Property':
                nestedSyntax = csstree.lexer.types[nestedName]; // FIXME: should relay on data only
                ref = '\'' + node.name + '\'';
                break;

            default:
                return;
        }

        // exclude syntax itself
        if (nestedName === name && nestedType === type) {
            return;
        }

        if (nestedSyntax && !nestedSyntax.syntax) {
            return;
        }

        if (nestedSyntax) {
            if (ref in nested === false) {
                nested[ref] = {
                    type: nestedType,
                    name: nestedName,
                    syntax: markupSyntax(nestedSyntax.syntax, {
                        type: matchType,
                        name: matchName
                    })
                };
                csstree.grammar.walk(nestedSyntax.syntax, walk);
            }
        } else {
            nested[ref] = {
                error: 'missed syntax'
            };
        }
    });

    Object.keys(nested).forEach(function(ref) {
        var item = document.createElement('div');
        var info = nested[ref];

        item.innerHTML = info.error
            ? '&lt;' + ref + '&gt; = <span class="error">' + info.error + '</span>'
            : '<a href="#' + info.type + ':' + info.name + '">&lt;' + ref + '&gt;</a> = <span class="nested-syntax">' + info.syntax + '</span>';

        el.appendChild(item);
    });

    if (!Object.keys(nested).length) {
        el.hidden = true;
    }
});
