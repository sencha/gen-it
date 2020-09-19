//import EWC{Xtype} from '../dist/ext-{xtype}.component.js';
//inputs: (new EWC{Xtype}()).properties,
//import EWC{Xtype} from '@sencha/ext-web-components-{toolkit}{bundle}/dist/ext-{xtype}.component.js';
import { EWC{Xtype} } from '@sencha/ext-web-components-{toolkit}{bundle}';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './common/angularbase';

@Component({
    selector: 'Ext{Xtype}',
    inputs: {propNames},
    outputs: {eventNames},
    providers: [{provide: EngBase, useExisting: forwardRef(() => Ext{Xtype}Component)}],
    template: '<ng-content></ng-content>'
})
export class Ext{Xtype}Component extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            {propNames},
            (new EWC{Xtype}()).events,
            {eventNames},
            vc
        )
        this.xtype = '{xtype}'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWC{Xtype}()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
