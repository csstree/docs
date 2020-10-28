const path = require('path');
const fetchData = require('./data');

module.exports = {
    name: 'CSS syntax reference (mdn/data & CSSTree)',
    data: fetchData,
    darkmode: 'disabled',
    prepare: path.join(__dirname, 'prepare.js'),
    plugins: [
        '@discoveryjs/view-plugin-highcharts',
        '@discoveryjs/view-plugin-highcharts/index.css'
    ],
    view: {
        basedir: __dirname,
        libs: {
            csstree: '../../node_modules/css-tree/dist/csstree.min.js',
            difflib: '../../node_modules/diff/dist/diff.js'
        },
        assets: [
            'ui/sidebar.css',
            'ui/sidebar.js',
            'ui/page/default.css',
            'ui/page/default.js',
            'ui/page/problems.css',
            'ui/page/problems.js',
            'ui/page/syntax-page.css',
            'ui/page/syntax-page.js',
            'ui/view/diff-syntax.js',
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
            'ui/view/syntax-test.js',
            'ui/view/syntax-tree.css',
            'ui/view/syntax-tree.js',
            'ui/view/match-graph.css',
            'ui/view/match-graph.js',
            'ui/view/used-by.css',
            'ui/view/used-by.js'
        ]
    }
};
