import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_pivot_result_Base = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_pivot_result_Base, _Ext_Base);

  Ext_pivot_result_Base.PROPERTIES = function PROPERTIES() {
    return ['leftKey', 'topKey'];
  };

  Ext_pivot_result_Base.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_pivot_result_Base.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_result_Base.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_pivot_result_Base.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_result_Base.EVENTS());
    return Ext_Base.getEvents(events);
  };

  function Ext_pivot_result_Base(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_pivot_result_Base.PROPERTIES()), events.concat(Ext_pivot_result_Base.EVENTS())) || this;
  }

  var _proto = Ext_pivot_result_Base.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_pivot_result_Base, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_pivot_result_Base.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_result_Base.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_pivot_result_Base;
}(Ext_Base);

export { Ext_pivot_result_Base as default };