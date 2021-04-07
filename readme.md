# is-root

> Check if the process is running as root user, for example, one started with `sudo`

## Install

```
$ npm install is-root
```

## Usage

```
$ sudo node index.js
```

```js
// index.js
import isRoot from 'is-root';

isRoot();
//=> true
```

## Related

- [is-elevated](https://github.com/sindresorhus/is-elevated) - Check if the process is running with elevated privileges *(cross-platform)*
