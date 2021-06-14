import Ext_grid_menu_RemoveGroup from './Ext/grid/menu/RemoveGroup.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridremovegroupmenuitem extends Ext_grid_menu_RemoveGroup {
  constructor() {
    super ([], []);
    this.xtype = 'gridremovegroupmenuitem';
  }
}
try {
  if (window.customElements.get('ext-gridremovegroupmenuitem') == undefined) {
    window.customElements.define('ext-gridremovegroupmenuitem', ElementParser.withParsedCallback(EWCGridremovegroupmenuitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridremovegroupmenuitem') == undefined) {
    window.customElements.define('ext-gridremovegroupmenuitem', EWCGridremovegroupmenuitem);
  }
}
