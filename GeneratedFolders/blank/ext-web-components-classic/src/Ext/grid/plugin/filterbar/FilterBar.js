import Ext_grid_plugin_BaseFilterBar from '../../../../Ext/grid/plugin/BaseFilterBar.js';

export default class Ext_grid_plugin_filterbar_FilterBar extends Ext_grid_plugin_BaseFilterBar {
  static PROPERTIES() { return [
    'hidden',
    'id',
    'stateEvents',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_filterbar_FilterBar.PROPERTIES());
    return Ext_grid_plugin_BaseFilterBar.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_filterbar_FilterBar.EVENTS());
    return Ext_grid_plugin_BaseFilterBar.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_filterbar_FilterBar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_filterbar_FilterBar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_filterbar_FilterBar.PROPERTIES()),
      events.concat(Ext_grid_plugin_filterbar_FilterBar.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
