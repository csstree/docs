/* global discovery */
import * as csstree from 'css-tree';
import { utils } from '@discoveryjs/discovery';

function markupSyntax(syntax, match) {
    return csstree.definitionSyntax.generate(syntax, function(str, node) {
        if (node.type === 'Type' || node.type === 'Property') {
            const entityDescriptor = discovery.objectMarkers.lookup(node);
            const error = !entityDescriptor || !entityDescriptor.object.match;

            str = `<a href="#${node.type}:${node.name}"${error ? ' class="error"' : ''}>${utils.escapeHtml(str)}</a>`;
        }

        if (match && match.type === node.type && match.name === node.name) {
            str = `<span class="match">${str}</span>`;
        }

        return str;
    });
}

discovery.view.define('syntax', function(el, config, data) {
    const { type, match, matchType, matchName } = data || {};
    let { syntax } = data || {};
    let syntaxHtml = '';

    if (syntax) {
        if (typeof syntax === 'string') {
            syntax = csstree.definitionSyntax.parse(syntax);
        }

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
