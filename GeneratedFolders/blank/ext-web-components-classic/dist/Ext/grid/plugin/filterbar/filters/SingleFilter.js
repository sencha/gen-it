import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_filterbar_filters_Base from '../../../../../Ext/grid/plugin/filterbar/filters/Base.js';

var Ext_grid_plugin_filterbar_filters_SingleFilter = /*#__PURE__*/function (_Ext_grid_plugin_filt) {
  _inheritsLoose(Ext_grid_plugin_filterbar_filters_SingleFilter, _Ext_grid_plugin_filt);

  Ext_grid_plugin_filterbar_filters_SingleFilter.PROPERTIES = function PROPERTIES() {
    return ['active', 'column', 'dataIndex', 'fieldDefaults', 'grid', 'operator', 'operators', 'serializer', 'updateBuffer'];
  };

  Ext_grid_plugin_filterbar_filters_SingleFilter.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_filterbar_filters_SingleFilter.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_filterbar_filters_SingleFilter.PROPERTIES());
    return Ext_grid_plugin_filterbar_filters_Base.getProperties(properties);
  };

  Ext_grid_plugin_filterbar_filters_SingleFilter.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_filterbar_filters_SingleFilter.EVENTS());
    return Ext_grid_plugin_filterbar_filters_Base.getEvents(events);
  };

  function Ext_grid_plugin_filterbar_filters_SingleFilter(properties, events) {
    return _Ext_grid_plugin_filt.call(this, properties.concat(Ext_grid_plugin_filterbar_filters_SingleFilter.PROPERTIES()), events.concat(Ext_grid_plugin_filterbar_filters_SingleFilter.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_filterbar_filters_SingleFilter.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_filt.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_filt.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_filterbar_filters_SingleFilter, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_filt.observedAttributes;
      Ext_grid_plugin_filterbar_filters_SingleFilter.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_filterbar_filters_SingleFilter.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_filterbar_filters_SingleFilter;
}(Ext_grid_plugin_filterbar_filters_Base);

export { Ext_grid_plugin_filterbar_filters_SingleFilter as default };