/* global discovery */

discovery.view.define('diff-syntax', {
    view: 'key-value',
    className: 'syntax-diff',
    data: `[
        { key: beforeName or 'MDN', view: 'diff', value: before, before, after, delta: "removed" },
        { key: afterName or 'CSSTree', view: 'diff', value: after, before, after, delta: "added" }
        //{ key: 'Diff', view: 'diff', before, after }
    ]`,
    value: 'render:view or "pre:value"'
});
