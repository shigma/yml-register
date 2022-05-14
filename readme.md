# yml-register

[![Codecov](https://img.shields.io/codecov/c/github/shigma/yml-register?style=flat-square)](https://codecov.io/gh/shigma/yml-register)
[![npm](https://img.shields.io/npm/v/yml-register?style=flat-square)](https://www.npmjs.com/package/yml-register)

Hooks into Node's require function to load `.yaml` and `.yml` files.

## Usage

### From CLI

```sh
node -r yml-register path/to/index.js
```

### Manually Import

```js
require('yml-register')
require('/path/to/my-file.yaml') // now it works!
```
