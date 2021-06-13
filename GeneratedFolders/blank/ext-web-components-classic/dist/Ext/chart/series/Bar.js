import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_series_StackedCartesian from '../../../Ext/chart/series/StackedCartesian.js';

var Ext_chart_series_Bar = /*#__PURE__*/function (_Ext_chart_series_Sta) {
  _inheritsLoose(Ext_chart_series_Bar, _Ext_chart_series_Sta);

  Ext_chart_series_Bar.PROPERTIES = function PROPERTIES() {
    return ['animation', 'background', 'bind', 'chart', 'colors', 'controller', 'defaultListenerScope', 'fullStack', 'fullStackTotal', 'hidden', 'highlight', 'highlightCfg', 'itemInstancing', 'label', 'labelOverflowPadding', 'listeners', 'marker', 'markerSubStyle', 'nameable', 'overlaySurface', 'publishes', 'reference', 'renderer', 'session', 'shareableName', 'showInLegend', 'showMarkers', 'splitStacks', 'stacked', 'store', 'style', 'subStyle', 'surface', 'theme', 'themeStyle', 'title', 'tooltip', 'triggerAfterDraw', 'twoWayBindable', 'useDarkerStrokeColor', 'viewModel', 'xAxis', 'xField', 'yAxis', 'yField'];
  };

  Ext_chart_series_Bar.EVENTS = function EVENTS() {
    return [{
      name: 'chartattached',
      parameters: 'chart,series'
    }, {
      name: 'chartdetached',
      parameters: 'chart,series'
    }, {
      name: 'itemclick',
      parameters: 'series,item,event'
    }, {
      name: 'itemdblclick',
      parameters: 'series,item,event'
    }, {
      name: 'itemmousedown',
      parameters: 'series,item,event'
    }, {
      name: 'itemmousemove',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseout',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseover',
      parameters: 'series,item,event'
    }, {
      name: 'itemmouseup',
      parameters: 'series,item,event'
    }, {
      name: 'itemtap',
      parameters: 'series,item,event'
    }, {
      name: 'storechange',
      parameters: 'series,newStore,oldStore'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_series_Bar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_series_Bar.PROPERTIES());
    return Ext_chart_series_StackedCartesian.getProperties(properties);
  };

  Ext_chart_series_Bar.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_series_Bar.EVENTS());
    return Ext_chart_series_StackedCartesian.getEvents(events);
  };

  function Ext_chart_series_Bar(properties, events) {
    return _Ext_chart_series_Sta.call(this, properties.concat(Ext_chart_series_Bar.PROPERTIES()), events.concat(Ext_chart_series_Bar.EVENTS())) || this;
  }

  var _proto = Ext_chart_series_Bar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_series_Sta.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_series_Sta.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_chart_series_Bar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_series_Sta.observedAttributes;
      Ext_chart_series_Bar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_series_Bar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_chart_series_Bar;
}(Ext_chart_series_StackedCartesian);

export { Ext_chart_series_Bar as default };