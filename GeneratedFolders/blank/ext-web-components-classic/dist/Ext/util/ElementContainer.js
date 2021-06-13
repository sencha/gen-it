import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_ElementContainer = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_ElementContainer, _Ext_Base);

  Ext_util_ElementContainer.PROPERTIES = function PROPERTIES() {
    return ['childEls'];
  };

  Ext_util_ElementContainer.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_ElementContainer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_ElementContainer.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_ElementContainer.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_ElementContainer.EVENTS());
    return Ext_Base.getEvents(events);
  };

  function Ext_util_ElementContainer(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_ElementContainer.PROPERTIES()), events.concat(Ext_util_ElementContainer.EVENTS())) || this;
  }

  var _proto = Ext_util_ElementContainer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_util_ElementContainer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_ElementContainer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_ElementContainer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_util_ElementContainer;
}(Ext_Base);

export { Ext_util_ElementContainer as default };