/* global discovery */

const page = {
    view: 'context',
    data: 'dict.pick(<type=#.page and name=#.id>)',
    content: [
        'h1:formatName()',
        {
            view: 'alert-danger',
            when: 'no match',
            content: 'text:"Syntax definition is missed"'
        },
        {
            view: 'section',
            when: 'match',
            className: 'test-value',
            header: 'text:""',
            content: {
                view: 'context',
                modifiers: [
                    { view: 'block', when: 'type="Function"',content: 'text:name + "("' },
                    { view: 'input', name: 'value', placeholder: 'Enter a value to match against the syntax' },
                    { view: 'block', when: 'type="Function"', content: 'text:")"' },
                ],
                content: {
                    view: 'section',
                    className: 'match-result',
                    data: 'match(#.value)',
                    header: [
                        'text:"Match result "',
                        {
                            view: 'badge',
                            when: 'iterations',
                            data: '{ text: iterations + " iteration(s)" }'
                        }
                    ],
                    content: {
                        view: 'switch',
                        content: [
                            {
                                when: 'error and #.value~=/\\S/',
                                content: 'alert-danger:error'
                            },
                            {
                                when: 'match',
                                content: {
                                    view: 'syntax-match',
                                    data: 'match',
                                    selector: '.test-value'
                                }
                            },
                            {
                                content: 'alert-success:"Enter a value to test"'
                            }
                        ]
                    }
                }
            }
        },
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
                                { value: 'used syntax' },
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
                                    { when: '#.syntaxView="used syntax"', content: [
                                        'syntax',
                                        'syntax-tree'
                                    ] },
                                    { content: {
                                        view: 'block',
                                        content: {
                                            view: 'key-value',
                                            className: 'syntax-diff',
                                            data: `
                                                $mdn: mdn().syntax;
                                                $patch: syntax(); 
                                                [
                                                    { key: 'MDN', value: $mdn },
                                                    { key: 'Patch', value: $patch },
                                                    { key: 'Diff', view: 'diff', before: $mdn, after: $patch }
                                                ]
                                            `,
                                            value: 'render:view or "pre:value"'
                                        }
                                    } }
                                ]
                            },
                        } },
                        { content: [
                            {
                                view: 'header',
                                content: [
                                    'text:"Formal syntax"',
                                    {
                                        view: 'badge',
                                        when: 'type!="Function" and no mdn() and match',
                                        data: '{ text: "Missed in mdn-data", color: "#ffbbaa" }'
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
            view: 'match-graph',
            when: 'match',
            data: 'match'
        },
        {
            view: 'section',
            header: 'text:"Used by"',
            content: 'used-by'
        }
    ]
};

discovery.page.define('Property', page, { resolveLink: 'Property' });
discovery.page.define('Type',     page, { resolveLink: 'Type' });
discovery.page.define('Function', page, { resolveLink: 'Function' });
