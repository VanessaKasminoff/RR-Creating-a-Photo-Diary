#!/usr/bin/env node

import open from './node_modules/open/index.js'
// const open = require('open');
import {exec} from 'child_process'
// const { exec } = require('child_process');
import spawn from 'cross-spawn'
// const spawn = require('cross-spawn');  // Importing cross-spawn

exec('npx webpack --mode="development"', () => {
    spawn('npx', ['webpack', '-watch', '--mode=development'], { stdio: 'inherit' });  // Notice we don't need shell: true here
    open('./public/index.html');
    console.log('Watching for changes in "./src"');
});

spawn('node', ['script.js'], {
    env: {
        NODE_ENV: 'production',
        PATH: process.env.PATH
    }
});
