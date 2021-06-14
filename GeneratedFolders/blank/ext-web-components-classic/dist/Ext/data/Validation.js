import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_Model from '../../Ext/data/Model.js';

var Ext_data_Validation = /*#__PURE__*/function (_Ext_data_Model) {
  _inheritsLoose(Ext_data_Validation, _Ext_data_Model);

  Ext_data_Validation.PROPERTIES = function PROPERTIES() {
    return ['belongsTo', 'clientIdProperty', 'convertOnSet', 'fields', 'hasMany', 'hasOne', 'identifier', 'idProperty', 'manyToMany', 'proxy', 'schema', 'summary', 'validationSeparator', 'validators', 'versionProperty'];
  };

  Ext_data_Validation.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_Validation.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_Validation.PROPERTIES());
    return Ext_data_Model.getProperties(properties);
  };

  Ext_data_Validation.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_Validation.EVENTS());
    return Ext_data_Model.getEvents(events);
  };

  function Ext_data_Validation(properties, events) {
    return _Ext_data_Model.call(this, properties.concat(Ext_data_Validation.PROPERTIES()), events.concat(Ext_data_Validation.EVENTS())) || this;
  }

  var _proto = Ext_data_Validation.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_Model.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_Model.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_data_Validation, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_Model.observedAttributes;
      Ext_data_Validation.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_Validation.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_data_Validation;
}(Ext_data_Model);

export { Ext_data_Validation as default };