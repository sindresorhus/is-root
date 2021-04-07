import test from 'ava';
import isRoot from './index.js';

test('returns true if root', t => {
	process.getuid = () => 0;
	t.true(isRoot());
});

test('returns false if not root', t => {
	process.getuid = () => 1000;
	t.false(isRoot());
});
