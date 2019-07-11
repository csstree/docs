/* global discovery */

discovery.view.define('sidebar', {
    view: 'content-filter',
    content: {
        view: 'list',
        data: `
            dict.[no #.filter or name~=#.filter]
            .group(<type>)
            .(
                // prepare items
                $items: value.({
                    type,
                    name,
                    syntax,
                    missed: no match,
                    brokenRefs: refs.resolved.[no match]
                }).sort(<name>);

                // section info
                {
                    type: key,
                    $items,
                    badSyntaxes: $items.[missed or brokenRefs]
                }
            )
            .sort(<type.typeSorting()>)
        `,
        emptyText: 'No matches',
        item: {
            view: 'toc-section',
            header: [
                'text:type',
                'pill-badge:{ text: items.size(), href: pageLink("report", "dict.[type=\\"" + type + "\\"]") }',
                {
                    view: 'pill-badge',
                    when: 'badSyntaxes',
                    className: 'danger-badge',
                    data: `{
                        text: badSyntaxes.size(),
                        color: "#ff4444"
                    }`
                }
            ],
            content: {
                view: 'list',
                data: 'items',
                item: [
                    {
                        view: 'auto-link',
                        className: data => data.missed ? 'missed' : '',
                        content: 'text-match:{ text, match: #.filter }'
                    },
                    {
                        when: 'type="Function" and syntax.terms.size() > 1',
                        view: 'html',
                        data: '"<span class=variants> × " + syntax.terms.size() + "</span>"',
                    },
                    {
                        view: 'badge',
                        className: 'patched-badge',
                        when: 'patch() and mdn()',
                        data: '{ text: "patched" }'
                    },
                    {
                        view: 'badge',
                        className: 'patched-badge',
                        when: 'type != "Function" and no mdn()',
                        data: '{ text: "added" }'
                    },
                    {
                        view: 'pill-badge',
                        className: 'danger-badge',
                        when: 'brokenRefs',
                        data: '{ text: brokenRefs.size() }'
                    }
                ]
            }
        }
    }
}, {
    tag: false
});
