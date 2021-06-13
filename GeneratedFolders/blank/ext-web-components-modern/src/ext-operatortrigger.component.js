import Ext_field_trigger_Operator from './Ext/field/trigger/Operator.js';
import ElementParser from './common/ElementParser.js';

export default class EWCOperatortrigger extends Ext_field_trigger_Operator {
  constructor() {
    super ([], []);
    this.xtype = 'operatortrigger';
  }
}
try {
  if (window.customElements.get('ext-operatortrigger') == undefined) {
    window.customElements.define('ext-operatortrigger', ElementParser.withParsedCallback(EWCOperatortrigger));
  }
}
catch(e) {
  if (window.customElements.get('ext-operatortrigger') == undefined) {
    window.customElements.define('ext-operatortrigger', EWCOperatortrigger);
  }
}
