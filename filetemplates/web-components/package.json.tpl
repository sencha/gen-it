{
  "name": "@sencha/ext-web-components{toolkitshown}{bundle}",
  "version": "7.5.0",
  "main2wcx": "ext-web-components{toolkitshown}{bundle}.module.js",
  "main": "dist/index.js",
  "private": false,
  "binx": {
    "ext-web-components{toolkitshown}{bundle}": "./bin/ext-web-components{toolkitshown}{bundle}.js"
  },
  "bin": {
    "ext-web-components": "./bin/ext-web-components.js"
  },
  "scripts": {
    "build": "npx babel ./src --out-dir ./dist",
    "dev": "npm run build && npm version patch && npm pack && npm run copy",
    "copy": "cp *.tgz ../",
    "prepare": "npm run build"
  },
  "homepage": "https://github.com/sencha/ext-web-components#readme",
  "peerDependencies": {

  },
  "dependencies": {
    "object-assign": "~4.1.1",
    "pascal-case": "~3.1.1",
    "script-loader": "^0.7.2",
    "comment-json": "^4.0.2",
    "html-parsed-element": "^0.4.0",

    "@babel/cli": "^7.11.5",
    "@babel/core": "^7.11.5",
    "@babel/runtime": "^7.11.2",
    "@babel/plugin-proposal-class-properties": "^7.10.4",
    "@babel/plugin-proposal-decorators": "^7.10.5",
    "@babel/plugin-proposal-export-namespace-from": "^7.10.4",
    "@babel/plugin-proposal-function-sent": "^7.10.4",
    "@babel/plugin-proposal-json-strings": "^7.10.4",
    "@babel/plugin-proposal-numeric-separator": "^7.10.4",
    "@babel/plugin-proposal-throw-expressions": "^7.10.4",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/plugin-transform-runtime": "^7.11.5",
    "@babel/plugin-syntax-import-meta": "^7.10.4",
    "@babel/preset-env": "^7.11.5"
  },
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^4.4.1",
    "babel-loader": "^8.1.0",
    "html-loader": "^1.3.0",
    "style-loader": "^1.2.1",
    "css-loader": "^4.2.2",
    "url-loader": "^4.1.0",
    "webpack-merge": "^5.1.3",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sencha/ext-web-components{bundle}"
  },
  "keywords": [],
  "author": "Sencha",
  "license": "ISC"
  }