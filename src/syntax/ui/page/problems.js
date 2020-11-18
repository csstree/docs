/* global discovery */

discovery.page.define('problems', [
    {
        view: 'page-header',
        content: 'h1:"Problems"'
    },
    {
        view: 'ol',
        emptyText: 'No problems',
        data: `
            dict
                .[isProblem()]
                .sort(match desc, type.typeSorting() asc, name asc)
        `,
        itemConfig: {
            className: data => !data.match ? 'missed' : ''
        },
        item: [
            'auto-link{ fallback: "text:formatName()" }',
            'text:" = "',
            {
                view: 'switch',
                content: [
                    {
                        when: 'syntax',
                        content: 'syntax'
                    },
                    {
                        content: 'html:"<span class=error>syntax is missed</span>"'
                    }
                ]
            }
        ]
    }
]);
