import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_BaseGroupingPanel from '../../../Ext/grid/plugin/BaseGroupingPanel.js';

var Ext_grid_plugin_GroupingPanel = /*#__PURE__*/function (_Ext_grid_plugin_Base) {
  _inheritsLoose(Ext_grid_plugin_GroupingPanel, _Ext_grid_plugin_Base);

  Ext_grid_plugin_GroupingPanel.PROPERTIES = function PROPERTIES() {
    return ['id', 'stateEvents'];
  };

  Ext_grid_plugin_GroupingPanel.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_GroupingPanel.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_GroupingPanel.PROPERTIES());
    return Ext_grid_plugin_BaseGroupingPanel.getProperties(properties);
  };

  Ext_grid_plugin_GroupingPanel.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_GroupingPanel.EVENTS());
    return Ext_grid_plugin_BaseGroupingPanel.getEvents(events);
  };

  function Ext_grid_plugin_GroupingPanel(properties, events) {
    return _Ext_grid_plugin_Base.call(this, properties.concat(Ext_grid_plugin_GroupingPanel.PROPERTIES()), events.concat(Ext_grid_plugin_GroupingPanel.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_GroupingPanel.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_GroupingPanel, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_Base.observedAttributes;
      Ext_grid_plugin_GroupingPanel.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_GroupingPanel.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_GroupingPanel;
}(Ext_grid_plugin_BaseGroupingPanel);

export { Ext_grid_plugin_GroupingPanel as default };