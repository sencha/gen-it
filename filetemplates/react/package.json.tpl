{
  "name": "@sencha/ext-react{toolkitshown}{bundle}",
  "version": "7.4.0",
  "description": "Sencha ext-react{toolkitshown}{bundle}",
  "main": "dist/index.js",
  "bin": {
    "ext-react": "./bin/ext-react.js"
  },
  "scripts": {
    "build": "npx babel ./src --out-dir ./dist",
    "prepare": "npm run build",
    "postinstall": "npm run build & node ./postinstall.js",

    "xprepublish": "npm run build",
    "xbuild": "npm run babel & npm run buildwebpack",
    "xwatch": "npx babel ./src --out-dir ./dist --watch",
    "xbabel": "npx babel ./src --out-dir ./dist",
    "xbuildwebpack": "webpack --production",
    "xprepare": "npm run build"
  },
  "keywords": [
    "Sencha",
    "Ext JS",
    "React",
    "ExtReact"
  ],
  "author": "Sencha, Inc.",
  "license": "MIT",
  "homepage": "https://github.com/sencha/ext-react{toolkitshown}{bundle}#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/sencha/ext-react{toolkitshown}{bundle}.git"
  },
  "peerDependencies": {
    "react": "~16.13.1",
    "react-dom": "~16.13.1"
  },
  "dependencies": {
    "@sencha/ext-web-components{toolkitshown}{bundle}": "~7.4.0"
  },
  "devDependencies": {
    "fs-extra": "~9.0.1",
    "react": "~16.13.1",
    "react-dom": "~16.13.1",
    "webpack-bundle-analyzer": "~3.8.0",
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
    "@babel/preset-env": "^7.11.5",

    "@babel/preset-react": "^7.10.4",
    "@types/react": "^16.9.49",
    "@types/react-dom": "~16.9.8",

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
  }
}