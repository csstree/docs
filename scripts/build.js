const fs = require('fs');
const path = require('path');
const exec = require('child_process').execSync;

const CSSTREE_DIR = path.dirname(require.resolve('css-tree/package.json'));
const CSSTREE_DIST = path.join(CSSTREE_DIR, 'dist/csstree.js');
const DEST_DIR = path.join(__dirname, '../docs');
const CSSTREE_DEST = path.join(DEST_DIR, 'csstree.js');

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
