import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_filterbar_filters_List from '../../../../../Ext/grid/plugin/filterbar/filters/List.js';

var Ext_grid_plugin_filterbar_filters_InList = /*#__PURE__*/function (_Ext_grid_plugin_filt) {
  _inheritsLoose(Ext_grid_plugin_filterbar_filters_InList, _Ext_grid_plugin_filt);

  Ext_grid_plugin_filterbar_filters_InList.PROPERTIES = function PROPERTIES() {
    return ['active', 'column', 'dataIndex', 'fieldDefaults', 'grid', 'operator', 'operators', 'options', 'serializer', 'updateBuffer'];
  };

  Ext_grid_plugin_filterbar_filters_InList.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_filterbar_filters_InList.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_filterbar_filters_InList.PROPERTIES());
    return Ext_grid_plugin_filterbar_filters_List.getProperties(properties);
  };

  Ext_grid_plugin_filterbar_filters_InList.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_filterbar_filters_InList.EVENTS());
    return Ext_grid_plugin_filterbar_filters_List.getEvents(events);
  };

  function Ext_grid_plugin_filterbar_filters_InList(properties, events) {
    return _Ext_grid_plugin_filt.call(this, properties.concat(Ext_grid_plugin_filterbar_filters_InList.PROPERTIES()), events.concat(Ext_grid_plugin_filterbar_filters_InList.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_filterbar_filters_InList.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_plugin_filt.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_plugin_filt.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_filterbar_filters_InList, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_plugin_filt.observedAttributes;
      Ext_grid_plugin_filterbar_filters_InList.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_filterbar_filters_InList.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_filterbar_filters_InList;
}(Ext_grid_plugin_filterbar_filters_List);

export { Ext_grid_plugin_filterbar_filters_InList as default };