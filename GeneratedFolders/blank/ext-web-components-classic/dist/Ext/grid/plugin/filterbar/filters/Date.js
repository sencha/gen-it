import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_filterbar_filters_SingleFilter from '../../../../../Ext/grid/plugin/filterbar/filters/SingleFilter.js';

var Ext_grid_plugin_filterbar_filters_Date = /*#__PURE__*/function (_Ext_grid_plugin_filt) {
  _inheritsLoose(Ext_grid_plugin_filterbar_filters_Date, _Ext_grid_plugin_filt);

  Ext_grid_plugin_filterbar_filters_Date.PROPERTIES = function PROPERTIES() {
    return ['active', 'column', 'dataIndex', 'fieldDefaults', 'grid', 'operator', 'operators', 'serializer', 'updateBuffer'];
  };

  Ext_grid_plugin_filterbar_filters_Date.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_filterbar_filters_Date.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_filterbar_filters_Date.PROPERTIES());
    return Ext_grid_plugin_filterbar_filters_SingleFilter.getProperties(properties);
  };

  Ext_grid_plugin_filterbar_filters_Date.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_filterbar_filters_Date.EVENTS());
    return Ext_grid_plugin_filterbar_filters_SingleFilter.getEvents(events);
  };

  function Ext_grid_plugin_filterbar_filters_Date(properties, events) {
    return _Ext_grid_plugin_filt.call(this, properties.concat(Ext_grid_plugin_filterbar_filters_Date.PROPERTIES()), events.concat(Ext_grid_plugin_filterbar_filters_Date.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_filterbar_filters_Date.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_filt.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_filt.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_filterbar_filters_Date, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_filt.observedAttributes;
      Ext_grid_plugin_filterbar_filters_Date.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_filterbar_filters_Date.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_filterbar_filters_Date;
}(Ext_grid_plugin_filterbar_filters_SingleFilter);

export { Ext_grid_plugin_filterbar_filters_Date as default };