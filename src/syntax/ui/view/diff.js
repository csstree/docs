/* eslint-env browser */
/* global discovery, difflib */

const diffType = {
    char: difflib.diffChars,
    word: difflib.diffWords,
    wordws: difflib.diffWordsWithSpace,
    sentence: difflib.diffSentences,
    line: difflib.diffLines
};

discovery.view.define('diff', function(el, config, data) {
    const { type = 'wordws' } = config;
    const { before = '', after = '', delta = 'both' } = data;

    const diff = (type in diffType ? diffType[type] : diffType.wordws)(before, after);
    const showAdded = delta === 'both' || delta === 'added';
    const showRemoved = delta === 'both' || delta === 'removed';

    diff.forEach(part => {
        let textContainer = el;

        if (part.added || part.removed) {
            if (part.added ? !showAdded : !showRemoved) {
                return;
            }

            textContainer = el.appendChild(document.createElement('span'))
            textContainer.className = part.added ? 'added' : 'removed';
        }

        textContainer.appendChild(document.createTextNode(part.value));
    });
});
