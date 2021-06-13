import Ext_dataview_DataView from '../../Ext/dataview/DataView.js';

export default class Ext_calendar_AbstractList extends Ext_dataview_DataView {
  static PROPERTIES() { return [
    'activeChildTabIndex',
    'activeItem',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'bodyCls',
    'border',
    'bottom',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'html',
    'id',
    'inactiveChildTabIndex',
    'inline',
    'innerCls',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemId',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lastSelected',
    'layout',
    'left',
    'listeners',
    'loadingHeight',
    'loadingText',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'padding',
    'plugins',
    'pressedDelay',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'right',
    'ripple',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selected',
    'selection',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'style',
    'tabIndex',
    'toFrontOnShow',
    'tooltip',
    'top',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'viewModel',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'activate', parameters:'newActiveItem,sender,oldActiveItem'},
    {name:'activeItemchange', parameters:'sender,value,oldValue'},
    {name:'add', parameters:''},
    {name:'added', parameters:'sender,container,index'},
    {name:'beforeactiveItemchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforebottomchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforecenteredchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforedisabledchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforedockedchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeheightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehiddenchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforeleftchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforemaxHeightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforemaxWidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeminHeightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeminWidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeorientationchange', parameters:''},
    {name:'beforerightchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforescrollablechange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestorechange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforetofront', parameters:'sender'},
    {name:'beforetopchange', parameters:'sender,value,oldValue,undefined'},
    {name:'beforewidthchange', parameters:'sender,value,oldValue,undefined'},
    {name:'blur', parameters:'sender,event'},
    {name:'bottomchange', parameters:'sender,value,oldValue'},
    {name:'centeredchange', parameters:'sender,value,oldValue'},
    {name:'childdoubletap', parameters:'sender,location'},
    {name:'childlongpress', parameters:'sender,location'},
    {name:'childmouseenter', parameters:'sender,location'},
    {name:'childmouseleave', parameters:'sender,location'},
    {name:'childsingletap', parameters:'sender,location'},
    {name:'childtap', parameters:'sender,location'},
    {name:'childtaphold', parameters:'sender,location'},
    {name:'childtouchcancel', parameters:'sender,location'},
    {name:'childtouchend', parameters:'sender,location'},
    {name:'childtouchmove', parameters:'sender,location'},
    {name:'childtouchstart', parameters:'sender,location'},
    {name:'deactivate', parameters:'oldActiveItem,sender,newActiveItem'},
    {name:'deselect', parameters:'sender,records'},
    {name:'destroy', parameters:''},
    {name:'disabledchange', parameters:'sender,value,oldValue'},
    {name:'dockedchange', parameters:'sender,value,oldValue'},
    {name:'erased', parameters:'sender'},
    {name:'floatingchange', parameters:'sender,positioned'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'fullscreen', parameters:'sender'},
    {name:'heightchange', parameters:'sender,value,oldValue'},
    {name:'hiddenchange', parameters:'sender,value,oldValue'},
    {name:'hide', parameters:'sender'},
    {name:'initialize', parameters:'sender'},
    {name:'itemdoubletap', parameters:'sender,index,target,record,e'},
    {name:'itemlongpress', parameters:'sender,index,target,record,e'},
    {name:'itemmouseenter', parameters:'sender,index,target,record,e'},
    {name:'itemmouseleave', parameters:'sender,index,target,record,e'},
    {name:'itemsingletap', parameters:'sender,index,target,record,e'},
    {name:'itemswipe', parameters:'sender,index,target,record,e'},
    {name:'itemtap', parameters:'sender,index,target,record,e'},
    {name:'itemtaphold', parameters:'sender,index,target,record,e'},
    {name:'itemtouchcancel', parameters:'sender,index,target,record,e'},
    {name:'itemtouchend', parameters:'sender,index,target,record,e'},
    {name:'itemtouchmove', parameters:'sender,index,target,record,e'},
    {name:'itemtouchstart', parameters:'sender,index,target,record,e'},
    {name:'leftchange', parameters:'sender,value,oldValue'},
    {name:'maxHeightchange', parameters:'sender,value,oldValue'},
    {name:'maxWidthchange', parameters:'sender,value,oldValue'},
    {name:'minHeightchange', parameters:'sender,value,oldValue'},
    {name:'minWidthchange', parameters:'sender,value,oldValue'},
    {name:'move', parameters:''},
    {name:'moved', parameters:'sender,container,toIndex,fromIndex'},
    {name:'navigate', parameters:'sender,to,from'},
    {name:'orientationchange', parameters:''},
    {name:'painted', parameters:'sender,element'},
    {name:'positionedchange', parameters:'sender,positioned'},
    {name:'refresh', parameters:'sender'},
    {name:'remove', parameters:''},
    {name:'removed', parameters:'sender,container,index'},
    {name:'renderedchange', parameters:'sender,item,rendered'},
    {name:'resize', parameters:'element,info'},
    {name:'rightchange', parameters:'sender,value,oldValue'},
    {name:'rowselection', parameters:'view,selection'},
    {name:'scrollablechange', parameters:'sender,value,oldValue'},
    {name:'select', parameters:'sender,selected'},
    {name:'selectionchange', parameters:'view,records,selected,selection'},
    {name:'show', parameters:'sender'},
    {name:'storechange', parameters:'sender,value,oldValue'},
    {name:'tofront', parameters:'sender'},
    {name:'topchange', parameters:'sender,value,oldValue'},
    {name:'updatedata', parameters:'sender,newData'},
    {name:'widthchange', parameters:'sender,value,oldValue'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_calendar_AbstractList.PROPERTIES());
    return Ext_dataview_DataView.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_calendar_AbstractList.EVENTS());
    return Ext_dataview_DataView.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_calendar_AbstractList.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_calendar_AbstractList.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_calendar_AbstractList.PROPERTIES()),
      events.concat(Ext_calendar_AbstractList.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
