/* global discovery */

const page = {
    view: 'context',
    data: 'dict[=>type=#.page and name=#.id]',
    content: [
        {
            view: 'page-header',
            prelude: 'badge:{ text: type, color: "rgba(237, 177, 9, 0.35)" }',
            content: 'h1:formatName()'
        },
        {
            view: 'alert-danger',
            when: 'no match and type != "Atrule"',
            content: 'text:"Syntax definition is missed"'
        },
        'syntax-test',
        // {
        //     view: 'key-value',
        //     when: 'type="Property" and mdn()',
        //     data: 'mdn().entries().[key!="syntax"]'
        // },
        {
            view: 'block',
            className: ['view-section', 'syntax-section'],
            when: 'syntax',
            data: `{
                ...,
                matchType: #.params.hltype,
                matchName: #.params.hlname
            }`,
            content: [
                {
                    view: 'switch',
                    content: [
                        { when: 'patch() and mdn()', content: {
                            view: 'tabs',
                            name: 'syntaxView',
                            beforeTabs: 'header:"Formal syntax"',
                            tabs: [
                                { value: 'csstree', content: 'text:"CSSTree"' },
                                { value: 'mdn', content: 'text:"MDN"' },
                                { value: 'diff' }
                            ],
                            afterTabs: {
                                view: 'badge',
                                when: 'patch() and mdn()',
                                data: '{ prefix: "Patched", color: "#f1eccb", text: patch().comment }'
                            },
                            content: {
                                view: 'switch',
                                content: [
                                    { when: '#.syntaxView="csstree"', content: [
                                        'syntax',
                                        'syntax-tree'
                                    ] },
                                    { when: '#.syntaxView="mdn"', data: 'mdn()', content: [
                                        'syntax',
                                        'syntax-tree'
                                    ] },
                                    { content: {
                                        view: 'block',
                                        className: 'syntax-diff',
                                        content: 'diff-syntax:{ before: mdn().syntax, after: syntax() }'
                                    } }
                                ]
                            }
                        } },
                        { content: [
                            {
                                view: 'header',
                                content: [
                                    'text:"Formal syntax"',
                                    {
                                        view: 'badge',
                                        when: 'type!="Function" and no mdn() and match',
                                        data: '{ text: "Missed in mdn-data", color: "rgba(255, 52, 1, 0.335)" }'
                                    }
                                ]
                            },
                            'syntax',
                            'syntax-tree'
                        ] }
                    ]
                }
            ]
        },
        {
            view: 'context',
            when: 'type = "Atrule"',
            content: [
                {
                    view: 'context',
                    when: 'prelude',
                    content: [
                        'h3:"Prelude"',
                        'syntax:prelude'
                    ]
                },
                {
                    view: 'context',
                    when: 'descriptors',
                    content: [
                        'h3:"Descriptors"',
                        {
                            view: 'table',
                            className: 'descriptor-table',
                            data: 'descriptors.values()',
                            cols: [
                                { header: 'Name', content: ['auto-link{ content: "text:entity.name" }'] },
                                { header: 'Syntax', content: 'syntax' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            view: 'match-graph',
            when: 'match',
            data: 'match'
        },
        {
            view: 'section',
            when: 'not type ~= /^Atrule/',
            header: 'text:"Used by"',
            content: 'used-by'
        }
    ]
};

discovery.page.define('Atrule',   page);
discovery.page.define('AtruleDescriptor', page);
discovery.page.define('AtrulePrelude', page);
discovery.page.define('Property', page);
discovery.page.define('Type',     page);
discovery.page.define('Function', page);
