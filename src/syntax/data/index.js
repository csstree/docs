const path = require('path');
const resolve = require('resolve');

module.exports = function() {
    const csstreeDataIndex = resolve.sync('css-tree/data');
    const mdnDataIndex = resolve.sync('mdn-data/css', { basedir: path.join(csstreeDataIndex, '../..') });
    const mdnPackageJson = resolve.sync('mdn-data/package.json', { basedir: path.join(csstreeDataIndex, '../..') });

    const csstreeData = require(csstreeDataIndex);
    const csstreeVersion = require('css-tree/package.json').version;
    const patchData = require('css-tree/data/patch.json');
    const mdnData = require(mdnDataIndex);
    const mdnVersion = require(mdnPackageJson).version;

    return {
        csstree: Object.assign({ version: csstreeVersion }, csstreeData),
        patch: patchData,
        mdn: Object.assign({ version: mdnVersion }, mdnData)
    };
};
