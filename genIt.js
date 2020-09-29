// node ./genIt.js test modern
// node ./genIt.js blank modern
// node ./genIt.js blank classic
// node ./genIt.js button classic
// node ./genIt.js grid classic
// node ./genIt.js grid modern
// node ./genIt.js material-ui modern

async function go() {
  require("./globals").setGlobals();
  if (createFolders == true) { doCreateFolders() }
  if (launch == true) {
    console.log('doLaunch')
    for (i = 0; i < info.data.global.items.length; i++) {
      doLaunch(info.data.global.items[i]);
    }
  }
  if (postLaunch == true) { doPostLaunch() }
  if (info.suffixParm != 'blank') {
    doTrim()
  }
  if (npmInstall == true) { await doNpmInstall() }
  if (info.suffixParm != 'blank') {
    rimraf.sync(`${webComponentsPackageFolder}src2`);
  }
  if (copy == true) { await doCopy() }
  doEnd()
}
go()

function doCreateFolders() {
  console.log('doCreateFolders')
  if (!fs.existsSync(generatedFolders)) {mkdirp.sync(generatedFolders)}
  if (!fs.existsSync(typeFolder)) {mkdirp.sync(typeFolder)}

  if (doWebComponents == true) {
    rimraf.sync(`${webComponentsPackageFolder}`);
    mkdirp.sync(`${webComponentsPackageFolder}`);
    mkdirp.sync(`${webComponentsPackageFolder}bin`);
    mkdirp.sync(`${webComponentsPackageFolder}guides`);
    mkdirp.sync(`${webComponentsPackageFolder}src`);
    if (info.suffixParm != 'blank') {
      mkdirp.sync(`${webComponentsPackageFolder}src2`);
    }
    mkdirp.sync(`${webComponentsPackageFolder}src/common`);
    mkdirp.sync(`${webComponentsPackageFolder}src/overrides`);
  }

  if (doAngular == true) {
    rimraf.sync(`${angularPackageFolder}`);
    mkdirp.sync(`${angularPackageFolder}`);
    mkdirp.sync(`${angularPackageFolder}bin`);
    mkdirp.sync(`${angularPackageFolder}guides`);
    mkdirp.sync(`${angularPackageFolder}src`);
    mkdirp.sync(`${angularPackageFolder}src/common`);
    mkdirp.sync(`${angularPackageFolder}src/overrides`);
  }

  if (doReact == true) {
    rimraf.sync(`${reactPackageFolder}`);
    mkdirp.sync(`${reactPackageFolder}`);
    mkdirp.sync(`${reactPackageFolder}bin`);
    mkdirp.sync(`${reactPackageFolder}guides`);
    mkdirp.sync(`${reactPackageFolder}src`);
    mkdirp.sync(`${reactPackageFolder}src/common`);
    mkdirp.sync(`${reactPackageFolder}src/overrides`);
  }

  if (doDoc == true) {
    rimraf.sync(`${docPackageFolder}`);
    mkdirp.sync(`${docPackageFolder}`);
    docFolder = docPackageFolder + '';
  }
}

function doLaunch(item) {
  var processIt = shouldProcessIt(item)
  if (processIt == true) {
    item.names = []
    item.names.push(item.name)
    if (item.alternateClassNames != undefined) {
      var alt = item.alternateClassNames.split(",");
      item.names = item.names.concat(alt)
      var namesSmall = [];
      item.names.forEach(itemname => {
        namesSmall.push(itemname.toLowerCase())
      })
      var uniqSmall = [...new Set(namesSmall)];
      if (item.names.length != uniqSmall.length) {
        if (uniqSmall.length != 1) {
          console.error('more than 1 name')
        }
        //console.log('never here in modern')
        var newNames = [item.names[0]]
        item.names = [...new Set(newNames)]
      }
    }

    var aliases = []
    item.xtypes = []
    if (item.alias != undefined) {
      //if (item.alias.substring(0, 6) == 'widget') {
        aliases = item.alias.split(",")
        for (alias = 0; alias < aliases.length; alias++) {
          if (aliases[alias].substring(0, 6) == 'widget') {
            var xtypelocal = aliases[alias].substring(7)
            item.xtypes.push(xtypelocal)
          }
        }
      //}
    }

    if (info.toolkit == 'classic') {
      var n = item.extends.indexOf(',Object');
      if (n > 0) {
        item.extends = item.extends.substring(0, n)
      }
    }
    if (info.toolkit == 'modern') {
      if (item.extends != undefined) {
        var n = item.extends.indexOf(",");
        if (n != -1) {
          //console.log('mult extends: ' + item.name + ' - ' + item.extends)
          item.extends = item.extends.substr(0,n)
        }
      }
    }
    oneItem(item)
  }
}

function oneItem(item) {
  var names = item.names;
  var xtypes = item.xtypes;

  info.propertyObj = doProperties(item);
  info.methodObj = doMethods(item);
  info.eventObj = doEvents(item);

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var classname = name.replace(/\./g, "_")

    if (doWebComponents == true) {
      var folder = ''
      var filename = ''
      var thePath = ''
      var pathprefix = ''
      var v = {}
      var parts = name.split(".")
      for (var j = 0; j < parts.length-1; j++) {
          thePath = thePath + parts[j] + '/'
          pathprefix = pathprefix + '../'
      }
      if (info.suffixParm == 'blank') {
        folder = `${webComponentsPackageFolder}src/${thePath}`
      }
      else {
        folder = `${webComponentsPackageFolder}src2/${thePath}`
      }
      if (!fs.existsSync(folder)) {
        mkdirp.sync(folder)
      }
      filename = parts[parts.length-1]
      var extendparts = item.extends.split(".")
      var extendpath = ''
      for (var j2 = 0; j2 < extendparts.length-1; j2++) {
          extendpath = extendpath + extendparts[j2] + '/'
      }

      var templateFile = ''
      if (item.name == 'Ext.Base') {
        templateFile = 'base.tpl';
        v = {
          shortname: info.shortname,
          Shortname: info.Shortname,
          classname: classname,
          sPROPERTIES: info.propertyObj.sPROPERTIES,
          sEVENTS: info.eventObj.sEVENTS
        }
      }
      else {
        templateFile = 'class.tpl';
        v = {
          extendsclassname: item.extends.replace(/\./g, "_"),
          pathprefix: pathprefix,
          extendpath: extendpath,
          classextendsfilename: extendparts[extendparts.length-1],
          classname: classname,
          sPROPERTIES: info.propertyObj.sPROPERTIES,
          sEVENTS: info.eventObj.sEVENTS
        }
      }

      var childfull = `${folder}${filename}`
      var child = childfull.replace(`${webComponentsPackageFolder}src2/`,'')
      var parent = `${v.extendpath}${v.classextendsfilename}`

      var o = {
        child: child,
        parent: parent
      }
      global["ext-tree"].push(o)
      writeTemplateFile(`${webComponentsTemplateFolder}templates/${templateFile}`, `${folder}${filename}.js`, v)
    }

    var Xtype;

    for (var j = 0; j < xtypes.length; j++) {
        var folder = '.'
        var folders = classname.split('_')
        for (var k = 0; k < folders.length; k++) {
            folder = folder + '/' + folders[k]
        }

        if (info.suffixParm == 'material-ui') {
          info.ewcsuffix = `material-ui`;
        }
        else {
          info.ewcsuffix = `${info.toolkit}`;
        }

        var values = {
          propNames: info.propertyObj.propNames,
          eventNames: info.eventObj.eventNames,
          classname: name.replace(/\./g, "_"),
          sPROPERTIES: info.propertyObj.sPROPERTIES,
          sEVENTS: info.eventObj.sEVENTS,
          sEVENTNAMES: info.eventObj.sEVENTNAMES,
          folder: folder,
          toolkit: toolkit,
          ewcsuffix: info.ewcsuffix,
          bundle: info.bundle,
          Xtype: xtypes[j].charAt(0).toUpperCase() + xtypes[j].slice(1).replace(/-/g,'_'),
          xtype: xtypes[j]
        }

        if (doWebComponents == true) {
          if (info.suffixParm == 'blank') {
            writeTemplateFile(`${webComponentsTemplateFolder}/templates/web-components.tpl`, `${webComponentsPackageFolder}src/ext-${xtypes[j]}.component.js`, values)
          }
          else {
            if (info.wantedxtypes.includes(`${xtypes[j]}`)) {
              var parent = values.folder.replace('./','')
              //console.log(`${values.xtype} ${values.classname}  ${parent}`)
              var o = {
                xtype: values.xtype,
                classname: values.classname,
                parent: parent
              }
              global['xtype-tree'].push(o)
              writeTemplateFile(`${webComponentsTemplateFolder}templates/web-components.tpl`, `${webComponentsPackageFolder}src/ext-${xtypes[j]}.component.js`, values)
            }
          }
        }

        if (doAngular == true) {
          if (info.suffixParm == 'blank') {
            writeTemplateFile(`${angularTemplateFolder}templates/angular.tpl`, `${angularPackageFolder}src/Ext${values.Xtype}.ts`, values)
          }
          else {
            if (info.wantedxtypes.includes(`${xtypes[j]}`)) {
              writeTemplateFile(`${angularTemplateFolder}templates/angular.tpl`, `${angularPackageFolder}src/Ext${values.Xtype}.ts`, values)
            }
          }
        }

        if (doReact == true) {
          if (info.suffixParm == 'blank') {
            writeTemplateFile(`${reactTemplateFolder}templates/react.tpl`, `${reactPackageFolder}src/Ext${values.Xtype}.js`, values)
          }
          else {
            if (info.wantedxtypes.includes(`${xtypes[j]}`)) {
              writeTemplateFile(`${reactTemplateFolder}templates/react.tpl`, `${reactPackageFolder}src/Ext${values.Xtype}.js`, values)
            }
          }
        }

        xt = values.xtype
        if (info.wantedxtypes.includes(xt)) {
          var theNames = ""
          names.forEach(name => theNames += name + ',')
          info.allExtended = info.allExtended + theNames + ',' + item.extended + ',';
          var classname2 = xt.replace(/-/g, "_");
          var capclassname = classname2.charAt(0).toUpperCase() + classname2.slice(1);

          info.webComponentsImports.push(`import EWC${capclassname} from './ext-${xt}.component.js';export { EWC${capclassname} };\n`)
          info.webComponentsImportsPlain.push(`import './src/ext-${xt}.component.js';\n`)

          moduleVars.imports = moduleVars.imports +`import { Ext${capclassname}Component } from './dist/ext-${xt}.component.js';\n`;

          info.angularImports.push(`import { Ext${capclassname}Component } from './src/Ext${capclassname}';\n`)
          //info.reactImportsArray.push(`import { Ext${capclassname}Component } from './dist/Ext${capclassname}';\n`)
          info.reactImportsArray.push(`import { Ext${capclassname} } from './dist/Ext${capclassname}';\n`)

          moduleVars.declarations = moduleVars.declarations + `    Ext${capclassname}Component,\n`;
          moduleVars.exports = moduleVars.exports + `    Ext${capclassname}Component,\n`;
          moduleVars.Bundle = info.Bundle;
          moduleVars.toolkit = info.toolkit;
          moduleVars.Toolkit = info.Toolkit;
          moduleVars.framework = info.framework;
        }
        else {
            //console.log('not found ' + xt)
        }

        if (doDoc == true) {
          var allO = require("./docs").doDocStuff(xtypes[j], info, item);
          if (global.allDocs == undefined) {
            global.allDocs = []
          }
          global.allDocs.push(allO)
        }
      }
  }

  if (doDoc == true) {
    all.push({
      xtypes: item.xtypes,
      names: item.names,
      alias: item.alias,
      extends: item.extends,
      alternateClassNames: item.alternateClassNames,
      eventsArrayForDoc: item.eventsArrayForDoc
    })
  }

}

function doPostLaunch() {
  console.log('doPostLaunch')
  if(doWebComponents == true) {
    createWebComponents()
  }
  if(doAngular == true) {
    createAngular()
  }
  if(doReact == true) {
    createReact()
  }
  if (doDoc == true) {
    //createDoc()
  }
}
function createWebComponents() {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  info.webComponentsImportsUnique = info.webComponentsImports.filter( onlyUnique ).join('')
  info.webComponentsImportsUniquePlain = info.webComponentsImportsPlain.filter( onlyUnique ).join('')

  writeTemplateFile(`${webComponentsTemplateFolder}bin/ext-web-components.js.tpl`,`${webComponentsPackageFolder}bin/ext-web-components.js`,info);

  writeTemplateFile(`${webComponentsTemplateFolder}guides/GETTING_STARTED.tpl`,`${webComponentsPackageFolder}guides/GETTING_STARTED.md`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}guides/MIGRATE.tpl`,`${webComponentsPackageFolder}guides/MIGRATE.md`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}guides/README.tpl`,`${webComponentsPackageFolder}README.md`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}guides/UNDERSTANDING_AN_APP.tpl`,`${webComponentsPackageFolder}guides/UNDERSTANDING_AN_APP.md`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}guides/USING_EXT_WEBPACK_PLUGIN.tpl`,`${webComponentsPackageFolder}guides/USING_EXT_WEBPACK_PLUGIN.md`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}guides/USING_SVELTE.tpl`,`${webComponentsPackageFolder}guides/USING_SVELTE.md`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}guides/USING_VUE.tpl`,`${webComponentsPackageFolder}guides/USING_VUE.md`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}guides/WHATS_NEW.tpl`,`${webComponentsPackageFolder}guides/WHATS_NEW.md`,info);

  writeTemplateFile(`${webComponentsTemplateFolder}src/ext-router.component.tpl`, `${webComponentsPackageFolder}src/ext-router.component.js`, info);
  writeTemplateFile(`${webComponentsTemplateFolder}src/index.js.tpl`,`${webComponentsPackageFolder}src/index.js`,info);

  writeTemplateFile(`${webComponentsTemplateFolder}src/common/ElementParser.js.tpl`,`${webComponentsPackageFolder}src/common/ElementParser.js`, info);
  writeTemplateFile(`${webComponentsTemplateFolder}src/common/util.js.tpl`,`${webComponentsPackageFolder}src/common/util.js`, info);
  writeTemplateFile(`${webComponentsTemplateFolder}src/common/webcomponentsbase.tpl`,`${webComponentsPackageFolder}src/common/webcomponentsbase.js`, info);

  copyFileSync(`${webComponentsTemplateFolder}.babelrc`, `${webComponentsPackageFolder}.babelrc`);
  //writeTemplateFile(`${webComponentsTemplateFolder}imports.js.tpl`,`${webComponentsPackageFolder}imports.js`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}package.json.tpl`,`${webComponentsPackageFolder}package.json`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}README.md.tpl`,`${webComponentsPackageFolder}README.md`,info);
  writeTemplateFile(`${webComponentsTemplateFolder}webpack.config.js.tpl`,`${webComponentsPackageFolder}webpack.config.js`,info);

writeTemplateFile(`${webComponentsTemplateFolder}ext-web-components-${info.toolkit}.js.tpl`,`${webComponentsPackageFolder}ext-web-components-${info.toolkit}.js`,info);


}

function createAngular() {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  info.angularImportsUnique = info.angularImports.filter( onlyUnique ).join('')
  moduleVars.angularImportsUnique = info.angularImportsUnique;

  writeTemplateFile(`${angularTemplateFolder}bin/ext-angular.js.tpl`,`${angularPackageFolder}bin/ext-angular.js`,info);

  writeTemplateFile(`${angularTemplateFolder}guides/Adding_ExtAngular_to_Angular_CLI_project.tpl`,`${angularPackageFolder}guides/Adding_ExtAngular_to_Angular_CLI_project.md`,info);
  writeTemplateFile(`${angularTemplateFolder}guides/Creating_Angular_CLI_ExtAngular.tpl`,`${angularPackageFolder}guides/Creating_Angular_CLI_ExtAngular.md`,info);
  writeTemplateFile(`${angularTemplateFolder}guides/MIGRATE.tpl`,`${angularPackageFolder}guides/MIGRATE.md`,info);
  writeTemplateFile(`${angularTemplateFolder}guides/README.tpl`,`${angularPackageFolder}README.md`,info);
  writeTemplateFile(`${angularTemplateFolder}guides/UNDERSTANDING_AN_APP.tpl`,`${angularPackageFolder}guides/UNDERSTANDING_AN_APP.md`,info);
  writeTemplateFile(`${angularTemplateFolder}guides/USING_EXT_WEBPACK_PLUGIN.tpl`,`${angularPackageFolder}guides/USING_EXT_WEBPACK_PLUGIN.md`,info);
  writeTemplateFile(`${angularTemplateFolder}guides/WHATS_NEW.tpl`,`${angularPackageFolder}guides/WHATS_NEW.md`,info);

  copyFileSync(`${angularTemplateFolder}src/common/angularbase.ts`, `${angularPackageFolder}src/common/angularbase.ts`);

  copyFileSync(`${angularTemplateFolder}src/overrides/AngularXTemplate.ts`, `${angularPackageFolder}src/overrides/AngularXTemplate.ts`);
  copyFileSync(`${angularTemplateFolder}src/overrides/AngularCell.ts`, `${angularPackageFolder}src/overrides/AngularCell.ts`);

  writeTemplateFile(`${angularTemplateFolder}module.tpl`,`${angularPackageFolder}ext-angular${info.toolkitshown}${info.bundle}.module.ts`,moduleVars);
  copyFileSync(`${angularTemplateFolder}ng-package.json`, `${angularPackageFolder}ng-package.json`);
  writeTemplateFile(`${angularTemplateFolder}package.json.tpl`,`${angularPackageFolder}package.json`,info);
  copyFileSync(`${angularTemplateFolder}postinstall.js`, `${angularPackageFolder}postinstall.js`);
  writeTemplateFile(`${angularTemplateFolder}public_api.ts.tpl`,`${angularPackageFolder}public_api.ts`,info);
  copyFileSync(`${angularTemplateFolder}tsconfig.json`, `${angularPackageFolder}tsconfig.json`);
  copyFileSync(`${angularTemplateFolder}tsconfig.lib.json`, `${angularPackageFolder}tsconfig.lib.json`);
}

function createReact() {
    info.reactImports =`import ExtReactDOM from "./common/ExtReactDOM";\nexport default ExtReactDOM;\n`
    info.wantedxtypes.forEach(xtype => {
      var Xtype = xtype.charAt(0).toUpperCase() + xtype.slice(1).replace(/-/g,'_');
      info.reactImports = info.reactImports + `import Ext${Xtype}_ from "./Ext${Xtype}";\n`;
      info.reactExports = info.reactExports + `export const Ext${Xtype} = Ext${Xtype}_;\n`;
      if (info.suffixParm != 'material-ui') {
        info.reactExports70 = info.reactExports70 + `export const ${Xtype} = Ext${Xtype}_;\n`;
      }
    })

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    info.reactImportsArrayUnique = info.reactImportsArray.filter( onlyUnique ).join('')

    writeTemplateFile(`${reactTemplateFolder}bin/ext-react.js.tpl`,`${reactPackageFolder}bin/ext-react.js`,info);

    const examples = require(reactTemplateFolder + "examples/" + info.suffixParm).examples;
    info.component = examples('component');

    if (info.suffixParm == 'material-ui') {
      copyFileSync(`${reactTemplateFolder}guides/ExtReact_for_Material-UI_README.md`, `${reactPackageFolder}guides/ExtReact_for_Material-UI_README.md`);
      copyFileSync(`${reactTemplateFolder}guides/ExtReact_for_Material-UI_README.md`, `${reactPackageFolder}README.md`);

      copyFileSync(`${reactTemplateFolder}guides/ExtReact_for_Material-UI_ADDING.md`, `${reactPackageFolder}guides/ExtReact_for_Material-UI_ADDING.md`);
      copyFileSync(`${reactTemplateFolder}guides/ExtReact_for_Material-UI_GETTING_STARTED.md`, `${reactPackageFolder}guides/ExtReact_for_Material-UI_GETTING_STARTED.md`);
      copyFileSync(`${reactTemplateFolder}guides/ExtReact_for_Material-UI_GETTING_STARTED_DETAILED.md`, `${reactPackageFolder}guides/ExtReact_for_Material-UI_GETTING_STARTED_DETAILED.md`);

      copyFileSync(`${reactTemplateFolder}guides/starter.png`, `${reactPackageFolder}guides/starter.png`);
      copyFileSync(`${reactTemplateFolder}guides/vsc.png`, `${reactPackageFolder}guides/vsc.png`);
      copyFileSync(`${reactTemplateFolder}guides/final.png`, `${reactPackageFolder}guides/final.png`);

      copyFileSync(`${reactTemplateFolder}guides/calendar.png`, `${reactPackageFolder}calendar.png`);
      copyFileSync(`${reactTemplateFolder}guides/examples.png`, `${reactPackageFolder}examples.png`);
      //writeTemplateFile(`${reactTemplateFolder}guides/README_ExtReact_for_Material-UI.tpl`,`${reactPackageFolder}README.md`,info);
    }
    else {
      writeTemplateFile(`${reactTemplateFolder}guides/Adding_ExtReact_to_create-react-app_project.tpl`,`${reactPackageFolder}guides/Adding_ExtReact_to_create-react-app_project.md`,info);
      writeTemplateFile(`${reactTemplateFolder}guides/Creating_create-react-app_ExtReact.tpl`,`${reactPackageFolder}guides/Creating_create-react-app_ExtReact.md`,info);
      writeTemplateFile(`${reactTemplateFolder}guides/MIGRATE.tpl`,`${reactPackageFolder}guides/MIGRATE.md`,info);
      writeTemplateFile(`${reactTemplateFolder}guides/README.tpl`,`${reactPackageFolder}README.md`,info);
      writeTemplateFile(`${reactTemplateFolder}guides/UNDERSTANDING_AN_APP.tpl`,`${reactPackageFolder}guides/UNDERSTANDING_AN_APP.md`,info);
      writeTemplateFile(`${reactTemplateFolder}guides/USING_EXT_WEBPACK_PLUGIN.tpl`,`${reactPackageFolder}guides/USING_EXT_WEBPACK_PLUGIN.md`,info);
      writeTemplateFile(`${reactTemplateFolder}guides/WHATS_NEW.tpl`,`${reactPackageFolder}guides/WHATS_NEW.md`,info);
    }

    writeTemplateFile(`${reactTemplateFolder}src/index.js.tpl`, `${reactPackageFolder}src/index.js`, info);
    copyFileSync(`${reactTemplateFolder}src/common/ExtReactDOM.js`, `${reactPackageFolder}src/common/ExtReactDOM.js`);
    copyFileSync(`${reactTemplateFolder}src/common/reactize.js`, `${reactPackageFolder}src/common/reactize.js`);
    copyFileSync(`${reactTemplateFolder}src/overrides/ReactCell.js`, `${reactPackageFolder}src/overrides/ReactCell.js`);
    copyFileSync(`${reactTemplateFolder}src/overrides/ReactXTemplate.js`, `${reactPackageFolder}src/overrides/ReactXTemplate.js`);

    copyFileSync(`${reactTemplateFolder}.babelrc`, `${reactPackageFolder}.babelrc`);
    writeTemplateFile(`${reactTemplateFolder}imports.js.tpl`,`${reactPackageFolder}imports.js`,info);
    writeTemplateFile(`${reactTemplateFolder}package.json.tpl`,`${reactPackageFolder}package.json`,info);
    copyFileSync(`${reactTemplateFolder}postinstall.js`, `${reactPackageFolder}postinstall.js`);
    writeTemplateFile(`${reactTemplateFolder}webpack.config.js.tpl`,`${reactPackageFolder}webpack.config.js`,info);
}

function createDoc() {
  //docs
  //fs.writeFileSync(`${docFolder}data.js`,'window.xtypemenu = ' + JSON.stringify(docs, null, ' '));
  //doc
  info.includedxtypes = `<div>\n`
  fs.readdirSync(`${docStagingFolder}`).forEach(function(file) {
      var f = file.split('.')
      var xtype = f[0].substring(4)
      if (file == 'docdetail.html' || file == 'doc.html' || file == 'docstyle.css') { return }
      if (info.wantedxtypes.indexOf(xtype) != -1) {
          fs.copySync(`${docStagingFolder}/${file}`,`${docFolder}/${file}`)
          info.includedxtypes = info.includedxtypes + `  <div onclick="selectDoc('${xtype}')">ext-${xtype}</div><br>\n`
      }
  });
  info.includedxtypes = info.includedxtypes + `</div>\n`

  // writeTemplateFile(`${templateFolder}docs/doc.tpl`, `${docFolder}doc.html`, info)
  // writeTemplateFile(`${templateFolder}docs/doc-z-tabs.tpl`, `${docFolder}z-tabs.js`, info)
  // writeTemplateFile(`${templateFolder}docs/doc-style.tpl`, `${docFolder}style.css`, info)
  // writeTemplateFile(`${templateFolder}docs/docstyle.tpl`, `${docFolder}docstyle.css`, info)

  //rimraf.sync(docStagingFolder);
}

async function doNpmInstall() {
  console.log('doNpmInstall')
  var origCwd = process.cwd();
  var webComponentsFolder = `${typeFolder}ext-web-components${info.toolkitshown}${info.bundle}`;
  var angularFolder = `${typeFolder}ext-angular${info.toolkitshown}${info.bundle}`;
  var reactFolder = `${typeFolder}ext-react${info.toolkitshown}${info.bundle}`;

  if (doWebComponents == true) {
    process.chdir(webComponentsFolder);
    log('');log(`npm install in: ${process.cwd()}`);
    await run(`npm install`);
    if (npmPublishRightAfter == true) {
      log(`publish ExtWebComponents`)
      await run(`npm publish --force`);
    }
    process.chdir(origCwd);
  }

  if(doAngular == true) {
    process.chdir(angularFolder);
    log('');log(`npm install in ${process.cwd()}`);
    await run(`npm install`);
    log(`npm run packagr in ${process.cwd()}`);
    await run(`npm run packagr`);

    log(`add postinstall.js and all .md in ${process.cwd()}`);
    await run(`cp -R ./src dist/lib`);
    await run(`cp -R ./bin dist/bin`);
    await run(`cp -R ./guides dist/guides`);
    await run(`cp ./README.md dist/README.md`);
    await run(`cp ./postinstall.js dist/postinstall.js`);

    process.chdir('dist');
    var packagenameAngular = './package.json';
    var packageAngular = fs.readFileSync(packagenameAngular, 'utf8');
    var packageJsonAngular = JSON.parse(packageAngular);
    if (packageJsonAngular.scripts == undefined) {
        packageJsonAngular.scripts = {};
    }
    packageJsonAngular.scripts.postinstall = "node ./postinstall.js";
    packageStringAngular = JSON.stringify(packageJsonAngular, null, 2);
    fs.writeFileSync(packagenameAngular, packageStringAngular);

    if (npmPublishRightAfter == true) {
      log(`publish ExtAngular`)
      await run(`npm publish --force`);
    }
    process.chdir(origCwd);
  }

  if(doReact == true) {
    process.chdir(reactFolder);
    log('');log(`npm install in ${process.cwd()}`);
    await run(`npm install`);
    if (npmPublishRightAfter == true) {
      //log('');log(`npmPublishRightAfter is true`);
      log(`publish ExtReact`)
      await run(`npm publish --force`);
    }
    process.chdir(origCwd);
  }

}

async function doCopy() {
  console.log('doCopy')
  var origCwd = process.cwd();
  console.log('cwd: ' + origCwd)
  var webComponentsFolder = `${typeFolder}ext-web-components${info.toolkitshown}${info.bundle}`;
  var angularFolder = `${typeFolder}ext-angular${info.toolkitshown}${info.bundle}`;
  var reactFolder = `${typeFolder}ext-react${info.toolkitshown}${info.bundle}`;

  //const prevFolders = '../../../../../';
  const prevFolders = '/Users/marcgusmano/_git/sencha/';

  if (doWebComponents == true) {
    const webComponentsTo = `${prevFolders}ext-web-components/packages/ext-web-components${info.toolkitshown}${info.bundle}`
    process.chdir(webComponentsFolder);
    log('');log(`copy ext-web-components`);log(`from: ${process.cwd()}`);log(`to: ${webComponentsTo}`);
    await run(`rm -r ${webComponentsTo}`);
    await run(`cp -R ${process.cwd()} ${webComponentsTo}`);
    process.chdir(origCwd);
  }

  if (doAngular == true) {
    const angularTo = `${prevFolders}ext-angular/packages/ext-angular${info.toolkitshown}${info.bundle}`
    process.chdir(angularFolder);
    //process.chdir('./dist');
    log('');log(`copy ext-angular`);log(`from: ${process.cwd()}`);log(`to: ${angularTo}`);
    await run(`rm -r ${angularTo}`);
    await run(`cp -R ./dist ${angularTo}`);
    process.chdir(origCwd);
  }

  if (doReact == true) {
    const reactTo = `${prevFolders}ext-react/packages/ext-react${info.toolkitshown}${info.bundle}`
    process.chdir(reactFolder);
    log('');log(`copy ext-react`);log(`from: ${process.cwd()}`);log(`to: ${reactTo}`);
    await run(`rm -r ${reactTo}`);
    await run(`cp -R ${process.cwd()} ${reactTo}`);
    process.chdir(origCwd);
  }
}


// async function npmPublish() {
//   var origCwd = process.cwd();
//   var webComponentsFolder = `${typeFolder}ext-web-components${info.toolkitshown}${info.bundle}`;
//   var angularFolder = `${typeFolder}ext-angular${info.toolkitshown}${info.bundle}`;
//   var reactFolder = `${typeFolder}ext-react${info.toolkitshown}${info.bundle}`;

//   if (npmPublish == true && npmPublishRightAfter == false) {
//     log('');log(`npmPublish is true and npmPublishRightAfter is false`)

//     if(doWebComponents == true) {
//       process.chdir(webComponentsFolder);
//       await run(`npm publish --force`);
//       process.chdir(origCwd);
//     }

//     if(doAngular == true) {
//       process.chdir(angularFolder);
//       process.chdir('./dist');
//       await run(`npm publish --force`);
//       process.chdir(origCwd);
//     }

//     if(doReact == true) {
//       process.chdir(reactFolder);
//       await run(`npm publish --force`);
//       process.chdir(origCwd);
//     }

//   }
//   else {
//     log('');log(`npmPublish: ${npmPublish}, npmPublishRightAfter ${npmPublishRightAfter}`)
//   }

// }


function shouldProcessIt(o) {
  var processIt = false;




  if (info.toolkit == 'classic') {
    var item = o
    if (item.alias != undefined) {
      if (item.alias.substring(0, 6) == 'widget') {
        processIt = true;
      }
    }
    if (o.extended != undefined) {
      if ( o.extended.includes("Ext.Base")) {
        processIt = true
      }
    }
    if (o.name == 'Ext.Widget') {
      processIt = true
    }
    if (o.name == 'Ext.Evented') {
        processIt = true
    }
    if (o.name == 'Ext.Base') {
        processIt = true
    }
    // if (o.name == 'Ext.grid.column.Column') {
    //   processIt = false
    // }

    var aliases = []
    item.xtypes = []
    if (item.alias != undefined) {
      aliases = item.alias.split(",")
      for (alias = 0; alias < aliases.length; alias++) {
        if (aliases[alias].substring(0, 6) == 'widget') {
          var xtypelocal = aliases[alias].substring(7)
          item.xtypes.push(xtypelocal)
        }
      }
    }


    // if (processIt == true) {
    //   console.log(item.alias)
    // }

    return processIt
  }
  if (info.toolkit == 'modern') {
    if (o.extended == undefined) {
      processIt = false;
    }
    else {
        var n = o.extended.indexOf("Ext.Widget");
        if (n != -1) {
            processIt = true;
        }
        else {
            processIt = false;
        }
    }
    if (o.name == 'Ext.Widget') {
        processIt = true
    }
    if (o.name == 'Ext.Evented') {
        processIt = true
    }
    if (o.name == 'Ext.Base') {
        processIt = true
    }
    if (o.items == undefined) {
        processIt = false
    }


    return processIt
  }



  // if (info.toolkit == 'modern') {

  //   // var localxtypes = [];
  //   // if (o.alias != undefined) {
  //   //   //if (item.alias.substring(0, 6) == 'widget') {
  //   //     var aliases = o.alias.split(",")
  //   //     for (alias = 0; alias < aliases.length; alias++) {
  //   //       if (aliases[alias].substring(0, 6) == 'widget') {
  //   //         var xtypelocal = aliases[alias].substring(7)
  //   //         localxtypes.push(xtypelocal)
  //   //       }
  //   //     //}
  //   //   }
  //   // }

  //   // if (localxtypes.length == 0) {
  //   //   processIt = false;
  //   //   return processIt;
  //   // }






  //   if (o.alias == undefined) {
  //     processIt = false;
  //   }

  //   else if (o.extended == undefined) {
  //     processIt = false;
  //   }
  //   else {
  //       var n = o.extended.indexOf("Ext.Widget");
  //       if (n != -1) {
  //           processIt = true;
  //       }
  //       else {
  //           processIt = false;
  //       }
  //   }
  //   if (o.name == 'Ext.Widget') {
  //       processIt = true
  //   }
  //   if (o.name == 'Ext.Evented') {
  //       processIt = true
  //   }
  //   if (o.name == 'Ext.Base') {
  //       processIt = true
  //   }
  //   if (o.items == undefined) {
  //       processIt = false
  //   }
  //   return processIt
  // }
}

function log(val) {
  //https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
  var endMarker = `\x1b[0m`;
  const BgGreen = `\x1b[42m`;
  const FgBlack = `\x1b[30m`;
  const str = BgGreen + FgBlack + '%s' + endMarker;
  console.log(str, val);
}

function doEnd() {
  console.log('\n')
  if(doWebComponents == true) {
    console.log(`https://sencha.myget.org/feed/early-adopter/package/npm/%40sencha/ext-web-components${info.toolkitshown}${info.bundle}/${info.version}`)
  }
  if(doAngular == true) {
    console.log(`https://sencha.myget.org/feed/early-adopter/package/npm/%40sencha/ext-angular${info.toolkitshown}${info.bundle}/${info.version}`)
  }
  if(doReact == true) {
    console.log(`https://sencha.myget.org/feed/early-adopter/package/npm/%40sencha/ext-react${info.toolkitshown}${info.bundle}/${info.version}`)
  }
  //mjg
  if(doDoc == true) {
    global['reactnames'] = global['reactnames'].sort();
    var uniq = [...new Set(global['reactnames'])];
    fs.writeFileSync(`${docPackageFolder}all.json`, JSON.stringify(uniq , null, ' '));

    // global['xtypes'] = global['xtypes'].sort();
    // console.log(global['xtypes'])
    // fs.writeFileSync(`${docPackageFolder}all.json`, JSON.stringify(global['xtypes'] , null, ' '));
    // //console.log(global.docMenu)
    // all.forEach(a => {
    //   //if (a.alternateClassNames != undefined) {
    //     //console.log(a.eventsArrayForDoc)
    //     //console.log(a.alias + '     ' + a.extends + '     ' + a.names)

    //     //console.log(a.alias + '     ' + a.names + '     ' + a.alternateClassNames)
    //     //console.log(a.names.length + '    ' + a.alternateClassNames.length)
    //   //}
    // })
  }
  console.log('\n')
}

function doTrim() {


  function findIt(item) {

    function ensureDirectoryExistence(filePath) {
      var dirname = require("path").dirname(filePath);
      if (fs.existsSync(dirname)) {
        return true;
      }
      ensureDirectoryExistence(dirname);
      fs.mkdirSync(dirname);
    }



    //console.log(item)
    const found = global["ext-tree"].find(element => element.child == item);
    //console.log(found)
    //console.log(require("path").dirname(`${webComponentsPackageFolder}src/${found.child}.js`))

    ensureDirectoryExistence(`${webComponentsPackageFolder}src/${found.child}.js`)
    copyFileSync(`${webComponentsPackageFolder}src2/${found.child}.js`, `${webComponentsPackageFolder}src/${found.child}.js`);


//    fs.promises.mkdir(require("path").dirname(`${webComponentsPackageFolder}src/${found.child}.js`), {recursive: true})
//    .then(x => copyFileSync(`${webComponentsPackageFolder}src2/${found.child}.js`, `${webComponentsPackageFolder}src/${found.child}.js`));

    if (found.parent != 'undefinedundefined') {
      findIt(found.parent)
    }
  }

  //console.log(global["ext-tree"])
  //console.log(global["xtype-tree"])
  global["xtype-tree"].forEach(xtypeitem => {
    findIt(xtypeitem.parent)
  })
  //setTimeout(function(){
  //  console.log("delete");
  //}, 10000);
}

  // function writeTheUniqueOnes() {
  //   var allExtendedArray = info.allExtended.split(",");
  //   let uniqueAllExtendedArray = [...new Set(allExtendedArray)];
  //   uniqueAllExtendedArray.forEach((extended) => {
  //       if (extended == '') { return }
  //       var folder = ''
  //       var fromFolder = ''
  //       var toFolder = ''
  //       var parts = extended.split(".")
  //       var thePath = ''
  //       var pathprefix = ''
  //       for (var j = 0; j < parts.length-1; j++) {
  //           thePath = thePath + parts[j] + '/'
  //           pathprefix = pathprefix + '../'
  //       }
  //       folder = `${outputSrcFolder}${thePath}`
  //       if (!fs.existsSync(folder)) {
  //         console.log(folder)
  //         mkdirp.sync(folder)
  //       }
  //       filename = parts[parts.length-1]
  //       fromFolder = `${srcStagingFolder}${thePath}${filename}.js`
  //       toFolder = `${outputSrcFolder}${thePath}${filename}.js`
  //       copyFileSync(fromFolder, toFolder);
  //   })
  // }
  //writeTheUniqueOnes()





      // console.log('\n***')
      // console.log(child)
      // console.log('imports')
      // console.log(parent)




     // console.log(`${folder}${filename}.js`)
     // console.log('imports')
     // console.log(`${webComponentsPackageFolder}src/${v.extendpath}${v.classextendsfilename}`)

      //console.log(`${v.pathprefix}`)
      //console.log(`${v.extendpath}`)
      //console.log(`${v.classextendsfilename}`)

     // var parent = `${v.pathprefix}${v.extendpath}${v.classextendsfilename}.js`
     // var newparent = parent.replace(`${v.extendpath}`,`${webComponentsPackageFolder}src`)





      //console.log(newparent)
      //console.log(`${v.pathprefix}${v.extendpath}${v.classextendsfilename}.js`)

      // console.log('***')
      // console.log(`${folder}${filename}.js`)
      // console.log('imports')
      // console.log(`${v,extendpath}${v.classextendsfilename}.js`)

