import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_Observable from '../../Ext/util/Observable.js';

var Ext_grid_AdvancedGroupStore = /*#__PURE__*/function (_Ext_util_Observable) {
  _inheritsLoose(Ext_grid_AdvancedGroupStore, _Ext_util_Observable);

  Ext_grid_AdvancedGroupStore.PROPERTIES = function PROPERTIES() {
    return ['listeners'];
  };

  Ext_grid_AdvancedGroupStore.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_AdvancedGroupStore.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_AdvancedGroupStore.PROPERTIES());
    return Ext_util_Observable.getProperties(properties);
  };

  Ext_grid_AdvancedGroupStore.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_AdvancedGroupStore.EVENTS());
    return Ext_util_Observable.getEvents(events);
  };

  function Ext_grid_AdvancedGroupStore(properties, events) {
    return _Ext_util_Observable.call(this, properties.concat(Ext_grid_AdvancedGroupStore.PROPERTIES()), events.concat(Ext_grid_AdvancedGroupStore.EVENTS())) || this;
  }

  var _proto = Ext_grid_AdvancedGroupStore.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_Observable.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_Observable.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_AdvancedGroupStore, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_Observable.observedAttributes;
      Ext_grid_AdvancedGroupStore.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_AdvancedGroupStore.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_AdvancedGroupStore;
}(Ext_util_Observable);

export { Ext_grid_AdvancedGroupStore as default };