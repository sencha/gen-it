import Ext_grid_plugin_BaseGroupingPanel from '../../../Ext/grid/plugin/BaseGroupingPanel.js';

export default class Ext_grid_plugin_GroupingPanel extends Ext_grid_plugin_BaseGroupingPanel {
  static PROPERTIES() { return [
    'id',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_GroupingPanel.PROPERTIES());
    return Ext_grid_plugin_BaseGroupingPanel.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_GroupingPanel.EVENTS());
    return Ext_grid_plugin_BaseGroupingPanel.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_GroupingPanel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_GroupingPanel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_GroupingPanel.PROPERTIES()),
      events.concat(Ext_grid_plugin_GroupingPanel.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
