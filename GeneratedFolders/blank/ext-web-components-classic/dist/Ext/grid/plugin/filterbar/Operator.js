import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_AbstractPlugin from '../../../../Ext/AbstractPlugin.js';

var Ext_grid_plugin_filterbar_Operator = /*#__PURE__*/function (_Ext_AbstractPlugin) {
  _inheritsLoose(Ext_grid_plugin_filterbar_Operator, _Ext_AbstractPlugin);

  Ext_grid_plugin_filterbar_Operator.PROPERTIES = function PROPERTIES() {
    return ['operator', 'operators'];
  };

  Ext_grid_plugin_filterbar_Operator.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_filterbar_Operator.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_filterbar_Operator.PROPERTIES());
    return Ext_AbstractPlugin.getProperties(properties);
  };

  Ext_grid_plugin_filterbar_Operator.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_filterbar_Operator.EVENTS());
    return Ext_AbstractPlugin.getEvents(events);
  };

  function Ext_grid_plugin_filterbar_Operator(properties, events) {
    return _Ext_AbstractPlugin.call(this, properties.concat(Ext_grid_plugin_filterbar_Operator.PROPERTIES()), events.concat(Ext_grid_plugin_filterbar_Operator.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_filterbar_Operator.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_AbstractPlugin.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_AbstractPlugin.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_filterbar_Operator, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_AbstractPlugin.observedAttributes;
      Ext_grid_plugin_filterbar_Operator.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_filterbar_Operator.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_filterbar_Operator;
}(Ext_AbstractPlugin);

export { Ext_grid_plugin_filterbar_Operator as default };