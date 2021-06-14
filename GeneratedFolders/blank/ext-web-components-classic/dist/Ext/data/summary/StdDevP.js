import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_summary_VarianceP from '../../../Ext/data/summary/VarianceP.js';

var Ext_data_summary_StdDevP = /*#__PURE__*/function (_Ext_data_summary_Var) {
  _inheritsLoose(Ext_data_summary_StdDevP, _Ext_data_summary_Var);

  Ext_data_summary_StdDevP.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_summary_StdDevP.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_summary_StdDevP.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_summary_StdDevP.PROPERTIES());
    return Ext_data_summary_VarianceP.getProperties(properties);
  };

  Ext_data_summary_StdDevP.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_summary_StdDevP.EVENTS());
    return Ext_data_summary_VarianceP.getEvents(events);
  };

  function Ext_data_summary_StdDevP(properties, events) {
    return _Ext_data_summary_Var.call(this, properties.concat(Ext_data_summary_StdDevP.PROPERTIES()), events.concat(Ext_data_summary_StdDevP.EVENTS())) || this;
  }

  var _proto = Ext_data_summary_StdDevP.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_summary_Var.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_summary_Var.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_data_summary_StdDevP, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_summary_Var.observedAttributes;
      Ext_data_summary_StdDevP.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_summary_StdDevP.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_data_summary_StdDevP;
}(Ext_data_summary_VarianceP);

export { Ext_data_summary_StdDevP as default };