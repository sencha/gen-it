import Ext_grid_plugin_grouping_Panel from './Ext/grid/plugin/grouping/Panel.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGroupingpanel extends Ext_grid_plugin_grouping_Panel {
  constructor() {
    super ([], []);
    this.xtype = 'groupingpanel';
  }
}
try {
  if (window.customElements.get('ext-groupingpanel') == undefined) {
    window.customElements.define('ext-groupingpanel', ElementParser.withParsedCallback(EWCGroupingpanel));
  }
}
catch(e) {
  if (window.customElements.get('ext-groupingpanel') == undefined) {
    window.customElements.define('ext-groupingpanel', EWCGroupingpanel);
  }
}
