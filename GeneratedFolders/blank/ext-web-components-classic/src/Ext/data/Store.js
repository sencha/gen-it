import Ext_data_ProxyStore from '../../Ext/data/ProxyStore.js';

export default class Ext_data_Store extends Ext_data_ProxyStore {
  static PROPERTIES() { return [
    'associatedEntity',
    'asynchronousLoad',
    'autoDestroy',
    'autoLoad',
    'autoSort',
    'autoSync',
    'batchUpdateMode',
    'clearOnPageLoad',
    'clearRemovedOnLoad',
    'data',
    'fields',
    'filters',
    'groupDir',
    'grouper',
    'groupers',
    'groupField',
    'listeners',
    'model',
    'pageSize',
    'proxy',
    'reloadOnClearSorters',
    'remoteFilter',
    'remoteSort',
    'remoteSummary',
    'role',
    'session',
    'sorters',
    'sortOnLoad',
    'statefulFilters',
    'storeId',
    'trackRemoved',
  ]};
  static EVENTS() { return [
    {name:'add', parameters:'store,records,index'},
    {name:'beforeload', parameters:'store,operation'},
    {name:'beforeprefetch', parameters:'sender,operation'},
    {name:'beforesort', parameters:'store,sorters'},
    {name:'beforesync', parameters:'options'},
    {name:'beginupdate', parameters:''},
    {name:'clear', parameters:'sender'},
    {name:'commit', parameters:'store'},
    {name:'datachanged', parameters:'sender'},
    {name:'endupdate', parameters:''},
    {name:'filterchange', parameters:'store,filters'},
    {name:'groupchange', parameters:'store,grouper'},
    {name:'groupschange', parameters:'store,groupers'},
    {name:'load', parameters:'sender,records,successful,operation'},
    {name:'metachange', parameters:'sender,meta'},
    {name:'prefetch', parameters:'sender,records,successful,operation'},
    {name:'refresh', parameters:'sender'},
    {name:'reject', parameters:'store'},
    {name:'remove', parameters:'store,records,index,isMove'},
    {name:'sort', parameters:'store'},
    {name:'update', parameters:'sender,record,operation,modifiedFieldNames,details'},
    {name:'write', parameters:'store,operation'},
    {name:'ready', parameters:'cmp,cmpObj'},
    {name:'created', parameters:'cmp'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_data_Store.PROPERTIES());
    return Ext_data_ProxyStore.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_data_Store.EVENTS());
    return Ext_data_ProxyStore.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_data_Store.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_data_Store.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_data_Store.PROPERTIES()),
      events.concat(Ext_data_Store.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}