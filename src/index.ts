import { readFileSync } from 'fs'
import { load } from 'js-yaml'
import Module from 'module'

function loader(module: Module, filename: string) {
  const source = readFileSync(filename, 'utf8')
  module.exports = load(source)
}

for (const extname of ['.yml', '.yaml']) {
  require.extensions[extname] = loader
}
