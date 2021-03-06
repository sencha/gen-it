import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_summary_Variance from '../../../Ext/data/summary/Variance.js';

var Ext_data_summary_VarianceP = /*#__PURE__*/function (_Ext_data_summary_Var) {
  _inheritsLoose(Ext_data_summary_VarianceP, _Ext_data_summary_Var);

  Ext_data_summary_VarianceP.PROPERTIES = function PROPERTIES() {
    return [];
  };

  Ext_data_summary_VarianceP.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_summary_VarianceP.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_summary_VarianceP.PROPERTIES());
    return Ext_data_summary_Variance.getProperties(properties);
  };

  Ext_data_summary_VarianceP.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_summary_VarianceP.EVENTS());
    return Ext_data_summary_Variance.getEvents(events);
  };

  function Ext_data_summary_VarianceP(properties, events) {
    return _Ext_data_summary_Var.call(this, properties.concat(Ext_data_summary_VarianceP.PROPERTIES()), events.concat(Ext_data_summary_VarianceP.EVENTS())) || this;
  }

  var _proto = Ext_data_summary_VarianceP.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_summary_Var.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_summary_Var.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_data_summary_VarianceP, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_summary_Var.observedAttributes;
      Ext_data_summary_VarianceP.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_summary_VarianceP.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_data_summary_VarianceP;
}(Ext_data_summary_Variance);

export { Ext_data_summary_VarianceP as default };