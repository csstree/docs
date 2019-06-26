/* eslint-env browser */
/* global discovery, Diff */

const diffType = {
    char: Diff.diffChars,
    word: Diff.diffWords,
    wordws: Diff.diffWordsWithSpace,
    sentence: Diff.diffSentences,
    line: Diff.diffLines
};

discovery.view.define('diff', function(el, config, data) {
    const { type = 'wordws' } = config;
    const { before, after } = data;

    var diff = (type in diffType ? diffType[type] : diffType.wordws)(before, after);

    diff.forEach(part => {
        let textContainer = el;

        if (part.added || part.removed) {
            textContainer = el.appendChild(document.createElement('span'))
            textContainer.className = part.added ? 'added' : 'removed';
        }

        textContainer.appendChild(document.createTextNode(part.value));
    });
});
