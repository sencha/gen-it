import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_AdvancedGroupStore from '../../../Ext/grid/AdvancedGroupStore.js';

var Ext_grid_feature_AdvancedGroupStore = /*#__PURE__*/function (_Ext_grid_AdvancedGro) {
  _inheritsLoose(Ext_grid_feature_AdvancedGroupStore, _Ext_grid_AdvancedGro);

  Ext_grid_feature_AdvancedGroupStore.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_grid_feature_AdvancedGroupStore.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_feature_AdvancedGroupStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_AdvancedGroupStore.PROPERTIES());
    return Ext_grid_AdvancedGroupStore.getProperties(properties);
  };

  Ext_grid_feature_AdvancedGroupStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_AdvancedGroupStore.EVENTS());
    return Ext_grid_AdvancedGroupStore.getEvents(events);
  };

  function Ext_grid_feature_AdvancedGroupStore(properties, events) {
    return _Ext_grid_AdvancedGro.call(this, properties.concat(Ext_grid_feature_AdvancedGroupStore.PROPERTIES()), events.concat(Ext_grid_feature_AdvancedGroupStore.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_AdvancedGroupStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_AdvancedGro.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_AdvancedGro.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_feature_AdvancedGroupStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_AdvancedGro.observedAttributes;
      Ext_grid_feature_AdvancedGroupStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_AdvancedGroupStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_feature_AdvancedGroupStore;
}(Ext_grid_AdvancedGroupStore);

export { Ext_grid_feature_AdvancedGroupStore as default };