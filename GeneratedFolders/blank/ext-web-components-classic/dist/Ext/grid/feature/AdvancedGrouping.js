import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_feature_Feature from '../../../Ext/grid/feature/Feature.js';

var Ext_grid_feature_AdvancedGrouping = /*#__PURE__*/function (_Ext_grid_feature_Fea) {
  _inheritsLoose(Ext_grid_feature_AdvancedGrouping, _Ext_grid_feature_Fea);

  Ext_grid_feature_AdvancedGrouping.PROPERTIES = function PROPERTIES() {
    return ['addToGroupingText', 'collapseAllText', 'enableGroupingMenu', 'expandAllText', 'groupByText', 'groupHeaderTpl', 'groupsColumnWidth', 'groupsText', 'groupSummaryPosition', 'groupSummaryTpl', 'listeners', 'removeFromGroupingText', 'startCollapsed', 'startGroupedHeadersHidden', 'summaryPosition', 'summaryTpl'];
  };

  Ext_grid_feature_AdvancedGrouping.EVENTS = function EVENTS() {
    return [{
      name: 'aftergroupschange',
      parameters: 'grid,groupers,e'
    }, {
      name: 'beforegroupschange',
      parameters: 'grid,groupers,e'
    }, {
      name: 'groupclick',
      parameters: 'grid,params,e'
    }, {
      name: 'groupcollapse',
      parameters: 'grid,params,e'
    }, {
      name: 'groupcontextmenu',
      parameters: 'grid,params,e'
    }, {
      name: 'groupexpand',
      parameters: 'grid,params,e'
    }, {
      name: 'groupsummaryclick',
      parameters: 'grid,params,e'
    }, {
      name: 'groupsummarycontextmenu',
      parameters: 'grid,params,e'
    }, {
      name: 'summaryclick',
      parameters: 'grid,params,e'
    }, {
      name: 'summarycontextmenu',
      parameters: 'grid,params,e'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_grid_feature_AdvancedGrouping.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_AdvancedGrouping.PROPERTIES());
    return Ext_grid_feature_Feature.getProperties(properties);
  };

  Ext_grid_feature_AdvancedGrouping.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_AdvancedGrouping.EVENTS());
    return Ext_grid_feature_Feature.getEvents(events);
  };

  function Ext_grid_feature_AdvancedGrouping(properties, events) {
    return _Ext_grid_feature_Fea.call(this, properties.concat(Ext_grid_feature_AdvancedGrouping.PROPERTIES()), events.concat(Ext_grid_feature_AdvancedGrouping.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_AdvancedGrouping.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_feature_Fea.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_feature_Fea.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_feature_AdvancedGrouping, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_feature_Fea.observedAttributes;
      Ext_grid_feature_AdvancedGrouping.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_AdvancedGrouping.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_feature_AdvancedGrouping;
}(Ext_grid_feature_Feature);

export { Ext_grid_feature_AdvancedGrouping as default };