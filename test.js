const {Buffer} = require('node:buffer');
const path = require('node:path');
const {promises: fs} = require('node:fs');
const isGif = require('is-gif');
const test = require('ava');
const imageminGifsicle = require('./index.js');

test('Buffer', async t => {
	const buf = await fs.readFile(path.resolve(__dirname, 'fixture.gif'));
	const data = await imageminGifsicle()(buf);
	t.true(data.length < buf.length);
	t.true(isGif(data));
});

test('Buffer - non-binary', async t => {
	const buf = Buffer.from('string');
	const data = await imageminGifsicle()(buf);

	t.is(data.toString(), 'string');
});
