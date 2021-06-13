import Ext_grid_plugin_grouping_Column from './Ext/grid/plugin/grouping/Column.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGroupingpanelcolumn extends Ext_grid_plugin_grouping_Column {
  constructor() {
    super ([], []);
    this.xtype = 'groupingpanelcolumn';
  }
}
try {
  if (window.customElements.get('ext-groupingpanelcolumn') == undefined) {
    window.customElements.define('ext-groupingpanelcolumn', ElementParser.withParsedCallback(EWCGroupingpanelcolumn));
  }
}
catch(e) {
  if (window.customElements.get('ext-groupingpanelcolumn') == undefined) {
    window.customElements.define('ext-groupingpanelcolumn', EWCGroupingpanelcolumn);
  }
}
