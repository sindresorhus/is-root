# is-root [![Build Status](https://travis-ci.org/sindresorhus/is-root.svg?branch=master)](https://travis-ci.org/sindresorhus/is-root)

> Check if the process is running as root user. Eg. started with `sudo`.


## Install

```bash
$ npm install --save is-root
```


## Usage

```
$ sudo node index.js
```

```js
// index.js
var isRoot = require('is-root');

isRoot();
//=> true
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
