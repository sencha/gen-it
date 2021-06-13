import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_data_ProxyStore from '../../../Ext/data/ProxyStore.js';

var Ext_data_virtual_Store = /*#__PURE__*/function (_Ext_data_ProxyStore) {
  _inheritsLoose(Ext_data_virtual_Store, _Ext_data_ProxyStore);

  Ext_data_virtual_Store.PROPERTIES = function PROPERTIES() {
    return ['asynchronousLoad', 'autoDestroy', 'autoLoad', 'autoSort', 'autoSync', 'batchUpdateMode', 'fields', 'filters', 'groupDir', 'grouper', 'groupers', 'groupField', 'leadingBufferZone', 'listeners', 'model', 'pageSize', 'proxy', 'reloadOnClearSorters', 'remoteFilter', 'remoteSort', 'remoteSummary', 'sorters', 'sortOnLoad', 'statefulFilters', 'storeId', 'trackRemoved', 'trailingBufferZone'];
  };

  Ext_data_virtual_Store.EVENTS = function EVENTS() {
    return [{
      name: 'add',
      parameters: 'store,records,index'
    }, {
      name: 'beforeload',
      parameters: 'store,operation'
    }, {
      name: 'beforesort',
      parameters: 'store,sorters'
    }, {
      name: 'beforesync',
      parameters: 'options'
    }, {
      name: 'beginupdate',
      parameters: ''
    }, {
      name: 'clear',
      parameters: 'sender'
    }, {
      name: 'datachanged',
      parameters: 'sender'
    }, {
      name: 'endupdate',
      parameters: ''
    }, {
      name: 'load',
      parameters: 'sender,records,successful,operation'
    }, {
      name: 'metachange',
      parameters: 'sender,meta'
    }, {
      name: 'refresh',
      parameters: 'sender'
    }, {
      name: 'remove',
      parameters: 'store,records,index,isMove'
    }, {
      name: 'sort',
      parameters: 'store'
    }, {
      name: 'update',
      parameters: 'sender,record,operation,modifiedFieldNames,details'
    }, {
      name: 'write',
      parameters: 'store,operation'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_data_virtual_Store.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_data_virtual_Store.PROPERTIES());
    return Ext_data_ProxyStore.getProperties(properties);
  };

  Ext_data_virtual_Store.getEvents = function getEvents(events) {
    events = events.concat(Ext_data_virtual_Store.EVENTS());
    return Ext_data_ProxyStore.getEvents(events);
  };

  function Ext_data_virtual_Store(properties, events) {
    return _Ext_data_ProxyStore.call(this, properties.concat(Ext_data_virtual_Store.PROPERTIES()), events.concat(Ext_data_virtual_Store.EVENTS())) || this;
  }

  var _proto = Ext_data_virtual_Store.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_data_ProxyStore.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_data_ProxyStore.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_data_virtual_Store, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_data_ProxyStore.observedAttributes;
      Ext_data_virtual_Store.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_data_virtual_Store.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_data_virtual_Store;
}(Ext_data_ProxyStore);

export { Ext_data_virtual_Store as default };