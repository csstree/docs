const path = require('path');
const resolve = require('resolve');

module.exports = function() {
    const csstreeRoot = path.dirname(resolve.sync('css-tree/package.json'));
    const mdnDataIndex = resolve.sync('mdn-data/css', { basedir: csstreeRoot });
    const mdnPackageJson = resolve.sync('mdn-data/package.json', { basedir: csstreeRoot });

    const csstreeVersion = require('css-tree/package.json').version;
    const csstreeData = require('css-tree/definition-syntax-data');
    const csstreeDataPatch = require('css-tree/definition-syntax-data-patch');
    const mdnData = require(mdnDataIndex);
    const mdnVersion = require(mdnPackageJson).version;

    return {
        csstree: Object.assign({ version: csstreeVersion }, csstreeData),
        patch: csstreeDataPatch,
        mdn: Object.assign({ version: mdnVersion }, mdnData)
    };
};
