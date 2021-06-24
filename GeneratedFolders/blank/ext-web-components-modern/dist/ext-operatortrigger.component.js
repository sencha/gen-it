import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_trigger_Operator from './Ext/field/trigger/Operator.js';
import ElementParser from './common/ElementParser.js';

var EWCOperatortrigger = /*#__PURE__*/function (_Ext_field_trigger_Op) {
  _inheritsLoose(EWCOperatortrigger, _Ext_field_trigger_Op);

  function EWCOperatortrigger() {
    var _this;

    _this = _Ext_field_trigger_Op.call(this, [], []) || this;
    _this.xtype = 'operatortrigger';
    return _this;
  }

  return EWCOperatortrigger;
}(Ext_field_trigger_Operator);

export { EWCOperatortrigger as default };

try {
  if (window.customElements.get('ext-operatortrigger') == undefined) {
    window.customElements.define('ext-operatortrigger', ElementParser.withParsedCallback(EWCOperatortrigger));
  }
} catch (e) {
  if (window.customElements.get('ext-operatortrigger') == undefined) {
    window.customElements.define('ext-operatortrigger', EWCOperatortrigger);
  }
}