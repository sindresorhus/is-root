/**
Check if the process is running as root user, for example, one started with `sudo`.

@example
```
// index.js
import isRoot from 'is-root';

console.log(isRoot());

// $ sudo node index.js
// true
```
*/
export default function isRoot(): boolean;
