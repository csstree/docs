/* eslint-env browser */
/* global discovery */

discovery.view.define('used-by', {
    view: 'columns',
    data: `
        usedBy()
            .values()
            .group(<type>)
            .({
                type: key,
                refs: value.sort(<name>)
            })
            .sort(<type.typeSorting()>)
    `,
    emptyText: 'No syntaxes',
    column: [
        'h4:type + " (" + refs.size() + ")"',
        {
            view: 'list',
            data: 'refs',
            item: 'link:{ text: formatName(), href: "#" + type + ":" + name }'
        }
    ]
});
