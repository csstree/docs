/* global discovery */

discovery.view.define('sidebar', {
    view: 'content-filter',
    content: {
        view: 'list',
        data: `
            dict[no #.filter or name~=#.filter]
            .group(<type>)
            .sort(<key.typeSorting()>)
            .({
                caption: key,
                items: value
                    .({
                        type,
                        syntax,
                        caption: formatName(),
                        href: "#" + type + ":" + name,
                        match: #.filter,
                        errors
                    })
                    .sort(<caption>),
                errors: value.errors
            })
        `,
        emptyText: 'No matches',
        item: {
            view: 'toc-section',
            header: [
                'text:caption',
                'pill-badge:{ text: items.size(), href: ("files[type=\\"" + caption + "\\"]").reportLink() }',
                {
                    view: 'pill-badge',
                    visible: 'errors',
                    className: 'errors',
                    data: `{
                        href: "#errors:" + caption,
                        text: errors.size() + " errors",
                        color: "#ff4444"
                    }`
                }
            ],
            content: {
                view: 'list',
                data: 'items',
                item: [
                    {
                        view: 'link',
                        data: '{ href, text: caption, match }',
                        content: 'text-match'
                    },
                    {
                        visible: 'type="Function" and syntax.terms.size() > 1',
                        view: 'html',
                        data: '"<span class=variants> × " + syntax.terms.size() + "</span>"',
                    },
                    {
                        view: 'pill-badge',
                        className: 'item-error-label',
                        visible: 'errors',
                        data: '{ text: errors.size() }'
                    }
                ]
            }
        }
    }
}, {
    tag: false
});
