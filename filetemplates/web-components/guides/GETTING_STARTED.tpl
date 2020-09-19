## Getting started for @sencha/ext-web-components-{toolkit}{bundle}

### Login to the Sencha npm repo

* Note, you must be signed into the Sencha npm registry to access packages.

production:

```sh
npm login --registry=https://npm.sencha.com/ --scope=@sencha
```

early adopter:

```sh
npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha
```

## Create a JavaScript application

- Create a folder named ext-web-components-{toolkit}{bundle}-demo

mac
```sh
mkdir ext-web-components-{toolkit}{bundle}-demo
cd ext-web-components-{toolkit}{bundle}-demo
```

windows
```sh
md ext-web-components-{toolkit}{bundle}-demo
cd ext-web-components-{toolkit}{bundle}-demo
```

- In the ext-web-components-{toolkit}{bundle}-demo folder, create a package.json file with the following:

```sh
{
  "name": "ext-web-components-{toolkit}{bundle}-demo",
  "version": "7.3.0",
  "description": "ext-web-components-{toolkit}{bundle}-demo",
  "scripts": {
    "start": "npx servor . index.html 8080 --reload --browse"
  },
  "devDependencies": {
    "@sencha/ext-web-components-{toolkit}{bundle}": "~7.3.0",
    "@sencha/ext-{toolkit}-runtime": "~7.3.0",
    "servor": "~3.2.0"
  },
  "author": "",
  "license": "ISC",
  "repository": {}
}
```

- In the ext-web-components-{toolkit}{bundle}-demo folder, create an index.html file with the following:

```sh
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=10,user-scalable=yes">
</head>
<link rel="icon" href="data:;base64,iVBORw0KGgo=">

<script src="./node_modules/@sencha/ext-{toolkit}-runtime/{toolkit}.engine.enterprise.js"></script>
<link href="./node_modules/@sencha/ext-{toolkit}-runtime/material/material-all.css" rel="stylesheet" type="text/css"></link>
<script type="module" src="./node_modules/@sencha/ext-web-components-{toolkit}/ext-web-components-{toolkit}.js"></script>

<script>
  getNow = function() {
    document.querySelector('#updateDiv').innerText = new Date();
  }
</script>

<body>
  <ext-toolbar border="1">
<tpl if="toolkit == 'classic'">    <ext-button text="get now" border="1" onclick="getNow"></ext-button></tpl>
<tpl if="toolkit == 'modern'">    <ext-button text="get now" border="1" ontap="getNow"></ext-button></tpl>
    <div id='updateDiv' style="margin-left:20px;"></div>
  </ext-toolbar>
</body>
</html>
```

- Run the following in the ext-web-components-{toolkit}{bundle}-demo folder

```sh
npm install
npm start
```

A browser window at http://127.0.0.1:8080 will display
