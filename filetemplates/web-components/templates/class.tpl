import {extendsclassname} from '{pathprefix}{extendpath}{classextendsfilename}.js';

export default class {classname} extends {extendsclassname} {
  static PROPERTIES() { return [{sPROPERTIES}  ]};
  static EVENTS() { return [{sEVENTS}  ]};
  static getProperties(properties) {
    properties = properties.concat({classname}.PROPERTIES());
    return {extendsclassname}.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat({classname}.EVENTS());
    return {extendsclassname}.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    {classname}.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    {classname}.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat({classname}.PROPERTIES()),
      events.concat({classname}.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
