# ExtAngular

## [About ExtAngular](https://www.npmjs.com/package/@sencha/ext-angular-modern#about-extangular)

ExtAngular is a comprehensive Angular UI component library containing over 140 enterprise-grade UI components such as Data Grids, Pivot Grids, Trees, Charts, D3 Visualizations, Forms, Calendars, Buttons, Menus and many more. ExtAngular components are pre-built and pre-tested and work seamlessly across browsers and platforms. Packed with all the components and features you ever need, with ExtAngular, you’ll never have to go out looking for another missing component or functionality.

## ExtAngular 30-day Free Trial

The limited 30-day free trial offers full access to the ExtAngular components and tools. Try it out and see why it’s the most comprehensive component suite out there!

## Getting started with @sencha/ext-angular-modern.

This npm package contains the files that are needed to add the @sencha/ext-angular-modern package to an Angular application.

## Step 1: Install Angular CLI and Generate a new Angular Application

In the project, install the ExtAngular components dependency in the package.json

```
$ npm install -g @angular/cli
$ ng new ext-angular-modern-demo --minimal=true --interactive=false -g=true --skipInstall=false
$ cd ext-angular-modern-demo
```

## Step 2: Install Packages from npm

### Login to Sencha's private npm registry if you are an ACTIVE customer

ExtAngular and all related commercial packages are hosted on Sencha's private npm registry. Login to the registry using the following command which configures npm to download packages in the @sencha scope from Sencha's registry.

*Username Note:* The email and password used during support portal activation (after license purchase) will be used to login to Sencha’s NPM repo. The username is the same as the email used, however, the @ character is replaced with '..' two periods. For example name@gmail.com converts to name..gmail.com as username.

```
$ npm login --registry=https://npm.sencha.com/ --scope=@sencha

```

### Install packages
```
$ npm install @sencha/ext-modern-runtime --save

$ npm install @sencha/ext-angular-modern --save
```

## Step 3: Add ExtAngular to you Project

Open your editor (you can use any editor). To open Visual Studio Code, type the following:
code .

#### Add to `./src/styles.css`:
```
:root {
  --base-color: #024059;
  --base-foreground-color: white;
  --background-color: white;
  --color: black;
}
```

#### Replace `./src/app/app.module.ts` with:
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularModernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### Replace `./src/app/app.component.ts` with:
```
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<ExtPanel viewport="true" title="panel" layout="fit">
    <ExtToolbar docked="top">
        <ExtButton text="a button" shadow="true"></ExtButton>
    </ExtToolbar>
    <ExtGrid
        [title]="title"
        (ready)="readyGrid($event)"
    >
        <ExtColumn text="name" dataIndex="name"></ExtColumn>
        <ExtColumn text="email" dataIndex="email" flex="1"></ExtColumn>
    </ExtGrid>
</ExtPanel>
    `,
    styles: []
})
export class AppComponent {
    title = 'the grid';
    data=[
        {name: 'Marc', email: 'marc@gmail.com'},
        {name: 'Nick', email: 'nick@gmail.com'},
        {name: 'Andy', email: 'andy@gmail.com'},
    ]
    readyGrid(event) {
        var grid = event.cmp;
        grid.setData(this.data)
    }
}
```

#### Update TypeScript Config Files For version 9.x of @angular/cli update `./tsconfig.json` For version 10.x of @angular/cli update `./tsconfig.base.json`
1. Add compiler options: 
```
  "compilerOptions": {
    ...
    "typeRoots": [
      "node_modules/@types"
    ],
    "paths": {
      "@angular/*": ["node_modules/@angular/*"],
      "@sencha/*": ["node_modules/@sencha/*"]
    },
    "noImplicitAny": false,
    "suppressImplicitAnyIndexErrors": true,
    "preserveSymlinks": true,
    ...
  }
```
2. Add includes
```
  "include": [
    "**/lib/**/*.ts",
    "src/**/*.ts",
    "node_modules/@sencha/**/*.ts",
  ]
```

#### Type the following in a command/terminal window:
```
ng serve --open --port 4201
```
open http://localhost:4201 in a browser - the ExtAngular application will load

To generate a theme for Sencha Themer:
```
npm install @sencha/cmd --save
node_modules/.bin/ext-angular generate theme -b theme-material -n test-ext-angular
```

### Interested in trying out the additional tools included in your trial?
Fill out the [zip trial form](https://sencha.com/products/extangular/evaluate/) to get the zip downloads of add-on premium components: 
- D3 Adapter
- Pivot Grid
- Calendar
- Exporter 

Other design tools: 
- Themer
- Stencils
- Test
 
The ExtAngular trial version is valid for 30-days. If you need any help with the product trial [contact us](https://www.sencha.com/company/contact/). Ready to use the product for your commercial project? Check out the [product pricing](https://www.sencha.com/store/extangular/) and licensing details. 

## Guides and Helpful Resources
ExtAngular has extensive documentation and getting started guides. 
* [Documentation](https://docs.sencha.com/extangular/)
* [Understanding the App](https://docs.sencha.com/extangular/7.3.0/guides/getting_started/understanding_app_modern.html)
* [Learn about the Data Grid Features](https://www.sencha.com/grid)

Check out our resources page to get quick access to videos, tutorials, webinars and more.
* [Examples of 140+ ExtAngular Components](https://examples.sencha.com/ExtAngular/7.3.0/kitchensink/)
* [ExtAngular Datasheet, Webinars and Whitepapers](https://www.sencha.com/resources/)

### Additional Resources
- Official Website: https://www.sencha.com/products/extangular/
- Documentation: https://docs.sencha.com/extangular/
- Trial Download: https://www.sencha.com/products/extangular/evaluate/
- Licensing: https://www.sencha.com/store/extangular/
- EULA: https://www.sencha.com/legal/sencha-software-license-agreement/
- Support: https://www.sencha.com/company/contact/
- Community: https://stackoverflow.com/questions/tagged/extangular

### Repo Guides
- [Adding ExtAngular components to an existing Angular CLI project](https://github.com/sencha/ext-angular/blob/ext-angular-7.3.x/packages/ext-angular-modern/guides/Adding_ExtAngular_to_Angular_CLI_project.md)
- [Creating a new Angular CLI project with ExtAngular components](https://github.com/sencha/ext-angular/blob/ext-angular-7.3.x/packages/ext-angular-modern/guides/Creating_Angular_CLI_ExtAngular.md)
- [Migrate/Upgrade from a previous version](https://github.com/sencha/ext-angular/blob/ext-angular-7.3.x/packages/ext-angular-modern/guides/MIGRATE.md)
- [Understanding An App](https://github.com/sencha/ext-angular/blob/ext-angular-7.3.x/packages/ext-angular-modern/guides/UNDERSTANDING_AN_APP.md)
- [Using ext-webpack-plugin](https://github.com/sencha/ext-angular/blob/ext-angular-7.3.x/packages/ext-angular-modern/guides/USING_EXT_WEBPACK_PLUGIN.md)
- [What's New](https://github.com/sencha/ext-angular/blob/ext-angular-7.3.x/packages/ext-angular-modern/guides/WHATS_NEW.md)

## Licensing
Evaluation/Trial License

### Keywords
Angular   ExtAngular  html   javascript   framework   components   widgets   ui   datagrid   pivotgrid   chart   treelist