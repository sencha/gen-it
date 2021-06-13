import Ext_grid_AdvancedGroupStore from '../../../Ext/grid/AdvancedGroupStore.js';

export default class Ext_grid_feature_AdvancedGroupStore extends Ext_grid_AdvancedGroupStore {
  static PROPERTIES() { return [
    'listeners',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_AdvancedGroupStore.PROPERTIES());
    return Ext_grid_AdvancedGroupStore.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_grid_feature_AdvancedGroupStore.EVENTS());
    return Ext_grid_AdvancedGroupStore.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_grid_feature_AdvancedGroupStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_grid_feature_AdvancedGroupStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_grid_feature_AdvancedGroupStore.PROPERTIES()),
      events.concat(Ext_grid_feature_AdvancedGroupStore.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
