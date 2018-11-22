const path = require('path');
const resolve = require('resolve');

module.exports = function() {
    const csstreeDataIndex = resolve.sync('css-tree/data');
    const mdnDataIndex = resolve.sync('mdn-data/css', { basedir: path.join(csstreeDataIndex, '../..') });

    const csstreeData = require(csstreeDataIndex);
    const mdnData = require(mdnDataIndex);

    return {
        csstree: csstreeData,
        mdn: mdnData
    };
};
