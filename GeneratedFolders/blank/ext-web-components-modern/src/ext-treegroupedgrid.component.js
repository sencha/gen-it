import Ext_grid_TreeGrouped from './Ext/grid/TreeGrouped.js';
import ElementParser from './common/ElementParser.js';

export default class EWCTreegroupedgrid extends Ext_grid_TreeGrouped {
  constructor() {
    super ([], []);
    this.xtype = 'treegroupedgrid';
  }
}
try {
  if (window.customElements.get('ext-treegroupedgrid') == undefined) {
    window.customElements.define('ext-treegroupedgrid', ElementParser.withParsedCallback(EWCTreegroupedgrid));
  }
}
catch(e) {
  if (window.customElements.get('ext-treegroupedgrid') == undefined) {
    window.customElements.define('ext-treegroupedgrid', EWCTreegroupedgrid);
  }
}
