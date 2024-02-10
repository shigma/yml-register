# yml-register

[![downloads](https://img.shields.io/npm/dm/yml-register?style=flat-square)](https://www.npmjs.com/package/yml-register)
[![npm](https://img.shields.io/npm/v/yml-register?style=flat-square)](https://www.npmjs.com/package/yml-register)
[![GitHub](https://img.shields.io/github/license/shigma/yml-register?style=flat-square)](https://github.com/shigma/yml-register/blob/master/LICENSE)

Hooks into `require` / `import` to load `.yaml` and `.yml` files.

## Usage

### From CLI

CJS:

```sh
node -r yml-register path/to/index.cjs
```

ESM:

```sh
node --import yml-register path/to/index.mjs
```

### Manually import

CJS:

```js
require('yml-register')
require('path/to/file.yml') // now it works!
```

ESM:

```js
import 'yml-register'
const data = await import('path/to/file.yml') // now it works!
```

### TypeScript support

In order to fixing the error `Cannot find module 'file.yml' or its corresponding type declarations.` when using `import` statement in TypeScript, we provides a type declaration bundled in this package.

What you need is to append `compilerOptions.types` by `yml-register/types` in `tsconfig.json`.

```json
{
  "compilerOptions": {
    "types": [
      "yml-register/types",
    ],
  },
}
```
