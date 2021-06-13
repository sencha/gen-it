import Ext_grid_plugin_filterbar_filters_Base from '../../../../../Ext/grid/plugin/filterbar/filters/Base.js';

export default class Ext_grid_plugin_filterbar_filters_None extends Ext_grid_plugin_filterbar_filters_Base {
  static PROPERTIES() { return [
    'active',
    'column',
    'dataIndex',
    'fieldDefaults',
    'grid',
    'operator',
    'operators',
    'serializer',
    'updateBuffer',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_filterbar_filters_None.PROPERTIES());
    return Ext_grid_plugin_filterbar_filters_Base.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_filterbar_filters_None.EVENTS());
    return Ext_grid_plugin_filterbar_filters_Base.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_filterbar_filters_None.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_filterbar_filters_None.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_filterbar_filters_None.PROPERTIES()),
      events.concat(Ext_grid_plugin_filterbar_filters_None.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
