import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_chart_theme_series_Series from '../../../../Ext/chart/theme/series/Series.js';

var Ext_chart_theme_series_Bar = /*#__PURE__*/function (_Ext_chart_theme_seri) {
  _inheritsLoose(Ext_chart_theme_series_Bar, _Ext_chart_theme_seri);

  Ext_chart_theme_series_Bar.PROPERTIES = function PROPERTIES() {
    return ['fillOpacity', 'fillStyle', 'globalAlpha', 'inGroupGapWidth', 'labelOverflowPadding', 'lineCap', 'lineDash', 'lineDashOffset', 'lineJoin', 'lineWidth', 'maxBarWidth', 'minBarWidth', 'minGapWidth', 'miterLimit', 'radius', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'strokeOpacity', 'strokeStyle'];
  };

  Ext_chart_theme_series_Bar.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_chart_theme_series_Bar.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_chart_theme_series_Bar.PROPERTIES());
    return Ext_chart_theme_series_Series.getProperties(properties);
  };

  Ext_chart_theme_series_Bar.getEvents = function getEvents(events) {
    events = events.concat(Ext_chart_theme_series_Bar.EVENTS());
    return Ext_chart_theme_series_Series.getEvents(events);
  };

  function Ext_chart_theme_series_Bar(properties, events) {
    return _Ext_chart_theme_seri.call(this, properties.concat(Ext_chart_theme_series_Bar.PROPERTIES()), events.concat(Ext_chart_theme_series_Bar.EVENTS())) || this;
  }

  var _proto = Ext_chart_theme_series_Bar.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_chart_theme_seri.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_chart_theme_seri.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_chart_theme_series_Bar, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_chart_theme_seri.observedAttributes;
      Ext_chart_theme_series_Bar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_chart_theme_series_Bar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_chart_theme_series_Bar;
}(Ext_chart_theme_series_Series);

export { Ext_chart_theme_series_Bar as default };