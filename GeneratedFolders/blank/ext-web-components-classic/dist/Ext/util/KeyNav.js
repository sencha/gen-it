import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Base from '../../Ext/Base.js';

var Ext_util_KeyNav = /*#__PURE__*/function (_Ext_Base) {
  _inheritsLoose(Ext_util_KeyNav, _Ext_Base);

  Ext_util_KeyNav.PROPERTIES = function PROPERTIES() {
    return ['defaultEventAction', 'disabled', 'eventName', 'forceKeyDown', 'ignoreInputFields', 'keyMap', 'priority', 'processEvent', 'processEventScope', 'target'];
  };

  Ext_util_KeyNav.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_KeyNav.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_KeyNav.PROPERTIES());
    return Ext_Base.getProperties(properties);
  };

  Ext_util_KeyNav.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_KeyNav.EVENTS());
    return Ext_Base.getEvents(events);
  };

  function Ext_util_KeyNav(properties, events) {
    return _Ext_Base.call(this, properties.concat(Ext_util_KeyNav.PROPERTIES()), events.concat(Ext_util_KeyNav.EVENTS())) || this;
  }

  var _proto = Ext_util_KeyNav.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_util_KeyNav, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_Base.observedAttributes;
      Ext_util_KeyNav.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_KeyNav.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_util_KeyNav;
}(Ext_Base);

export { Ext_util_KeyNav as default };