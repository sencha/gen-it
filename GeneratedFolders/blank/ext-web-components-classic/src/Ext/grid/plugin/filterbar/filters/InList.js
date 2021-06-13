import Ext_grid_plugin_filterbar_filters_List from '../../../../../Ext/grid/plugin/filterbar/filters/List.js';

export default class Ext_grid_plugin_filterbar_filters_InList extends Ext_grid_plugin_filterbar_filters_List {
  static PROPERTIES() { return [
    'active',
    'column',
    'dataIndex',
    'fieldDefaults',
    'grid',
    'operator',
    'operators',
    'options',
    'serializer',
    'updateBuffer',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_filterbar_filters_InList.PROPERTIES());
    return Ext_grid_plugin_filterbar_filters_List.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_plugin_filterbar_filters_InList.EVENTS());
    return Ext_grid_plugin_filterbar_filters_List.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_plugin_filterbar_filters_InList.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_plugin_filterbar_filters_InList.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_plugin_filterbar_filters_InList.PROPERTIES()),
      events.concat(Ext_grid_plugin_filterbar_filters_InList.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
