import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_BaseSummaries from '../../../Ext/grid/plugin/BaseSummaries.js';

var Ext_grid_plugin_Summaries = /*#__PURE__*/function (_Ext_grid_plugin_Base) {
  _inheritsLoose(Ext_grid_plugin_Summaries, _Ext_grid_plugin_Base);

  Ext_grid_plugin_Summaries.PROPERTIES = function PROPERTIES() {
    return ['contextMenu', 'enableContextMenu', 'enableSummaryMenu', 'grid', 'gridListeners', 'id', 'stateEvents'];
  };

  Ext_grid_plugin_Summaries.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_Summaries.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_Summaries.PROPERTIES());
    return Ext_grid_plugin_BaseSummaries.getProperties(properties);
  };

  Ext_grid_plugin_Summaries.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_Summaries.EVENTS());
    return Ext_grid_plugin_BaseSummaries.getEvents(events);
  };

  function Ext_grid_plugin_Summaries(properties, events) {
    return _Ext_grid_plugin_Base.call(this, properties.concat(Ext_grid_plugin_Summaries.PROPERTIES()), events.concat(Ext_grid_plugin_Summaries.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_Summaries.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_Summaries, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_Base.observedAttributes;
      Ext_grid_plugin_Summaries.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_Summaries.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_Summaries;
}(Ext_grid_plugin_BaseSummaries);

export { Ext_grid_plugin_Summaries as default };