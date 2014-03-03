JS_FILES := $(shell find src/ -name *.js)
TPL_FILES := $(shell find src/ -name *.html)

build: dist/app.js

dist/app.js: $(JS_FILES) $(TPL_FILES)
	r.js -o config/build.conf.js

clean:
	rm --force --recursive dist/*

.PHONY: clean
