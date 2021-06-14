import Ext_grid_feature_AdvancedGrouping from '../../../Ext/grid/feature/AdvancedGrouping.js';

export default class Ext_grid_feature_AdvancedGroupingSummary extends Ext_grid_feature_AdvancedGrouping {
  static PROPERTIES() { return [
    'addToGroupingText',
    'collapseAllText',
    'dock',
    'enableGroupingMenu',
    'expandAllText',
    'groupByText',
    'groupHeaderTpl',
    'groupsColumnWidth',
    'groupsText',
    'groupSummaryPosition',
    'groupSummaryTpl',
    'listeners',
    'removeFromGroupingText',
    'startCollapsed',
    'startGroupedHeadersHidden',
    'summaryPosition',
    'summaryTpl',
  ]};
  static EVENTS() { return [
    {name:'aftergroupschange', parameters:'grid,groupers,e'},
    {name:'beforegroupschange', parameters:'grid,groupers,e'},
    {name:'groupclick', parameters:'grid,params,e'},
    {name:'groupcollapse', parameters:'grid,params,e'},
    {name:'groupcontextmenu', parameters:'grid,params,e'},
    {name:'groupexpand', parameters:'grid,params,e'},
    {name:'groupsummaryclick', parameters:'grid,params,e'},
    {name:'groupsummarycontextmenu', parameters:'grid,params,e'},
    {name:'summaryclick', parameters:'grid,params,e'},
    {name:'summarycontextmenu', parameters:'grid,params,e'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_AdvancedGroupingSummary.PROPERTIES());
    return Ext_grid_feature_AdvancedGrouping.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_feature_AdvancedGroupingSummary.EVENTS());
    return Ext_grid_feature_AdvancedGrouping.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_feature_AdvancedGroupingSummary.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_feature_AdvancedGroupingSummary.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_feature_AdvancedGroupingSummary.PROPERTIES()),
      events.concat(Ext_grid_feature_AdvancedGroupingSummary.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
