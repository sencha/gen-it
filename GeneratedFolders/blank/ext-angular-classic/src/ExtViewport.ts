//import EWCViewport from '../dist/ext-viewport.component.js';
//inputs: (new EWCViewport()).properties,
//import EWCViewport from '@sencha/ext-web-components-classic/dist/ext-viewport.component.js';
import { EWCViewport } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtViewport',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowDomMove','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','bubbleEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','draggable','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','height','hidden','hideMode','html','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxUserScale','maxWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','padding','plugins','publishes','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','move','remove','removed','render','resize','show','staterestore','statesave',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtViewportComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtViewportComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allowDomMove','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bind','border','bubbleEvents','childEls','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultFocus','defaultListenerScope','defaults','defaultType','detachOnRemove','disabled','disabledCls','dock','draggable','fixed','flex','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','height','hidden','hideMode','html','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxUserScale','maxWidth','minHeight','minWidth','modal','modelValidation','nameable','nameHolder','overCls','undefined','undefined','padding','plugins','publishes','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','toFrontOnShow','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','viewModel','weight','width','xtype',],
            (new EWCViewport()).events,
            ['ready','created','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforedeactivate','beforedestroy','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','childmove','deactivate','destroy','disable','enable','focus','focusenter','focusleave','hide','move','remove','removed','render','resize','show','staterestore','statesave',],
            vc
        )
        this.xtype = 'viewport'
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

//var events = (new EWCViewport()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
