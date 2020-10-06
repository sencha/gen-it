# gen-it

This Readme documents how to use the gen-it.js tool and the process to re-generate a new set of npm packages for all 3 bridge products: 
- ExtAngular
- ExtWebComponents
- ExtReact

**NOTE: a ./ in front of any file or folder represents this project path (the one with the README.md)**

## Step 1 - Acquire the latest version/branch of the SDK from https://github.com/extjs/SDK

- create a new folder where SDK will be downloaded - this readme will refer to it as {sdkroot}
  - {sdkroot} = folder where SDK will be downloaded
- cd to {sdkroot}
- run: git clone https://github.com/extjs/SDK

## Step 2 - Generate the DOXI files for classic and modern toolkits

**NOTE: root folder of sdk is {sdkroot}

to produce: ./AllClassesFiles/docs/classic/classic-all-classes-flatten.json

### 2.1 - create the following folders in this project (the one with this README.md)
  - ./AllClassesFiles
  - ./AllClassesFiles/docs
  - ./AllClassesFiles/docs/classic
  - ./AllClassesFiles/docs/modern

### 2.2 - Classic Doxi
- cd {sdkroot}/SDK/docs/classic
- run: sencha doxi build all-classes-flatten

**NOTE: file is built to (output): {sdkroot}/SDK/build/docs/classic/classic-all-classes-flatten.json**

### 2.3 - Modern Doxi
- copy this file to ./AllClassesFiles/docs/classic/

to produce: AllClassesFiles/modern/modern-all-classes-flatten.json

- cd {sdkroot}/SDK/docs/modern
- run: sencha doxi build all-classes-flatten

**NOTE: file is built to: {sdkroot}/SDK/build/docs/modern/cmodern-all-classes-flatten.json**

- copy this file to ./AllClassesFiles/docs/modern/

## Step 3 - change globals (in globals.js)
  - global['ExtVersion'] = '7.3.0' (or whatever new version is)
  - optional - global['AllClassesFolder'] = './'
  - optional - global["generatedFolders"] = "./GeneratedFolders/";

change old version (7.3.0) to new version
- global['ExtVersion'] (as mentioned above)
- all references in the filetemplates folder

## Step 4 - install npm packages

(the following is run in the root folder of this project)
- run: npm install

## Step 5 - generate npm packages for webcomponents

(the following is run in the root folder of this project)

- run: npm run modern-extwebcomponents
- run: npm run classic-extwebcomponents

  Generated npm packages are at: ./GeneratedFolders/blank/
  - ext-web-components-modern
  - ext-web-components-classic

## Step 6 - publish or link 2 web-component packages

Since the Ext-Angular and ExtReact rely on the web-components packages being npm published,
you must publish these 2 packages first:

1. Change into GeneratedFiles/blank/<package_name/> and run `npm install`
2. Run the publish commands:
- run: npm publish ext-web-components-modern
- run: npm publish ext-web-components-classic
or
- run: npm link ext-web-components-modern
- run: npm link ext-web-components-classic

## Step 7 - generate npm packages for extreact and extangular

(the following is run in the root folder of this project)

- run: npm run modern-extreact
- run: npm run modern-extangular
- run: npm run classic-extreact
- run: npm run classic-extangular

  Generated npm packages are at: ./GeneratedFolders/blank/
  - ext-react-modern
  - ext-angular-modern
  - ext-react-classic
  - ext-angular-classic

## Step 8 - npm install 2 ext-react packages

- cd to ./GeneratedFolders/blank/ext-react-modern
- run: npm install
- run: npm publish

- cd to ./GeneratedFolders/blank/ext-react-classic
- run: npm install
- run: npm publish

## Step 9 - publish or link ext-angular-classic package

- cd to ./GeneratedFolders/blank/ext-angular-classic
- run: npm install
- run: npm run packagr (this will create a ./dist folder)
- copy ./bin ./dist/bin
- copy ./postinstall.js ./dist/postinstall.js
- cd to ./dist
- add scripts entry to ./dist/package.json
```
  "scripts": {
    "postinstall": "node ./postinstall.js"
  }
```
- add bin entry to ./dist/package.json
```
  "bin": {
    "ext-angular": "./bin/ext-angular.js"
  },
```
- run: npm publish or npm link

## Step 10 - publish or link ext-angular-modern package

- cd to ./GeneratedFolders/blank/ext-angular-modern
- run: npm install
- run: npm run packagr (this will create a ./dist folder)
- copy ./bin ./dist/bin
- copy ./postinstall.js ./dist/postinstall.js
- cd to ./dist
- add scripts entry to ./dist/package.json
```
  "scripts": {
    "postinstall": "node ./postinstall.js"
  }
```
- add bin entry to ./dist/package.json
```
  "bin": {
    "ext-angular": "./bin/ext-angular.js"
  },
```
- run: npm publish or npm link


# Project Documentation

## gen-it tool

standard project files

- ./package.json (npm package file)
- ./package-lock.json (npm package lock file)
- ./README.md  (this file)


genIt utility is 3 files

- ./genIt.js
- ./genItUtils.js
- ./globals.js

folders auto-generated
- ./GeneratedFolders
- ./node-modules

folder documentation
- ./filetemplates (where templates for all generated files are stored)
- ./npmpackage (starter files for the npm process)
- ./XTemplate (Ext JS XTemplate code used by the genIt.js utility)

description of command line (which is used in the scripts section of package.json)

node ./genIt.js blank modern

1st is node (the app runtime)
2nd is the js file to run
3rd is the suffix (blank means no suffix added to name)
4th is toolkit (classic or modern)

# Sencha Ext JS Bridges Project(s) Architecture Documentation 
A guide on how ExtAngular and ExtReact consume ExtWebComponents (EWC) and how the packages are associated to each other (dependencies).

## Products: 
1. ExtAngular
2. ExtReact
3. ExtWebComponents

## High Level
There are 10 packages that need to be updated. 

Packages built using *gen-it.js*:
* ext-angular-classic
* ext-angular-modern
* ext-react-classic
* ext-react-modern
* ext-web-components-classic
* ext-web-components-modern

Packages build using *theme-and-engine.js*
ext-classic-runtime
ext-modern-runtime

Packages built from the existing bridge [ext-react-repo](https://github.com/sencha/ext-react):
* cra-template-ext-react-classic
* cra-template-ext-react-modern

There are versions of ExtReact, ExtAngular and ExtWebComponents for both the classic and modern toolkits. Here is a list of the components:

* ext-web-components-classic
* ext-web-components-modern
* ext-angular-classic
* ext-angular-modern
* ext-react-classic
* ext-react-modern

**NOTE: ext-angular and ext-react require the respective ext-web-components package (by toolkit) in order to run. As such, both products package.json file includes a dependencies reference, similar to the following**
```
   "@sencha/ext-web-components-classic": "~7.3.0",
   ```

## gen-it.js tool

The list of components above can be generated with the ‘gen-it.js’ tool available here: https://github.com/sencha/gen-it 	
Documentation on using this tool is available here: https://github.com/sencha/gen-it/blob/master/README.md

This tool will generate npm packages for all 6 components (above), which are then ready to be published to npm.

## theme-and-engine.js tool

There is also a second tool: theme-and-engine.js available at the following link:https://github.com/sencha/theme-and-engine
Documentation on using this tool is available here: https://github.com/sencha/theme-and-engine/blob/master/README.md

This tool will generate 2 npm packages with the following engine and theme files

1. `ext-classic-runtime` containing:
    - `classic.engine.enterprise.js`
    - Material folder (for the material theme)
2. `ext-modern-runtime`
    - `modern.engine.enterprise.js`
    - Material folder (for the material theme)

These 2 npm packages (above) contain the ExtJS engine and theme needed for the products, with these, no custom Ext JS webpack plugin is need

## Special considerations when building `ext-angular` and `ext-react` toolkit packages
Both `ext-angular-[toolkit]` and `ext-react-[toolkit]` contain a `postinstall.js` file (which is used for npm post install).  This file will look for the above packages, and, if found, will copy the engine and theme files needed for both `Angular CLI` and `create-react-app` (native React) generated applications. 

**NOTE: during the development process, it is critical that the bin/ directory and postinstall.js are copied into each packages dist folder and that package.json is configured to run the post install hook**

`create-react-app` - copies to the ./public folder and modifies ./public/index.html.
`Angular CLI` - copies to the root of the project and make entries in the angular.json file

### CRA (create-react-app) Templates

For ExtReact, there are 2 cra templates (one for modern and one for classic) available here:
- [classic](https://github.com/sencha/ext-react/tree/ext-react-7.3.x/packages/cra-template-ext-react-classic)
- [modern](https://github.com/sencha/ext-react/tree/ext-react-7.3.x/packages/cra-template-ext-react-modern)

For both of these packages, a new version of Ext JS requires changing the version numbers in both packages files, specifically:
* package.json
* template.json









