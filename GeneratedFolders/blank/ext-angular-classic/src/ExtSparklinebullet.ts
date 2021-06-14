//import EWCSparklinebullet from '../dist/ext-sparklinebullet.component.js';
//inputs: (new EWCSparklinebullet()).properties,
//import EWCSparklinebullet from '@sencha/ext-web-components-classic/dist/ext-sparklinebullet.component.js';
import { EWCSparklinebullet } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtSparklinebullet',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','base','bind','border','cls','controller','defaultListenerScope','disabled','disableTooltips','undefined','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','listeners','margin','name','nameable','performanceColor','plugins','publishes','rangeColors','reference','renderTo','ripple','session','shareableName','style','targetColor','targetWidth','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinebulletComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSparklinebulletComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','base','bind','border','cls','controller','defaultListenerScope','disabled','disableTooltips','undefined','focusCls','height','hidden','hideMode','highlightColor','highlightLighten','instanceCls','keyMap','keyMapEnabled','keyMapTarget','lineColor','listeners','margin','name','nameable','performanceColor','plugins','publishes','rangeColors','reference','renderTo','ripple','session','shareableName','style','targetColor','targetWidth','tipTpl','tooltipPrefix','tooltipSkipNull','tooltipSuffix','touchAction','twoWayBindable','ui','userCls','values','viewModel','width',],
            (new EWCSparklinebullet()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'sparklinebullet'
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

//var events = (new EWCSparklinebullet()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
