/* global discovery */

discovery.page.define('default', [
    'h1:#.name',
    {
        view: 'block',
        className: 'versions',
        content: [
            'badge:{ prefix: "css-tree", text: csstree.version }',
            'badge:{ prefix: "mdn-data", text: mdn.version }'
        ]
    },
    {
        view: 'context',
        data: [
            { title: 'Properties', query: 'dict.[type="Property"]' },
            { title: 'Types', query: 'dict.[type="Type"]' },
            { title: 'Functions', query: 'dict.[type="Function"]' },
            { title: 'Problems', query: 'dict.[no match or refs.resolved.[no match]]', href: '#problems' }
        ],
        content: {
            view: 'inline-list',
            item: 'indicator',
            data: `.({
                label: title,
                value: query.query(#.data, #).size(),
                href: href or pageLink('report', { query, title })
            })`
        }
    },
    {
        view: 'section',
        header: 'text:"Reports"',
        content: {
            view: 'ul',
            item: 'link:{ text: title, href: pageLink("report", { ..., noedit: true }) }'
        },
        data: [
            {
                title: 'Syntax type stat',
                query: '[\n\t{ header: \'Syntax types\', data: dict.group(<type>).({ type: key, count: value.size() }) },\n    { header: \'Syntax origin\', data: dict.({ type, name, mdn: mdn().syntax, csstree: syntax(), patch: patch() })\n\t\t.[type!="Function"]\n\t\t.group(<\n            csstree="(generic)" ? "Generic syntaxes" :\n\t\t    no mdn ? \'Added (missed in MDN data)\' :\n\t\t    patch ? (mdn=csstree ? \'Redundant patch\' : \'Patched MDN data\')\n\t\t\t\t: \'As is from MDN data\'\n\t\t>)\n        .({ type: key, count: value.size() })\n    }\n]',
                view: '{\n    view: \'list\',\n    item: [\n        \'h2:header\',\n        {\n            view: \'hstack\',\n            data: \'data\',\n            content: [\n                \'table\',\n                \'chart:.({ y: count, name: type })\'\n            ]\n        }\n    ]\n}'
            },
            // {
            //     title: 'csstree & mdn-data parity',
            //     query: '$csstree: csstree.properties;\n$mdn: mdn.properties;\n\n($csstree.keys() + mdn.keys())\n.[$csstree[$] != $mdn[$].syntax]\n.({ property: $, csstree: $csstree[$], mdn: $mdn[$].syntax })',
            //     view: '{\n    view: \'table\'\n}'
            // },
            {
                title: 'csstree & mdn-data parity',
                query: 'dict.({ type, name, mdn: mdn().syntax, csstree: syntax(), patch: patch() })\n.[csstree!=mdn and csstree!="(generic)" and type!="Function"]\n.group(<\n    csstree = "(generic)" ? \'generic\' :\n    no mdn ? \'Added / mdn-data missed\' :\n    patch ? (mdn=csstree ? \'Redundant patch\' : \'Patched\')\n\t\t: \'Syntax consistency\'\n>)',
                view: '{\n    view: \'list\',\n    item: {\n        view: \'expand\',\n        title: \'header:key + " (" + value.size() + ")"\',\n        content: {\n            view: \'table\',\n            data: \'value\',\n            cols: [\n                {\n                    header: \'Name\',\n                    content: {\n                        view: \'nowrap\',\n                        content: \'auto-link\'\n                    }\n                },\n                {\n                    header: \'Syntax\',\n                    content: {\n                        view: \'switch\',\n                        content: [\n                            {\n                                when: \'patch and mdn\',\n                                content: [\n                                    \'text:patch.comment\',\n                                \t{\n                                        view: \'key-value\',\n                                        className: \'syntax-diff\',\n                                        data: `[\n                                            { key: \'MDN\', value: mdn },\n                                            { key: \'Patch\', value: csstree },\n                                            { key: \'Diff\', before: mdn, after: csstree, view: \'diff\' }\n                                        ]`,\n                                        value: \'render:view or "pre:value"\'\n                                    }\n                                ]\n                            },\n                            {\n                                when: \'mdn\',\n                                content: {\n                                    view: \'diff\',\n                                    data: \'{before:mdn, after:csstree}\',\n                                    type: \'char\'\n                                }\n                            },\n                            {\n                                content: [\n                                    \'pre:csstree\'\n                                ]\n                            }\n                        ]\n                    }\n                }\n            ]\n        }\n    }\n}'
            }
        ]
    }
]);
