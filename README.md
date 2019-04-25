## CI Progress Webpack Plugin

> Display less logs as progress during CI running.

### Usage

![](https://img.shields.io/npm/v/@jimengio/ci-progress-webpack-plugin.svg?style=flat-square)

```bash
npm install --dev @jimengio/ci-progress-webpack-plugin
```

```js
let ProgressPlugin = require("@jimengio/ci-progress-webpack-plugin");

plugins: [new ProgressPlugin({ interval: 2500 })];
```

### License

MIT
