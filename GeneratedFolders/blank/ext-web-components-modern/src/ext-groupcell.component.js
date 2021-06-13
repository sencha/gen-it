import Ext_grid_cell_Group from './Ext/grid/cell/Group.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGroupcell extends Ext_grid_cell_Group {
  constructor() {
    super ([], []);
    this.xtype = 'groupcell';
  }
}
try {
  if (window.customElements.get('ext-groupcell') == undefined) {
    window.customElements.define('ext-groupcell', ElementParser.withParsedCallback(EWCGroupcell));
  }
}
catch(e) {
  if (window.customElements.get('ext-groupcell') == undefined) {
    window.customElements.define('ext-groupcell', EWCGroupcell);
  }
}
