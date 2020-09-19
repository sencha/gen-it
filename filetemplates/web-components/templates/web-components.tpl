import {classname} from '{folder}.js';
import ElementParser from './common/ElementParser.js';

export default class EWC{Xtype} extends {classname} {
  constructor() {
    super ([], []);
    this.xtype = '{xtype}';
  }
}
try {
  if (window.customElements.get('ext-{xtype}') == undefined) {
    window.customElements.define('ext-{xtype}', ElementParser.withParsedCallback(EWC{Xtype}));
  }
}
catch(e) {
  if (window.customElements.get('ext-{xtype}') == undefined) {
    window.customElements.define('ext-{xtype}', EWC{Xtype});
  }
}
{ElementCell}