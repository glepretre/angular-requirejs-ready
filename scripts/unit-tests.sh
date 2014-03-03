#!/bin/bash

BASE_DIR="$(dirname $0)/.."

echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"

# Try to use chromium instead if chrome is not present
if ! hash google-chrome 2>/dev/null; then
  hash chromium && export CHROME_BIN=/usr/bin/chromium
fi

karma start $BASE_DIR/config/karma.conf.js $*
