clean:
	@rm -Rf cjs esm test/*.js

build-cjs:
	@rm -Rf cjs
	@npx tsc -m commonjs -d --sourceMap --outDir cjs
	@echo '{"type":"commonjs"}' > cjs/package.json

build-esm:
	@rm -Rf esm
	@npx tsc -d --sourceMap --outDir esm
	@node tsrd.cjs

build: build-cjs build-esm

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
