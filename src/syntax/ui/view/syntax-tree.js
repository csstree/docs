/* global discovery */

discovery.view.define('syntax-tree', {
    view: 'context',
    data: `
        ..(refs().resolved)
            .[type != "Function" and (syntax or no match)]
            .({ ..., matchType: @.matchType, matchName: @.matchName })
    `,
    content: {
        view: 'list',
        when: 'size()',
        limit: false,
        item: [
            {
                view: 'auto-link',
                postRender(el, _, data) {
                    if (!data.match) {
                        el.firstChild.classList.add('error');
                    }
                }
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
