discovery.page.define('problems', [
    {
        view: 'h1',
        content: [
            'text:"Problems"'
        ]
    },
    {
        view: 'ol',
        emptyText: 'No problems',
        data: `
            dict
                .[no match or refs.resolved.[no match]]
                .[no #.type or type=#.type]
                .sort(<[match?1:0, type.typeSorting(), name]>)
        `,
        itemConfig: {
            className: data => !data.match ? 'missed' : ''
        },
        item: [
            'auto-link',
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
