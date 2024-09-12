import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default async function() {
    const csstreeRoot = path.dirname(require.resolve('css-tree/package.json'));
    const mdnDataIndex = require.resolve('mdn-data/css', { paths: [csstreeRoot] });
    const mdnPackageJson = require.resolve('mdn-data/package.json', { paths: [csstreeRoot] });

    const csstreeVersion = require('css-tree/package.json').version;
    const csstreeData = await import('css-tree/definition-syntax-data');
    const csstreeDataPatch = await require('css-tree/definition-syntax-data-patch');
    const mdnData = require(mdnDataIndex);
    const mdnVersion = require(mdnPackageJson).version;

    return {
        csstree: Object.assign({ version: csstreeVersion }, csstreeData),
        patch: csstreeDataPatch,
        mdn: Object.assign({ version: mdnVersion }, mdnData)
    };
};
