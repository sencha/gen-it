import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_grouping_Column from './Ext/grid/plugin/grouping/Column.js';
import ElementParser from './common/ElementParser.js';

var EWCGroupingpanelcolumn = /*#__PURE__*/function (_Ext_grid_plugin_grou) {
  _inheritsLoose(EWCGroupingpanelcolumn, _Ext_grid_plugin_grou);

  function EWCGroupingpanelcolumn() {
    var _this;

    _this = _Ext_grid_plugin_grou.call(this, [], []) || this;
    _this.xtype = 'groupingpanelcolumn';
    return _this;
  }

  return EWCGroupingpanelcolumn;
}(Ext_grid_plugin_grouping_Column);

export { EWCGroupingpanelcolumn as default };

try {
  if (window.customElements.get('ext-groupingpanelcolumn') == undefined) {
    window.customElements.define('ext-groupingpanelcolumn', ElementParser.withParsedCallback(EWCGroupingpanelcolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-groupingpanelcolumn') == undefined) {
    window.customElements.define('ext-groupingpanelcolumn', EWCGroupingpanelcolumn);
  }
}