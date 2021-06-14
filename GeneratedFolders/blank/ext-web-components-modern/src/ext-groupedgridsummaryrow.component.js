import Ext_grid_row_Summary from './Ext/grid/row/Summary.js';
import ElementParser from './common/ElementParser.js';

export default class EWCGroupedgridsummaryrow extends Ext_grid_row_Summary {
  constructor() {
    super ([], []);
    this.xtype = 'groupedgridsummaryrow';
  }
}
try {
  if (window.customElements.get('ext-groupedgridsummaryrow') == undefined) {
    window.customElements.define('ext-groupedgridsummaryrow', ElementParser.withParsedCallback(EWCGroupedgridsummaryrow));
  }
}
catch(e) {
  if (window.customElements.get('ext-groupedgridsummaryrow') == undefined) {
    window.customElements.define('ext-groupedgridsummaryrow', EWCGroupedgridsummaryrow);
  }
}
