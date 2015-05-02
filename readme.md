# is-root [![Build Status](https://travis-ci.org/sindresorhus/is-root.svg?branch=master)](https://travis-ci.org/sindresorhus/is-root)

> Check if the process is running as root user, eg. started with `sudo`, or as the Administrator user in the case of Windows.


## Install

```sh
$ npm install --save is-root
```


## Usage

```sh
$ sudo node index.js
```

```js
// index.js
var isRoot = require('is-root');

isRoot(function (result) {
	// result == true
});
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
