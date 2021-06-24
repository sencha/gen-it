import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_plugin_grouping_Panel from './Ext/grid/plugin/grouping/Panel.js';
import ElementParser from './common/ElementParser.js';

var EWCGroupingpanel = /*#__PURE__*/function (_Ext_grid_plugin_grou) {
  _inheritsLoose(EWCGroupingpanel, _Ext_grid_plugin_grou);

  function EWCGroupingpanel() {
    var _this;

    _this = _Ext_grid_plugin_grou.call(this, [], []) || this;
    _this.xtype = 'groupingpanel';
    return _this;
  }

  return EWCGroupingpanel;
}(Ext_grid_plugin_grouping_Panel);

export { EWCGroupingpanel as default };

try {
  if (window.customElements.get('ext-groupingpanel') == undefined) {
    window.customElements.define('ext-groupingpanel', ElementParser.withParsedCallback(EWCGroupingpanel));
  }
} catch (e) {
  if (window.customElements.get('ext-groupingpanel') == undefined) {
    window.customElements.define('ext-groupingpanel', EWCGroupingpanel);
  }
}