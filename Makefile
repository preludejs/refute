clean:
	@rm -Rf cjs mjs test/*.js

build-cjs:
	@rm -Rf cjs
	@npx tsc -m commonjs -d --sourceMap --outDir cjs
	@echo '{"type":"commonjs"}' > cjs/package.json

build-mjs:
	@rm -Rf mjs
	@npx tsc -d --sourceMap --outDir mjs

build-test:
	@npx tsc -m commonjs -p test/tsconfig.json

build: build-cjs build-mjs build-test

rebuild: clean build

test: rebuild
	@npx jest

update:
	@npx npm-check --update --save-exact

postversion:
	@git push
	@git push --tags
	@npm publish --access public

.PHONY: test
