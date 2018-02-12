var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;
var CSSTREE_DIR = 'node_modules/css-tree';
var CSSTREE_DIST = path.join(CSSTREE_DIR, 'dist/csstree.js');
var CSSTREE_DEST = path.join('docs', 'csstree.js');

// build CSSTree
exec('npm run build', {
    cwd: CSSTREE_DIR,
    stdio: 'inherit'
});
console.log('\n' + CSSTREE_DIST + ' built...');

// copy bundle to the project
fs.copyFileSync(CSSTREE_DIST, CSSTREE_DEST);
console.log(CSSTREE_DIST, 'copied to', CSSTREE_DEST);
