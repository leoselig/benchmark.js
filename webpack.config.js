const LIBRARY_NAME = 'Benchmark';
const LIBRARY_TARGETS = {
  'amd': 'amd',
  'this': 'global',
  'umd': 'umd'
};

module.exports = Object.keys(LIBRARY_TARGETS).map((libraryTarget) => {
  const bundledFileName = `${LIBRARY_TARGETS[libraryTarget]}.js`;

  return {
    entry: './lib/index',
    output: {
      path: './dist',
      filename: bundledFileName,
      libraryTarget,
      library: LIBRARY_NAME
    },
    externals: {
      microtime: true,
      lodash: true,
      platform: true
    }
  }
});
