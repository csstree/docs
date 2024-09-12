/* global discovery */

discovery.view.define('sidebar', {
    view: 'content-filter',
    content: {
        view: 'list',
        data: `
            dict.[
                type not in ["AtrulePrelude", "AtruleDescriptor"]
                and (name~=#.filter or descriptors.values().name~=#.filter)
            ]
            .group(=>type)
            .(
                // prepare items
                $items: value.({
                    type,
                    name,
                    parent,
                    nested: type = "Atrule" ? descriptors.values() : null,
                    syntax,
                    missed: no match and type != 'Atrule',
                    brokenRefs: (type != "Atrule" ? $ : (descriptors.values() or []) + (prelude or []))
                        .refs.resolved.[no match]
                }).sort(=>name);

                // section info
                {
                    type: key,
                    $items,
                    badSyntaxes: $items.[missed or brokenRefs]
                }
            )
            .sort(=>type.typeSorting())
        `,
        emptyText: 'No matches',
        item: {
            view: 'toc-section',
            header: [
                'text:type',
                'pill-badge:{ text: items.size(), href: pageLink("discovery", "dict.[type=\\"" + type + "\\"]") }',
                {
                    view: 'pill-badge',
                    when: 'badSyntaxes',
                    className: 'danger-badge',
                    data: `{
                        text: badSyntaxes.size()
                    }`
                }
            ],
            content: {
                view: 'list',
                data: 'items',
                itemConfig: {
                    className: data => data.missed ? 'missed' : ''
                },
                item: [
                    {
                        view: 'auto-link',
                        content: 'text-match:{ text, match: #.filter }'
                    },
                    {
                        when: 'type="Function" and syntax.terms.size() > 1',
                        view: 'html',
                        data: '"<span class=variants> × " + syntax.terms.size() + "</span>"'
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
                        when: 'type != "Function" and no mdn() and no missed',
                        data: '{ text: "added" }'
                    },
                    {
                        view: 'pill-badge',
                        className: 'danger-badge',
                        when: 'brokenRefs',
                        data: '{ text: brokenRefs.size() }'
                    },
                    {
                        view: 'list',
                        className: 'nested',
                        when: '#.filter',
                        data: 'nested.[name~=#.filter]',
                        whenData: true,
                        item: 'auto-link{ content: "text-match:{ text: entity.name, match: #.filter }" }'
                    }
                ]
            }
        }
    }
}, {
    tag: false
});
