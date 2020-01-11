/* eslint-env browser */
/* global discovery */

discovery.view.define('syntax-match', function(el, config, data, context) {
    function updatePinned(pinned) {
        if (typeof selector === 'string') {
            [].slice.call(document.querySelectorAll(selector)).forEach(el =>
                el.classList.toggle('syntax-match-trace-pinned', Boolean(pinned))
            );
        }

        tracePopupEl.querySelector('.instruction').innerText = pinned
            ? '(click outside trace block to unpin)'
            : '(click to pin trace block)';
    }

    const { selector } = config;
    const tracePopupEl = document.createElement('div');

    discovery.view.render(el, {
        view: 'syntax-match-tree',
        ignoreClickElements: [tracePopupEl],
        onPinned: updatePinned,
        onTrace(trace) {
            if (trace) {
                tracePopupEl.hidden = false;
                tracePopupEl.lastChild.innerHTML = '';
                discovery.view.render(tracePopupEl.lastChild, 'syntax-match-trace', trace, context);
            } else {
                tracePopupEl.hidden = true;
            }
        }
    }, data);

    tracePopupEl.className = 'trace-popup';
    tracePopupEl.hidden = true;
    tracePopupEl.innerHTML =
        '<div class="header">Match trace <span class="instruction"></span></div>' +
        '<div class="trace"></div>';

    el.appendChild(tracePopupEl);

    setTimeout(updatePinned, 0);
});
