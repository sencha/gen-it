import Ext_grid_column_Groups from './Ext/grid/column/Groups.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGroupscolumn extends Ext_grid_column_Groups {
  constructor() {
    super ([], []);
    this.xtype = 'groupscolumn';
  }
}
try {
  if (window.customElements.get('ext-groupscolumn') == undefined) {
    window.customElements.define('ext-groupscolumn', ElementParser.withParsedCallback(EWCGroupscolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-groupscolumn') == undefined) {
    window.customElements.define('ext-groupscolumn', EWCGroupscolumn);
  }
}
