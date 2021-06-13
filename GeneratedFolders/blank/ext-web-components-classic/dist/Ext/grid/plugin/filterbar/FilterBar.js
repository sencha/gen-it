import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_BaseFilterBar from '../../../../Ext/grid/plugin/BaseFilterBar.js';

var Ext_grid_plugin_filterbar_FilterBar = /*#__PURE__*/function (_Ext_grid_plugin_Base) {
  _inheritsLoose(Ext_grid_plugin_filterbar_FilterBar, _Ext_grid_plugin_Base);

  Ext_grid_plugin_filterbar_FilterBar.PROPERTIES = function PROPERTIES() {
    return ['hidden', 'id', 'stateEvents'];
  };

  Ext_grid_plugin_filterbar_FilterBar.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_filterbar_FilterBar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_filterbar_FilterBar.PROPERTIES());
    return Ext_grid_plugin_BaseFilterBar.getProperties(properties);
  };

  Ext_grid_plugin_filterbar_FilterBar.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_filterbar_FilterBar.EVENTS());
    return Ext_grid_plugin_BaseFilterBar.getEvents(events);
  };

  function Ext_grid_plugin_filterbar_FilterBar(properties, events) {
    return _Ext_grid_plugin_Base.call(this, properties.concat(Ext_grid_plugin_filterbar_FilterBar.PROPERTIES()), events.concat(Ext_grid_plugin_filterbar_FilterBar.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_filterbar_FilterBar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_Base.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_Base.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_filterbar_FilterBar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_Base.observedAttributes;
      Ext_grid_plugin_filterbar_FilterBar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_filterbar_FilterBar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_filterbar_FilterBar;
}(Ext_grid_plugin_BaseFilterBar);

export { Ext_grid_plugin_filterbar_FilterBar as default };