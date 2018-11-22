/* global discovery */

discovery.definePage('default', [
    'h1:#.name',
    {
        view: 'context',
        data: [
            { title: 'Properties', query: 'dict[type="Property"]' },
            { title: 'Types', query: 'dict[type="Type"]' },
            { title: 'Functions', query: 'dict[type="Function"]' }
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
                title: "csstree & mdn-data parity",
                query: 'csstree.properties.keys() + mdn.properties.keys()',
                view: '{\n    view: \'table\',\n    cols: [\n    \t{ },\n    \t{ header: \'csstree\', content: \'text:#.data.csstree.properties.pick(@)\' },\n    \t{ header: \'MDN\', content: \'text:#.data.mdn.properties.pick(@).syntax\' }\n    ]\n}'
            }
        ]
    }
]);
