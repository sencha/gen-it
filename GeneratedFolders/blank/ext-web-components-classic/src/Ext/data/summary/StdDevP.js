import Ext_data_summary_VarianceP from '../../../Ext/data/summary/VarianceP.js';

export default class Ext_data_summary_StdDevP extends Ext_data_summary_VarianceP {
  static PROPERTIES() { return [
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_summary_StdDevP.PROPERTIES());
    return Ext_data_summary_VarianceP.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_summary_StdDevP.EVENTS());
    return Ext_data_summary_VarianceP.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_summary_StdDevP.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_summary_StdDevP.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_summary_StdDevP.PROPERTIES()),
      events.concat(Ext_data_summary_StdDevP.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
