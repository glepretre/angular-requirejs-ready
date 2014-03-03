# angular-requirejs-ready

Starter app structure for projects using AngularJS + RequireJS.

**Based on angular Best Practices published the 13th Feb. 2014 on
[AngularBlog](http://blog.angularjs.org/2014/02/an-angularjs-style-guide-and-best.html)**

## Dependencies

    bower install

## Tests dependencies
- - -

    npm install

then

    webdriver-manager update

## Try it
- - -

###1. Start webserver:

    scripts/web-server.js

or if you're feeling lazy

    npm start

###2. Open browser and go to:

[http://localhost:8000/proto/index.html](http://localhost:8000/proto/index.html)

## Run tests
-----------

###1. Unit tests

    scripts/unit-tests.sh

or

    npm run-script unit

###2. e2e tests

Start webserver:

    scripts/web-server.js

or if you're feeling lazy

    npm start

Start selenium server (in another terminal):

    webdriver-manager start

Then, in another terminal:

    scripts/e2e-tests.sh

or

    npm run-script e2e

**Important: Don't move the mouse during the e2e tests, otherwise some will fail!**

## Building

    make build

Library is built into dist/
