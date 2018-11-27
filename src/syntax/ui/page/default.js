/* global discovery */

discovery.definePage('default', [
    'h1:#.name',
    {
        view: 'context',
        data: [
            { title: 'Properties', query: 'dict.[type="Property"]' },
            { title: 'Types', query: 'dict.[type="Type"]' },
            { title: 'Functions', query: 'dict.[type="Function"]' }
        ],
        content: {
            view: 'inline-list',
            item: 'indicator',
            data: `.({
                label: title,
                value: query.query(#.data, #).size(),
                href: { query, title }.reportLink()
            })`
        }
    },
    {
        view: 'section',
        header: 'text:"Reports"',
        content: {
            view: 'ul',
            item: 'link:{ text: title, href: $.reportLink() }'
        },
        data: [
            {
                title: 'Syntax type stat',
                query: 'dict.group(<type>).({ type: key, count: value.size() })',
                view: '{\n    view: \'hstack\',\n    content: [\'table\', \'chart:.({ y: count, name: type })\']\n}'
            },
            {
                title: 'csstree & mdn-data parity',
                query: '$csstree: csstree.properties;\n$mdn: mdn.properties;\n\n($csstree.keys() + mdn.keys())\n.[$csstree[$] != $mdn[$].syntax]\n.({ property: $, csstree: $csstree[$], mdn: $mdn[$].syntax })',
                view: '{\n    view: \'table\'\n}'
            }
        ]
    }
]);
