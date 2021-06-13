import Ext_grid_plugin_BaseSummaries from '../../../Ext/grid/plugin/BaseSummaries.js';

export default class Ext_grid_plugin_Summaries extends Ext_grid_plugin_BaseSummaries {
  static PROPERTIES() { return [
    'contextMenu',
    'enableContextMenu',
    'enableSummaryMenu',
    'grid',
    'gridListeners',
    'id',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_Summaries.PROPERTIES());
    return Ext_grid_plugin_BaseSummaries.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_Summaries.EVENTS());
    return Ext_grid_plugin_BaseSummaries.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_Summaries.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_Summaries.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_Summaries.PROPERTIES()),
      events.concat(Ext_grid_plugin_Summaries.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
