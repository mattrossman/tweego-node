#!/usr/bin/env node

const path = require('path')
const { spawn } = require('child_process');

const tweego = path.join(__dirname, '../dist/bin/tweego')
const storyformats = path.join(__dirname, '../dist/bin/storyformats')
const child = spawn(tweego, process.argv, { env: { TWEEGO_PATH: storyformats }})

child.stdout.on('data', (chunk) => {
	console.log(chunk.toString())
});

child.stderr.on('data', function(data) {
    console.error(data.toString());
});

child.on('exit', (code) => {
	process.exit(code)
});
