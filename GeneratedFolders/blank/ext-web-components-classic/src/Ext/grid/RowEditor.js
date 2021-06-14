import Ext_form_Panel from '../../Ext/form/Panel.js';

export default class Ext_grid_RowEditor extends Ext_form_Panel {
  static PROPERTIES() { return [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'alignOnScroll',
    'alignTarget',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'animCollapse',
    'api',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoRender',
    'autoShow',
    'baseCls',
    'baseParams',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bubbleEvents',
    'buttonAlign',
    'buttons',
    'cancelBtnText',
    'childEls',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsedCls',
    'collapseDirection',
    'collapseFirst',
    'collapseMode',
    'collapseToolText',
    'collapsible',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainHeader',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultButton',
    'defaultButtonTarget',
    'defaultDockWeights',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'detachOnRemove',
    'dirtyText',
    'disabled',
    'disabledCls',
    'dock',
    'dockedItems',
    'draggable',
    'errorReader',
    'errorsText',
    'expandToolText',
    'fbar',
    'fieldDefaults',
    'fixed',
    'flex',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'frameHeader',
    'glyph',
    'header',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideMode',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'jsonSubmit',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'maintainTitlePosition',
    'manageHeight',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'method',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'nameHolder',
    'overCls',
    'overlapHeader',
    'padding',
    'paramOrder',
    'paramsAsHash',
    'placeholder',
    'placeholderCollapseHideMode',
    'plugins',
    'pollForChanges',
    'pollInterval',
    'publishes',
    'rbar',
    'reader',
    'reference',
    'referenceHolder',
    'region',
    'removeUnmodified',
    'renderConfig',
    'renderData',
    'renderTo',
    'renderTpl',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveBtnText',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'shrinkWrapDock',
    'simpleDrag',
    'standardSubmit',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tbar',
    'timeout',
    'title',
    'titleAlign',
    'titleCollapse',
    'titlePosition',
    'titleRotation',
    'toFrontOnShow',
    'tools',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackResetOnLoad',
    'twoWayBindable',
    'ui',
    'uiCls',
    'url',
    'userCls',
    'viewModel',
    'waitMsgTarget',
    'waitTitle',
    'weight',
    'width',
    'xtype',
  ]};
  static EVENTS() { return [
    {name:'actioncomplete', parameters:'sender,action'},
    {name:'actionfailed', parameters:'sender,action'},
    {name:'activate', parameters:'sender'},
    {name:'add', parameters:'sender,component,index'},
    {name:'added', parameters:'sender,container,pos'},
    {name:'afterlayout', parameters:'sender,layout'},
    {name:'afterlayoutanimation', parameters:'sender'},
    {name:'afterrender', parameters:'sender'},
    {name:'beforeaction', parameters:'sender,action'},
    {name:'beforeactivate', parameters:'sender'},
    {name:'beforeadd', parameters:'sender,component,index'},
    {name:'beforeclose', parameters:'panel'},
    {name:'beforecollapse', parameters:'p,direction,animate'},
    {name:'beforedeactivate', parameters:'sender'},
    {name:'beforedestroy', parameters:'sender'},
    {name:'beforeexpand', parameters:'p,animate'},
    {name:'beforehide', parameters:'sender'},
    {name:'beforeremove', parameters:'sender,component'},
    {name:'beforerender', parameters:'sender'},
    {name:'beforeshow', parameters:'sender'},
    {name:'beforestaterestore', parameters:'sender,state'},
    {name:'beforestatesave', parameters:'sender,state'},
    {name:'blur', parameters:'sender,event'},
    {name:'boxready', parameters:'sender,width,height'},
    {name:'childmove', parameters:'sender,component,prevIndex,newIndex'},
    {name:'close', parameters:'panel'},
    {name:'collapse', parameters:'p'},
    {name:'deactivate', parameters:'sender'},
    {name:'destroy', parameters:'sender'},
    {name:'dirtychange', parameters:'sender,dirty'},
    {name:'disable', parameters:'sender'},
    {name:'dockedadd', parameters:'sender,component,index'},
    {name:'dockedremove', parameters:'sender,component'},
    {name:'enable', parameters:'sender'},
    {name:'expand', parameters:'p'},
    {name:'fielderrorchange', parameters:'sender,field,error'},
    {name:'fieldvaliditychange', parameters:'sender,field,isValid'},
    {name:'float', parameters:''},
    {name:'focus', parameters:'sender,event'},
    {name:'focusenter', parameters:'sender,event'},
    {name:'focusleave', parameters:'sender,event'},
    {name:'glyphchange', parameters:'sender,newGlyph,oldGlyph'},
    {name:'hide', parameters:'sender'},
    {name:'iconalignchange', parameters:'sender,newIconAlign,oldIconAlign'},
    {name:'iconchange', parameters:'sender,newIcon,oldIcon'},
    {name:'iconclschange', parameters:'sender,newIconCls,oldIconCls'},
    {name:'move', parameters:'sender,x,y'},
    {name:'remove', parameters:'sender,component'},
    {name:'removed', parameters:'sender,ownerCt'},
    {name:'render', parameters:'sender'},
    {name:'resize', parameters:'sender,width,height,oldWidth,oldHeight'},
    {name:'show', parameters:'sender'},
    {name:'staterestore', parameters:'sender,state'},
    {name:'statesave', parameters:'sender,state'},
    {name:'titlealignchange', parameters:'sender,newTitleAlign,oldTitleAlign'},
    {name:'titlechange', parameters:'sender,newTitle,oldTitle'},
    {name:'titlepositionchange', parameters:'sender,newTitlePosition,oldTitlePosition'},
    {name:'titlerotationchange', parameters:'sender,newTitleRotation,oldTitleRotation'},
    {name:'unfloat', parameters:''},
    {name:'validitychange', parameters:'sender,valid'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_RowEditor.PROPERTIES());
    return Ext_form_Panel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_RowEditor.EVENTS());
    return Ext_form_Panel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_RowEditor.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_RowEditor.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_RowEditor.PROPERTIES()),
      events.concat(Ext_grid_RowEditor.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
