var fs = require('fs');
var path = require('path');
var exec = require('child_process').execSync;
var resolve = require('resolve');

var CSSTREE_DIR = path.dirname(resolve.sync('css-tree/package.json'));
var CSSTREE_DIST = path.join(CSSTREE_DIR, 'dist/csstree.min.js');
var DEST_DIR = path.join(__dirname, '../docs');
var CSSTREE_DEST = path.join(DEST_DIR, 'csstree.js');

// build CSSTree when using a dev version
if (fs.existsSync(path.join(CSSTREE_DIR, 'scripts'))) {
    exec('npm run build', {
        cwd: CSSTREE_DIR,
        stdio: 'inherit'
    });
    console.log('\n' + CSSTREE_DIST + ' built...');
}

// copy bundle to the project
fs.copyFileSync(CSSTREE_DIST, CSSTREE_DEST);
console.log(CSSTREE_DIST, 'copied to', CSSTREE_DEST);
