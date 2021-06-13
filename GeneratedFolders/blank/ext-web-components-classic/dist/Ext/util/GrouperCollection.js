import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_util_SorterCollection from '../../Ext/util/SorterCollection.js';

var Ext_util_GrouperCollection = /*#__PURE__*/function (_Ext_util_SorterColle) {
  _inheritsLoose(Ext_util_GrouperCollection, _Ext_util_SorterColle);

  Ext_util_GrouperCollection.PROPERTIES = function PROPERTIES() {
    return ['applySorterOptionsFn', 'applySorterOptionsScope', 'autoGroup', 'autoSort', 'decoder', 'defaultSortDirection', 'extraKeys', 'filters', 'groupConfig', 'grouper', 'groupers', 'groups', 'keyFn', 'listeners', 'multiSortLimit', 'rootProperty', 'sorters', 'source', 'trackGroups'];
  };

  Ext_util_GrouperCollection.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'collection,details'
    }, {
      name: 'beforeitemchange',
      parameters: 'collection,details'
    }, {
      name: 'beforesort',
      parameters: 'collection,sorters'
    }, {
      name: 'beginupdate',
      parameters: 'collection'
    }, {
      name: 'endupdate',
      parameters: 'collection'
    }, {
      name: 'itemchange',
      parameters: 'collection,details'
    }, {
      name: 'refresh',
      parameters: 'collection'
    }, {
      name: 'remove',
      parameters: 'collection,details'
    }, {
      name: 'sort',
      parameters: 'collection'
    }, {
      name: 'updatekey',
      parameters: 'collection,details'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_util_GrouperCollection.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_util_GrouperCollection.PROPERTIES());
    return Ext_util_SorterCollection.getProperties(properties);
  };

  Ext_util_GrouperCollection.getEvents = function getEvents(events) {
    events = events.concat(Ext_util_GrouperCollection.EVENTS());
    return Ext_util_SorterCollection.getEvents(events);
  };

  function Ext_util_GrouperCollection(properties, events) {
    return _Ext_util_SorterColle.call(this, properties.concat(Ext_util_GrouperCollection.PROPERTIES()), events.concat(Ext_util_GrouperCollection.EVENTS())) || this;
  }

  var _proto = Ext_util_GrouperCollection.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_util_SorterColle.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_util_SorterColle.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_util_GrouperCollection, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_util_SorterColle.observedAttributes;
      Ext_util_GrouperCollection.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_util_GrouperCollection.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_util_GrouperCollection;
}(Ext_util_SorterCollection);

export { Ext_util_GrouperCollection as default };