install:
	npm install -g

start:
	npm run babel-node -- src/bin/brain-calc.js

publish:
	npm publish

lint:
	npm run eslint src
