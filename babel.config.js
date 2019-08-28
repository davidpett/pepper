const { babelPaths } = require('./scripts/path-helper')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: babelPaths,
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.json',
        ],
      },
    ],
  ],
}
