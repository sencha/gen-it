## Adding @sencha/ext-react-{toolkit}{bundle} components to an existing create-react-app project

## Requirements
Fetch your npm credentials and generate an application.

### Step 1: Retrieve npm Repo Access Credentials
To gain access to the Sencha npm repository:

1. [Start a free trial of ExtReact](https://www.sencha.com/products/extreact/evaluate/).
2. [Purchase ExtReact or Ext JS Enterprise](https://www.sencha.com/store/).

* **Note:** Ext JS enterprise customers already have access to ExtReact.
* **Note:** Existing customers use your support portal credentials. But switch the username, `@` character with `'..'` two periods, so the username would look something like this after it's converted: `name..gmail.com`.

### Step 2: Login to the npm repository
Once you have your credentials login to the npm repo.

```
npm login --registry=https://npm.sencha.com --scope=@sencha
```

### Step 3: install @sencha/ext-react-{toolkit}

To add @sencha/ext-react-{toolkit}{bundle} to an existing application created with create-react-app, run the following in the root folder of the React app:

```
npm install @sencha/ext-react-{toolkit}
```

This will create a 'public/ext-runtime-{toolkit}' folder, and also add several entries in the 'public/index.html'
file.

```
<script src="%PUBLIC_URL%/ext-runtime-{toolkit}/{toolkit}.engine.js"></script>
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/material/material-all.css" rel="stylesheet" type="text/css"></link>
```

The original index.html is backed up as 'public/indexBack.html'.

### Step 4: update src/index.js

- make the following changes to src/index.js

comment out these lines...

```sh
//import ReactDOM from 'react-dom';
//ReactDOM.render(<App />, document.getElementById('root'));
```

...and add these lines:

```sh
import ExtReactDOM from '@sencha/ext-react-{toolkit}';
ExtReactDOM.render(<App />, document.getElementById('root'));
```

### Step 5: update a component to use @sencha/ext-react-{toolkit}

- add the import(s) to the top of the component js file:

```sh
import { ExtButton } from '@sencha/ext-react-{toolkit}';
```

- modify 'render' method to use component(s):

```sh
  render() {
    return (
      <ExtButton text="click me"></ExtButton>
    )
  }
```

### Step 6 (optional): Changing the theme for an @sencha/ext-react-{toolkit} app

in the 'public/ext-runtime-{toolkit}' folder, you will notice several theme folders.  To change
and use one of these themes, find the following line:

```
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/material/material-all.css" rel="stylesheet" type="text/css"></link>
```

notice that this line points to the material folder and material-all.css file.  For example, to change to triton, update to the following:

```
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/triton/triton-all.css" rel="stylesheet" type="text/css"></link>
```

<tpl if="toolkit == 'classic'">
here are all the {toolkit} themes available:

```
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/graphite/graphite-all.css" rel="stylesheet" type="text/css"></link>
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/material/material-all.css" rel="stylesheet" type="text/css"></link>
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/triton/triton-all.css" rel="stylesheet" type="text/css"></link>
```
</tpl>

<tpl if="toolkit == 'modern'">
here are all the {toolkit} themes available:

```
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/ios/ios-all.css" rel="stylesheet" type="text/css"></link>
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/material/material-all.css" rel="stylesheet" type="text/css"></link>
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/neptune/neptune-all.css" rel="stylesheet" type="text/css"></link>
<link href="%PUBLIC_URL%/ext-runtime-{toolkit}/triton/triton-all.css" rel="stylesheet" type="text/css"></link>
```
</tpl>