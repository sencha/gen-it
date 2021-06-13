import Ext_form_FieldContainer from '../../Ext/form/FieldContainer.js';

export default class Ext_ux_Multiselect extends Ext_form_FieldContainer {
  static PROPERTIES() { return [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'activeItem',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'allowBlank',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'appendOnly',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaErrorText',
    'ariaHelp',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoFitErrors',
    'autoRender',
    'autoShow',
    'baseBodyCls',
    'baseCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'blankText',
    'border',
    'bubbleEvents',
    'childEls',
    'cls',
    'columnWidth',
    'combineErrors',
    'combineLabels',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'ddReorder',
    'defaultAlign',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'delimiter',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'displayField',
    'dock',
    'draggable',
    'dragGroup',
    'dragText',
    'dropGroup',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldDefaults',
    'fieldLabel',
    'fixed',
    'flex',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'formItemCls',
    'frame',
    'height',
    'hidden',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'html',
    'id',
    'inactiveChildTabIndex',
    'invalidCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelConnector',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'layout',
    'liquidLayout',
    'listConfig',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxSelections',
    'maxSelectionsText',
    'maxWidth',
    'minHeight',
    'minSelections',
    'minSelectionsText',
    'minWidth',
    'modal',
    'modelValidation',
    'msgTarget',
    'name',
    'nameable',
    'nameHolder',
    'overCls',
    'padding',
    'pageSize',
    'plugins',
    'preventMark',
    'publishes',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'style',
    'submitValue',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tbar',
    'title',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'validateOnChange',
    'validation',
    'validationField',
    'value',
    'valueField',
    'valuePublishEvent',
    'viewModel',
    'weight',
    'width',
    'xtype',
  ]};
  static EVENTS() { return [
    {name:'activate', parameters:'sender'},
    {name:'add', parameters:'sender,component,index'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayout', parameters:'sender,layout'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforeadd', parameters:'sender,component,index'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforeremove', parameters:'sender,component'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'change', parameters:'sender,newValue,oldValue'},
    {name:'childmove', parameters:'sender,component,prevIndex,newIndex'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'dirtychange', parameters:'sender,isDirty'},
    {name:'disable', parameters:'sender'},
    {name:'enable', parameters:'sender'},
    {name:'errorchange', parameters:'sender,error'},
    {name:'fielderrorchange', parameters:'sender,field,error'},
    {name:'fieldvaliditychange', parameters:'sender,field,isValid'},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'hide', parameters:'sender'},
    {name:'move', parameters:'sender,x,y'},
    {name:'remove', parameters:'sender,component'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'validitychange', parameters:'sender,isValid'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_ux_Multiselect.PROPERTIES());
    return Ext_form_FieldContainer.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_ux_Multiselect.EVENTS());
    return Ext_form_FieldContainer.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_ux_Multiselect.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_ux_Multiselect.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_ux_Multiselect.PROPERTIES()),
      events.concat(Ext_ux_Multiselect.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
