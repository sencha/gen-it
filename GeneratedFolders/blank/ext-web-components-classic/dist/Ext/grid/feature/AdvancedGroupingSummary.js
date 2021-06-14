import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_feature_AdvancedGrouping from '../../../Ext/grid/feature/AdvancedGrouping.js';

var Ext_grid_feature_AdvancedGroupingSummary = /*#__PURE__*/function (_Ext_grid_feature_Adv) {
  _inheritsLoose(Ext_grid_feature_AdvancedGroupingSummary, _Ext_grid_feature_Adv);

  Ext_grid_feature_AdvancedGroupingSummary.PROPERTIES = function PROPERTIES() {
    return ['addToGroupingText', 'collapseAllText', 'dock', 'enableGroupingMenu', 'expandAllText', 'groupByText', 'groupHeaderTpl', 'groupsColumnWidth', 'groupsText', 'groupSummaryPosition', 'groupSummaryTpl', 'listeners', 'removeFromGroupingText', 'startCollapsed', 'startGroupedHeadersHidden', 'summaryPosition', 'summaryTpl'];
  };

  Ext_grid_feature_AdvancedGroupingSummary.EVENTS = function EVENTS() {
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

  Ext_grid_feature_AdvancedGroupingSummary.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_feature_AdvancedGroupingSummary.PROPERTIES());
    return Ext_grid_feature_AdvancedGrouping.getProperties(properties);
  };

  Ext_grid_feature_AdvancedGroupingSummary.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_feature_AdvancedGroupingSummary.EVENTS());
    return Ext_grid_feature_AdvancedGrouping.getEvents(events);
  };

  function Ext_grid_feature_AdvancedGroupingSummary(properties, events) {
    return _Ext_grid_feature_Adv.call(this, properties.concat(Ext_grid_feature_AdvancedGroupingSummary.PROPERTIES()), events.concat(Ext_grid_feature_AdvancedGroupingSummary.EVENTS())) || this;
  }

  var _proto = Ext_grid_feature_AdvancedGroupingSummary.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_feature_Adv.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_feature_Adv.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_grid_feature_AdvancedGroupingSummary, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_feature_Adv.observedAttributes;
      Ext_grid_feature_AdvancedGroupingSummary.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_feature_AdvancedGroupingSummary.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_grid_feature_AdvancedGroupingSummary;
}(Ext_grid_feature_AdvancedGrouping);

export { Ext_grid_feature_AdvancedGroupingSummary as default };