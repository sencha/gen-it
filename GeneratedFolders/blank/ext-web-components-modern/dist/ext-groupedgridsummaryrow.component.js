import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_row_Summary from './Ext/grid/row/Summary.js';
import ElementParser from './common/ElementParser.js';

var EWCGroupedgridsummaryrow = /*#__PURE__*/function (_Ext_grid_row_Summary) {
  _inheritsLoose(EWCGroupedgridsummaryrow, _Ext_grid_row_Summary);

  function EWCGroupedgridsummaryrow() {
    var _this;

    _this = _Ext_grid_row_Summary.call(this, [], []) || this;
    _this.xtype = 'groupedgridsummaryrow';
    return _this;
  }

  return EWCGroupedgridsummaryrow;
}(Ext_grid_row_Summary);

export { EWCGroupedgridsummaryrow as default };

try {
  if (window.customElements.get('ext-groupedgridsummaryrow') == undefined) {
    window.customElements.define('ext-groupedgridsummaryrow', ElementParser.withParsedCallback(EWCGroupedgridsummaryrow));
  }
} catch (e) {
  if (window.customElements.get('ext-groupedgridsummaryrow') == undefined) {
    window.customElements.define('ext-groupedgridsummaryrow', EWCGroupedgridsummaryrow);
  }
}