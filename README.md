This Readme documents the process to re-generate a new set of npm packages for the bridge products.

note: a ./ in front of any file or folder represents this project path (the one with the README.md)

Step 1 - Acquire the latest version/branch of the SDK from https://github.com/extjs/SDK

- create a new folder where SDK will be downloaded - this readme will refer to it as {sdkroot}
  - {sdkroot} = folder where SDK will be downloaded
- cd to {sdkroot}
- run: git clone https://github.com/extjs/SDK

Step 2 - Generate the DOXI files for classic and modern toolkits
note: root folder of sdk is {sdkroot}

to produce: ./AllClassesFiles/docs/classic/classic-all-classes-flatten.json

-create the following folders in this project (the one with this README.md)
  - ./AllClassesFiles
  - ./AllClassesFiles/docs
  - ./AllClassesFiles/docs/classic
  - ./AllClassesFiles/docs/modern

- cd {sdkroot}/SDK/docs/classic
- run: sencha doxi build all-classes-flatten

file is built to: {sdkroot}/SDK/build/docs/classic/classic-all-classes-flatten.json

- copy this file to ./AllClassesFiles/docs/classic/

to produce: AllClassesFiles/modern/modern-all-classes-flatten.json

- cd {sdkroot}/SDK/docs/modern
- run: sencha doxi build all-classes-flatten

file is built to: {sdkroot}/SDK/build/docs/modern/cmodern-all-classes-flatten.json

- copy this file to ./AllClassesFiles/docs/modern/

Step 3 - change globals (in globals.js)
  global['ExtVersion'] = '7.3.0' (or whatever new version is)
  optional - global['AllClassesFolder'] = './'
  optional - global["generatedFolders"] = "./GeneratedFolders/";

change old version (7.3.0) to new version
- global['ExtVersion'] (as mentioned above)
- all references in the filetemplates folder

Step 3 - install npm packages

(the following is run in the root folder of this project)
- run: npm install

Step 4 - generate npm packages for webcomponents

(the following is run in the root folder of this project)

- run: npm run modern-extwebcomponents
- run: npm run classic-extwebcomponents

  Generated npm packages are at: ./GeneratedFolders/blank/
  - ext-web-components-modern
  - ext-web-components-classic

Step 5 - publish 2 web-component packages

Since the Ext-Angular and ExtReact rely on the web-components packages being npm published,
you must publish these 2 packages first:

- run: npm publish ext-web-components-modern
- run: npm publish ext-web-components-classic

Step 6 - generate npm packages for extreact and extangular

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

Step 7 - publish 2 ext-react and ext-angular packages

- run: npm publish ext-react-modern
- run: npm publish ext-angular-modern
- run: npm publish ext-react-classic
- run: npm publish ext-angular-classic

Project Documentation

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
