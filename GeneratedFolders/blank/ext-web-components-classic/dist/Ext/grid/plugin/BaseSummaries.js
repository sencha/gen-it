import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_plugin_Abstract from '../../../Ext/plugin/Abstract.js';

var Ext_grid_plugin_BaseSummaries = /*#__PURE__*/function (_Ext_plugin_Abstract) {
  _inheritsLoose(Ext_grid_plugin_BaseSummaries, _Ext_plugin_Abstract);

  Ext_grid_plugin_BaseSummaries.PROPERTIES = function PROPERTIES() {
    return ['contextMenu', 'enableContextMenu', 'enableSummaryMenu', 'grid', 'gridListeners', 'id', 'stateEvents'];
  };

  Ext_grid_plugin_BaseSummaries.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_BaseSummaries.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_BaseSummaries.PROPERTIES());
    return Ext_plugin_Abstract.getProperties(properties);
  };

  Ext_grid_plugin_BaseSummaries.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_BaseSummaries.EVENTS());
    return Ext_plugin_Abstract.getEvents(events);
  };

  function Ext_grid_plugin_BaseSummaries(properties, events) {
    return _Ext_plugin_Abstract.call(this, properties.concat(Ext_grid_plugin_BaseSummaries.PROPERTIES()), events.concat(Ext_grid_plugin_BaseSummaries.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_BaseSummaries.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_plugin_Abstract.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_plugin_Abstract.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_BaseSummaries, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_plugin_Abstract.observedAttributes;
      Ext_grid_plugin_BaseSummaries.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_BaseSummaries.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_BaseSummaries;
}(Ext_plugin_Abstract);

export { Ext_grid_plugin_BaseSummaries as default };