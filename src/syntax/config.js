const path = require('path');
const fetchData = require('./data');

module.exports = {
    name: 'CSSTree syntax reference',
    data: fetchData,
    prepare: path.join(__dirname, 'prepare.js'),
    view: {
        basedir: __dirname,
        assets: [
            '../../docs/csstree.js',
            '../../node_modules/diff/dist/diff.js',
            'ui/sidebar.css',
            'ui/sidebar.js',
            'ui/page/default.css',
            'ui/page/default.js',
            'ui/page/problems.css',
            'ui/page/problems.js',
            'ui/page/syntax-page.css',
            'ui/page/syntax-page.js',
            'ui/view/diff.css',
            'ui/view/diff.js',
            'ui/view/key-value.css',
            'ui/view/key-value.js',
            'ui/view/pre.css',
            'ui/view/pre.js',
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
            'ui/view/match-graph.css',
            'ui/view/match-graph.js',
            'ui/view/used-by.css',
            'ui/view/used-by.js'
        ]
    }
};
