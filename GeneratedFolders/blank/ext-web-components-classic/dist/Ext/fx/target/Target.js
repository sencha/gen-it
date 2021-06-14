import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../../Ext/Base.js';

var Ext_fx_target_Target = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_fx_target_Target, _Ext_Base);

  Ext_fx_target_Target.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_fx_target_Target.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_fx_target_Target.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_fx_target_Target.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_fx_target_Target.getEvents = function getEvents(events) {
    events = events.concat(Ext_fx_target_Target.EVENTS());
    return Ext_Base.getEvents(events);
  };

  function Ext_fx_target_Target(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_fx_target_Target.PROPERTIES()), events.concat(Ext_fx_target_Target.EVENTS())) || this;
  }

  var _proto = Ext_fx_target_Target.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_fx_target_Target, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_fx_target_Target.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_fx_target_Target.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_fx_target_Target;
}(Ext_Base);

export { Ext_fx_target_Target as default };