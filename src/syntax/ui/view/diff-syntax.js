/* global discovery */

discovery.view.define('diff-syntax', {
    view: 'key-value',
    className: 'syntax-diff',
    data: `[
        { key: beforeName or 'MDN', value: before },
        { key: afterName or 'CSSTree', value: after },
        { key: 'Diff', view: 'diff', before, after }
    ]`,
    value: 'render:view or "pre:value"'
});
