/* global discovery */

discovery.view.define('syntax-test', {
    view: 'block',
    when: 'match',
    className: 'test-value',
    content: {
        view: 'context',
        modifiers: [
            { view: 'block', when: 'type="Function"',content: 'text:name + "("' },
            { view: 'input', name: 'value', placeholder: 'Enter a value to match against the syntax' },
            { view: 'block', when: 'type="Function"', content: 'text:")"' }
        ],
        content: {
            view: 'section',
            className: 'match-result',
            when: '#.value ~= /\\S/',
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
});
