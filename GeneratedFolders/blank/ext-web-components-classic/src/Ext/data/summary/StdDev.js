import Ext_data_summary_Variance from '../../../Ext/data/summary/Variance.js';

export default class Ext_data_summary_StdDev extends Ext_data_summary_Variance {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_summary_StdDev.PROPERTIES());
    return Ext_data_summary_Variance.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_summary_StdDev.EVENTS());
    return Ext_data_summary_Variance.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_summary_StdDev.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_summary_StdDev.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_summary_StdDev.PROPERTIES()),
      events.concat(Ext_data_summary_StdDev.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
