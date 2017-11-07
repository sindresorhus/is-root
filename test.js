import test from 'ava';
import m from '.';

test('returns true if root', t => {
	process.getuid = () => 0;
	t.true(m());
});

test('returns false if not root', t => {
	process.getuid = () => 1000;
	t.false(m());
});
