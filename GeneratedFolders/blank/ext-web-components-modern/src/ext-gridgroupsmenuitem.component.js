import Ext_grid_menu_Groups from './Ext/grid/menu/Groups.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGridgroupsmenuitem extends Ext_grid_menu_Groups {
  constructor() {
    super ([], []);
    this.xtype = 'gridgroupsmenuitem';
  }
}
try {
  if (window.customElements.get('ext-gridgroupsmenuitem') == undefined) {
    window.customElements.define('ext-gridgroupsmenuitem', ElementParser.withParsedCallback(EWCGridgroupsmenuitem));
  }
}
catch(e) {
  if (window.customElements.get('ext-gridgroupsmenuitem') == undefined) {
    window.customElements.define('ext-gridgroupsmenuitem', EWCGridgroupsmenuitem);
  }
}
