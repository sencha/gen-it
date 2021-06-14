//import EWCTreegroupedgrid from '../dist/ext-treegroupedgrid.component.js';
//inputs: (new EWCTreegroupedgrid()).properties,
//import EWCTreegroupedgrid from '@sencha/ext-web-components-modern/dist/ext-treegroupedgrid.component.js';
import { EWCTreegroupedgrid } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtTreegroupedgrid',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','bufferSize','cardSwitchAnimation','centered','cls','collapseDefaults','collapsible','columnLines','columnMenu','columnResize','columns','columnsMenuItem','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','disclosureProperty','displayed','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','enableColumnMove','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','grouped','groupFooter','groupHeader','groupHeaderTpl','grouping','groupPlaceholder','groupSummaryPosition','groupSummaryTpl','height','hidden','hideAnimation','hideHeaders','hideMode','hideOnMaskTap','hideScrollbar','horizontalOverflow','html','id','inactiveChildTabIndex','indexBar','infinite','inline','innerCls','innerCtHeight','innerWidth','instanceCls','itemButtonMode','itemCls','itemConfig','itemContentCls','itemDataMap','itemId','itemInnerCls','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','loadingHeight','loadingText','maintainChildNodes','manageBorders','margin','markDirty','masked','maxHeight','maxItemCache','maxWidth','minHeight','minimumBufferDistance','minWidth','modal','modelValidation','multiColumnSort','name','nameable','nameHolder','onItemDisclosure','padding','pinFooters','pinHeaders','pinnedFooter','pinnedFooterHeight','pinnedHeader','pinnedHeaderHeight','plugins','pressedDelay','preventSelectionOnDisclose','preventSelectionOnTool','publishes','record','reference','referenceHolder','relative','renderTo','reserveScrollbar','resetFocusPosition','right','ripple','rowLines','rowNumbers','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selection','session','shadow','shareableName','shim','showAnimation','sortable','startCollapsed','stateful','statefulDefaults','stateId','store','striped','style','summaryPosition','summaryTpl','tabIndex','title','titleBar','toFrontOnShow','tooltip','top','topRenderedIndex','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','undefined','variableHeights','verticalOverflow','viewModel','visibleHeight','visibleLeft','visibleTop','visibleWidth','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecomplete','beforedisabledchange','beforedockedchange','beforeedit','beforegroupcollapse','beforegroupexpand','beforegroupSummaryPositionchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeselectionextend','beforeshow','beforestartedit','beforestorechange','beforesummaryPositionchange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','canceledit','cellselection','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','columnadd','columnhide','columnmenucreated','columnmove','columnremove','columnresize','columnselection','columnshow','columnsort','complete','deactivate','deselect','destroy','disabledchange','disclose','dockedchange','edit','erased','floatingchange','focus','focusenter','focusleave','fullscreen','groupcollapse','groupcontextmenu','groupdoubletap','groupexpand','groupsingletap','groupsummarycontextmenu','groupsummarydoubletap','groupSummaryPositionchange','groupsummarysingletap','groupsummarytap','groupsummarytaphold','grouptap','grouptaphold','heightchange','hiddenchange','hide','initialize','itemaction','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','scrollablechange','select','selectionextenderdrag','show','specialkey','startedit','storechange','summaryPositionchange','tofront','topchange','updatedata','validateedit','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreegroupedgridComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtTreegroupedgridComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','bufferSize','cardSwitchAnimation','centered','cls','collapseDefaults','collapsible','columnLines','columnMenu','columnResize','columns','columnsMenuItem','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','disclosureProperty','displayed','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','enableColumnMove','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','grouped','groupFooter','groupHeader','groupHeaderTpl','grouping','groupPlaceholder','groupSummaryPosition','groupSummaryTpl','height','hidden','hideAnimation','hideHeaders','hideMode','hideOnMaskTap','hideScrollbar','horizontalOverflow','html','id','inactiveChildTabIndex','indexBar','infinite','inline','innerCls','innerCtHeight','innerWidth','instanceCls','itemButtonMode','itemCls','itemConfig','itemContentCls','itemDataMap','itemId','itemInnerCls','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','loadingHeight','loadingText','maintainChildNodes','manageBorders','margin','markDirty','masked','maxHeight','maxItemCache','maxWidth','minHeight','minimumBufferDistance','minWidth','modal','modelValidation','multiColumnSort','name','nameable','nameHolder','onItemDisclosure','padding','pinFooters','pinHeaders','pinnedFooter','pinnedFooterHeight','pinnedHeader','pinnedHeaderHeight','plugins','pressedDelay','preventSelectionOnDisclose','preventSelectionOnTool','publishes','record','reference','referenceHolder','relative','renderTo','reserveScrollbar','resetFocusPosition','right','ripple','rowLines','rowNumbers','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selection','session','shadow','shareableName','shim','showAnimation','sortable','startCollapsed','stateful','statefulDefaults','stateId','store','striped','style','summaryPosition','summaryTpl','tabIndex','title','titleBar','toFrontOnShow','tooltip','top','topRenderedIndex','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','undefined','variableHeights','verticalOverflow','viewModel','visibleHeight','visibleLeft','visibleTop','visibleWidth','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCTreegroupedgrid()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforecomplete','beforedisabledchange','beforedockedchange','beforeedit','beforegroupcollapse','beforegroupexpand','beforegroupSummaryPositionchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeselectionextend','beforeshow','beforestartedit','beforestorechange','beforesummaryPositionchange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','canceledit','cellselection','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','columnadd','columnhide','columnmenucreated','columnmove','columnremove','columnresize','columnselection','columnshow','columnsort','complete','deactivate','deselect','destroy','disabledchange','disclose','dockedchange','edit','erased','floatingchange','focus','focusenter','focusleave','fullscreen','groupcollapse','groupcontextmenu','groupdoubletap','groupexpand','groupsingletap','groupsummarycontextmenu','groupsummarydoubletap','groupSummaryPositionchange','groupsummarysingletap','groupsummarytap','groupsummarytaphold','grouptap','grouptaphold','heightchange','hiddenchange','hide','initialize','itemaction','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','scrollablechange','select','selectionextenderdrag','show','specialkey','startedit','storechange','summaryPositionchange','tofront','topchange','updatedata','validateedit','widthchange',],
            vc
        )
        this.xtype = 'treegroupedgrid'
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

//var events = (new EWCTreegroupedgrid()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
