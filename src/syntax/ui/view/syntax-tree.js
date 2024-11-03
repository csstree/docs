/* global discovery */

discovery.view.define('syntax-tree', {
    view: 'context',
    data: `
        $syntax;
        ..(refs().resolved)
            .[type != "Function" and (syntax or no match)]
            .({ $syntax, ..., matchType: @.matchType, matchName: @.matchName })
    `,
    content: {
        view: 'list',
        when: 'size()',
        limit: false,
        item: [
            {
                view: 'auto-link',
                fallback: 'text:syntax',
                className: (data) => !data.match ? 'error' : ''
            },
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
