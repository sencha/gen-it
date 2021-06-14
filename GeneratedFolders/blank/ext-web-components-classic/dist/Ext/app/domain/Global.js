import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_app_EventDomain from '../../../Ext/app/EventDomain.js';

var Ext_app_domain_Global = /*#__PURE__*/function (_Ext_app_EventDomain) {
  _inheritsLoose(Ext_app_domain_Global, _Ext_app_EventDomain);

  Ext_app_domain_Global.PROPERTIES = function PROPERTIES() {
    return ['idProperty'];
  };

  Ext_app_domain_Global.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_app_domain_Global.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_app_domain_Global.PROPERTIES());
    return Ext_app_EventDomain.getProperties(properties);
  };

  Ext_app_domain_Global.getEvents = function getEvents(events) {
    events = events.concat(Ext_app_domain_Global.EVENTS());
    return Ext_app_EventDomain.getEvents(events);
  };

  function Ext_app_domain_Global(properties, events) {
    return _Ext_app_EventDomain.call(this, properties.concat(Ext_app_domain_Global.PROPERTIES()), events.concat(Ext_app_domain_Global.EVENTS())) || this;
  }

  var _proto = Ext_app_domain_Global.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_app_EventDomain.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_app_EventDomain.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_app_domain_Global, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_app_EventDomain.observedAttributes;
      Ext_app_domain_Global.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_app_domain_Global.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_app_domain_Global;
}(Ext_app_EventDomain);

export { Ext_app_domain_Global as default };