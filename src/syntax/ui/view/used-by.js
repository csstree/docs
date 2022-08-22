/* eslint-env browser */
/* global discovery */

discovery.view.define('used-by', {
    view: 'columns',
    data: `
        $dict: #.data.dict;
        $explicit: $dict.[refs.[resolved = @]];
        $explicit
            ..($t:$;$t + $dict.[refs.[resolved=$t]])
            .[$ != @]
            .group(=>type)
            .({
                type: key,
                refs: value.sort(name asc).({ ..., implicit: $ not in $explicit })
            })
            .sort(type.typeSorting() asc)
    `,
    emptyText: 'No syntaxes',
    column: [
        'h5:type + " (" + refs.size() + ")"',
        {
            view: 'list',
            data: 'refs',
            itemConfig: {
                className: data => data.implicit && 'implicit'
            },
            item: {
                view: 'auto-link',
                href: (href, _, { page: type, id: name }) => `${href}&hltype=${type}&hlname=${name}`
            }
        }
    ]
});
