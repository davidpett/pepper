const path = require('path')

const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json')
const tsconfig = require(tsconfigPath)
const { paths } = tsconfig.compilerOptions

const babelPaths = {}
const jestPaths = {}
Object.entries(paths).forEach(([alias, aliasPaths]) => {
  const [path] = aliasPaths
  babelPaths[alias] = path.replace('./', './src/')
  if (alias.indexOf('*') === -1) {
    // jestPaths[alias] = path.replace('./', '<rootDir>/src/')
  } else {
    const starAlias = alias.replace('/*', '(.*)')
    const starPath = path.replace('./', '<rootDir>/src/').replace('/*', '/$1')
    jestPaths[starAlias] = starPath
  }
})

module.exports = {
  babelPaths,
  jestPaths,
}
