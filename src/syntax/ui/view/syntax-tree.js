/* global discovery */

discovery.view.define('syntax-tree', {
    view: 'context',
    data: `
        ..(refs.resolved)
            .[type != "Function" and (syntax or no match)]
            .({ ..., matchType: @.matchType, matchName: @.matchName })
    `,
    content: {
        view: 'list',
        when: 'size()',
        limit: false,
        item: [
            'auto-link',
            'text:" = "',
            {
                view: 'switch',
                content: [
                    {
                        when: 'no match',
                        content: {
                            view: 'block',
                            className: 'error',
                            content: 'text:"syntax is missed"'
                        }
                    },
                    {
                        content: 'syntax'
                    }
                ]
            }
        ]
    }
});
