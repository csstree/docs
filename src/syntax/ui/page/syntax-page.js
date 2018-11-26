/* global discovery */

const page = {
    view: 'context',
    data: 'dict.[type=#.page and name=#.id].pick()',
    content: [
        'h1:formatName()',
        {
            view: 'section',
            className: 'test-value',
            header: 'text:"Test a value"',
            content: {
                view: 'context',
                modifiers: [
                    { view: 'input', name: 'value' }
                ],
                content: {
                    view: 'context',
                    data: 'match(#.value)',
                    content: {
                        view: 'section',
                        className: 'match-result',
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
                                    when: 'error',
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
                                    content: 'alert:"Enter a value to test"'
                                }
                            ]
                        }
                    }
                }
            }
        },
        {
            view: 'section',
            header: 'text:"Formal syntax"',
            content: [
                'syntax',
                'syntax-tree'
            ]
        },
        {
            view: 'match-tree',
            data: 'match'
        },
        {
            view: 'section',
            header: 'text:"Used by"',
            content: 'used-by'
        }
    ]
};

discovery.definePage('Property', page);
discovery.definePage('Type', page);
discovery.definePage('Function', page);
