## CI Progress Webpack Plugin

> Display less logs as progress during CI running.

![image](https://user-images.githubusercontent.com/25790987/56719554-8d3d1000-6773-11e9-96b0-03b0b1a87043.png)

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
