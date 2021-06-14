import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_exporter_file_ooxml_Base from '../../../../../Ext/exporter/file/ooxml/Base.js';

var Ext_exporter_file_ooxml_excel_Location = /*#__PURE__*/function (_Ext_exporter_file_oo) {
  _inheritsLoose(Ext_exporter_file_ooxml_excel_Location, _Ext_exporter_file_oo);

  Ext_exporter_file_ooxml_excel_Location.PROPERTIES = function PROPERTIES() {
    return ['autoGenerateId', 'autoGenerateKey', 'colPageCount', 'firstDataCol', 'firstDataRow', 'firstHeaderRow', 'generateTplAttributes', 'id', 'idPrefix', 'ref', 'rowPageCount', 'tplAttributes', 'tplNonAttributes'];
  };

  Ext_exporter_file_ooxml_excel_Location.EVENTS = function EVENTS() {
    return [{
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_exporter_file_ooxml_excel_Location.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_exporter_file_ooxml_excel_Location.PROPERTIES());
    return Ext_exporter_file_ooxml_Base.getProperties(properties);
  };

  Ext_exporter_file_ooxml_excel_Location.getEvents = function getEvents(events) {
    events = events.concat(Ext_exporter_file_ooxml_excel_Location.EVENTS());
    return Ext_exporter_file_ooxml_Base.getEvents(events);
  };

  function Ext_exporter_file_ooxml_excel_Location(properties, events) {
    return _Ext_exporter_file_oo.call(this, properties.concat(Ext_exporter_file_ooxml_excel_Location.PROPERTIES()), events.concat(Ext_exporter_file_ooxml_excel_Location.EVENTS())) || this;
  }

  var _proto = Ext_exporter_file_ooxml_excel_Location.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_exporter_file_oo.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_exporter_file_oo.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  _createClass(Ext_exporter_file_ooxml_excel_Location, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_exporter_file_oo.observedAttributes;
      Ext_exporter_file_ooxml_excel_Location.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_exporter_file_ooxml_excel_Location.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  return Ext_exporter_file_ooxml_excel_Location;
}(Ext_exporter_file_ooxml_Base);

export { Ext_exporter_file_ooxml_excel_Location as default };