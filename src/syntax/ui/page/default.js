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
                title: 'Syntax stat',
                query: '[\n    { header: \'Types\', data: dict.group(<type>).({ type: key, count: value.size() }) },\n    { header: \'Origin\', data: dict.({ type, name, mdn: mdn().syntax, csstree: syntax(), patch: patch() })\n        .[type!="Function"]\n        .group(<\n            csstree="(generic)" ? "Generic" :\n            no mdn ? \'Added (missed in MDN data)\' :\n            patch ? \'Patched MDN data\'\n                : \'As is from MDN data\'\n        >)\n        .({ type: key, count: value.size() })\n    }\n]',
                view: '{\n    view: \'list\',\n    item: [\n        \'h2:header\',\n        {\n            view: \'hstack\',\n            data: \'data\',\n            content: [\n                \'table\',\n                \'chart:.({ y: count, name: type })\'\n            ]\n        }\n    ]\n}'
            },
            // {
            //     title: 'csstree & mdn-data parity',
            //     query: '$csstree: csstree.properties;\n$mdn: mdn.properties;\n\n($csstree.keys() + mdn.keys())\n.[$csstree[$] != $mdn[$].syntax]\n.({ property: $, csstree: $csstree[$], mdn: $mdn[$].syntax })',
            //     view: '{\n    view: \'table\'\n}'
            // },
            {
                title: 'CSSTree difference over mdn-data',
                query: '$csstree: dict\n    .({ type, name, mdn: mdn().syntax, csstree: syntax(), patch: patch() })\n    .[patch and csstree!="(generic)" and type!="Function"];\n$mdnRemoved: patch\n    .(\n        properties.entries().({ type: \'Property\', name: key, csstree: null, patch: value }).sort(<name>) + \n        syntaxes.entries().({ type: \'Type\', name: key, csstree: null, patch: value }).sort(<name>)\n    )\n    .[no patch.syntax]\n    .({ ..., mdn: mdn().syntax });\n($csstree + $mdnRemoved)\n.group(<\n    no csstree and no mdn ? \'Redundant remove\' :\n    no csstree ? \'Removed\' :\n    no mdn ? \'Added / mdn-data missed\' :\n    mdn=csstree ? \'Redundant patch\' :\n       \'Patched\'\n>)',
                view: '{\n    view: \'list\',\n    item: {\n        view: \'expand\',\n        header: \'h3:key + " (" + value.size() + ")"\',\n        content: {\n            view: \'table\',\n            data: \'value\',\n            cols: [\n                {\n                    header: \'Name\',\n                    content: {\n                        view: \'nowrap\',\n                        content: {\n                            view: \'auto-link\',\n                            fallback: \'text:formatName()\'\n                        }\n                    }\n                },\n                {\n                    header: \'Syntax\',\n                    content: {\n                        view: \'switch\',\n                        content: [\n                            {\n                                when: \'csstree and mdn\',\n                                content: [\n                                    \'html:"<div style=color:#aaa;margin-bottom:5px>" + patch.comment\',\n                                    \'diff-syntax:{ before: mdn, after: csstree }\'\n                                ]\n                            },\n                            {\n                                when: \'mdn and csstree\',\n                                content: {\n                                    view: \'diff\',\n                                    data: \'{before:mdn, after:csstree}\',\n                                    type: \'char\'\n                                }\n                            },\n                            {\n                                content: [\n                                    \'html:"<div style=color:#aaa;margin-bottom:5px>" + patch.comment\',\n                                    \'syntax:{..., syntax: csstree or mdn}\'\n                                ]\n                            }\n                        ]\n                    }\n                }\n            ]\n        }\n    }\n}'
            },
            {
                title: 'mdn-data syntax code style problems',
                query: '(mdn.properties.entries().({\n    type: \'Property\',\n    name: key,\n    syntax: value.syntax,\n    normSyntax: { syntax: value.syntaxAst() }.syntax()\n}) +\nmdn.syntaxes.entries().({\n    type: \'Type\',\n    name: key,\n    syntax: value.syntax,\n    normSyntax: { syntax: value.syntaxAst() }.syntax()\n})).[syntax != normSyntax]',
                view: '{\n    view: \'table\',\n    cols: [\n        {\n            header: \'Name\',\n            content: {\n                view: \'nowrap\',\n                content: {\n                    view: \'auto-link\',\n                    fallback: \'text:formatName()\'\n                }\n            }\n        },\n        {\n            header: \'syntax\',\n            content: `diff-syntax:{\n                before: syntax,\n                beforeName: \'Defined in mdn/data\',\n                after: normSyntax,\n                afterName: \'Should to be\'\n            }`\n        }\n    ]\n}'
            },
            {
                title: 'Syntaxes used a string in definition',
                query: 'dict.[syntax..(syntaxChildren()).[type="String"]]',
                view: '{\n    view: \'table\',\n    cols: {\n        type: false,\n        name: {\n            view: \'nowrap\',\n            content: \'auto-link\'\n        },\n        syntax: \'syntax:{..., matchType: \\\'String\\\'}\',\n        match: false,\n        refs: false\n    }\n}'
            }
        ]
    }
]);
