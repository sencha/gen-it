import { NgModule } from '@angular/core';
//import { EngBase } from './src/common/angularbase';
{angularImportsUnique}

import { APP_INITIALIZER } from '@angular/core';
const Ext = window['Ext'];
export function extLaunchFactory(){
    var x = () => {
        //console.log('Hi from exported function');
        return new Promise(function (resolve, reject) {
            //console.log("Loading Ext JS...");
            Ext.onReady(function () {
                //console.log("Ext has loaded...");
                resolve();
            });
        });
    };
    return x;
}

// var extLaunchFactory = () => {
//   return () => new Promise<void>((resolve, reject) => {
//       console.log("Loading Ext JS...");
//       Ext.onReady(function () {
//         console.log("Ext has loaded...");
//         resolve();
//       });
//   });
// }
//var ExtAppInitLaunchProvider = { provide: APP_INITIALIZER, useFactory: extLaunchFactory, deps: [], multi: true };

@NgModule({
  imports:         [],
  declarations:    [

{declarations}
  ],
  providers:       [
    { provide: APP_INITIALIZER, useFactory: extLaunchFactory, deps: [], multi: true }
  ],
  entryComponents: [  ],
  exports:
       [

{exports}
  ]
})
export class ExtAngular{Toolkit}{Bundle}Module { }
