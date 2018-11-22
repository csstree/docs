const path = require('path');
const fetchData = require('./data');

module.exports = {
    name: 'CSS syntax reference',
    data: fetchData,
    prepare: path.join(__dirname, 'prepare.js'),
    view: {
        base: __dirname,
        assets: [
            '../../docs/csstree.js',
            'ui/sidebar.css',
            'ui/sidebar.js',
            'ui/page/default.js',
            'ui/page/syntax-page.css',
            'ui/page/syntax-page.js',
            'ui/view/syntax.css',
            'ui/view/syntax.js',
            'ui/view/syntax-match.css',
            'ui/view/syntax-match.js',
            'ui/view/syntax-match-tree.css',
            'ui/view/syntax-match-tree.js',
            'ui/view/syntax-match-trace.css',
            'ui/view/syntax-match-trace.js',
            'ui/view/syntax-tree.css',
            'ui/view/syntax-tree.js',
            'ui/view/match-tree.css',
            'ui/view/match-tree.js',
            'ui/view/used-by.css',
            'ui/view/used-by.js'
        ]
    }
};
