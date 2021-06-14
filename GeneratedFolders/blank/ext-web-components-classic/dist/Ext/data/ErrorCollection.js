import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_MixedCollection from '../../Ext/util/MixedCollection.js';

var Ext_data_ErrorCollection = /*#__PURE__*/function (_Ext_util_MixedCollec) {
  _inheritsLoose(Ext_data_ErrorCollection, _Ext_util_MixedCollec);

  Ext_data_ErrorCollection.PROPERTIES = function PROPERTIES() {
    return ['allowFunctions', 'defaultSortDirection', 'listeners', 'multiSortLimit', 'sorters', 'sortRoot'];
  };

  Ext_data_ErrorCollection.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'index,o,key'
    }, {
      name: 'beforesort',
      parameters: 'me,sorters'
    }, {
      name: 'clear',
      parameters: ''
    }, {
      name: 'remove',
      parameters: 'o,key'
    }, {
      name: 'replace',
      parameters: 'key,old,new'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_ErrorCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_ErrorCollection.PROPERTIES());
    return Ext_util_MixedCollection.getProperties(properties);
  };

  Ext_data_ErrorCollection.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_ErrorCollection.EVENTS());
    return Ext_util_MixedCollection.getEvents(events);
  };

  function Ext_data_ErrorCollection(properties, events) {
    return _Ext_util_MixedCollec.call(this, properties.concat(Ext_data_ErrorCollection.PROPERTIES()), events.concat(Ext_data_ErrorCollection.EVENTS())) || this;
  }

  var _proto = Ext_data_ErrorCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_MixedCollec.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_MixedCollec.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_data_ErrorCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_MixedCollec.observedAttributes;
      Ext_data_ErrorCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_ErrorCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_data_ErrorCollection;
}(Ext_util_MixedCollection);

export { Ext_data_ErrorCollection as default };