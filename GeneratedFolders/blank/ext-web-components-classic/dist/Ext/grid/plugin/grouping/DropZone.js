import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dd_DropZone from '../../../../Ext/dd/DropZone.js';

var Ext_grid_plugin_grouping_DropZone = /*#__PURE__*/function (_Ext_dd_DropZone) {
  _inheritsLoose(Ext_grid_plugin_grouping_DropZone, _Ext_dd_DropZone);

  Ext_grid_plugin_grouping_DropZone.PROPERTIES = function PROPERTIES() {
    return ['containerScroll', 'ddGroup', 'dropAllowed', 'dropNotAllowed', 'overClass'];
  };

  Ext_grid_plugin_grouping_DropZone.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_plugin_grouping_DropZone.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_plugin_grouping_DropZone.PROPERTIES());
    return Ext_dd_DropZone.getProperties(properties);
  };

  Ext_grid_plugin_grouping_DropZone.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_plugin_grouping_DropZone.EVENTS());
    return Ext_dd_DropZone.getEvents(events);
  };

  function Ext_grid_plugin_grouping_DropZone(properties, events) {
    return _Ext_dd_DropZone.call(this, properties.concat(Ext_grid_plugin_grouping_DropZone.PROPERTIES()), events.concat(Ext_grid_plugin_grouping_DropZone.EVENTS())) || this;
  }

  var _proto = Ext_grid_plugin_grouping_DropZone.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dd_DropZone.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dd_DropZone.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_plugin_grouping_DropZone, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dd_DropZone.observedAttributes;
      Ext_grid_plugin_grouping_DropZone.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_plugin_grouping_DropZone.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_plugin_grouping_DropZone;
}(Ext_dd_DropZone);

export { Ext_grid_plugin_grouping_DropZone as default };