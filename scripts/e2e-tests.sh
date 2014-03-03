#!/bin/sh

BASE_DIR="$(dirname $0)/.."

echo ""
echo "Starting Protractor (https://github.com/angular/protractor)"
echo "-------------------------------------------------------------------"

protractor $BASE_DIR/config/protractor.conf.js $*
