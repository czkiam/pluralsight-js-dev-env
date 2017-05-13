// This file isn't transpiled, so must use CommomJS and ES5
// Register babel to transpile before our test run.
require('babel-register')();

//Disable webpack features that Mocha doesnt understand.
require.extensions['.css'] = function(){};
