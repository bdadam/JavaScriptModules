JavaScriptModules
=================

This repository shows how to organize JavaScript modules, then build them with RequireJS, lint them with JSHint and test them with Jasmine. All the magic happens with GruntJS tasks.

##How to use it
While developing simply start `grunt dev` which does all these tasks:
* builds the .js files with RequireJS
* lints the files with JSHint
* runs all the Jasmine tests
* starts a webserver to access test files, like http://localhost:3001/test-require.html
* starts watching for file changes
* whenever at least one file changes it starts the tests and builds all files

##How to build
Run `grunt` and the built files are (re)created in the build folder.

##How to try it
```
git clone https://github.com/bdadam/JavaScriptModules.git
cd JavaScriptModules

npm install -g grunt-cli
npm install
npm start
```


##Available grunt tasks
* `grunt` - default task, runs tests and build
* `grunt dev` - runs in development mode
* `grunt tests` - runs the tests
