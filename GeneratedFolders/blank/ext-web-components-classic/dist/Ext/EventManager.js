import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../Ext/Base.js';

var Ext_EventManager = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_EventManager, _Ext_Base);

  Ext_EventManager.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_EventManager.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_EventManager.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_EventManager.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_EventManager.getEvents = function getEvents(events) {
    events = events.concat(Ext_EventManager.EVENTS());
    return Ext_Base.getEvents(events);
  };

  function Ext_EventManager(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_EventManager.PROPERTIES()), events.concat(Ext_EventManager.EVENTS())) || this;
  }

  var _proto = Ext_EventManager.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_EventManager, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_EventManager.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_EventManager.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_EventManager;
}(Ext_Base);

export { Ext_EventManager as default };