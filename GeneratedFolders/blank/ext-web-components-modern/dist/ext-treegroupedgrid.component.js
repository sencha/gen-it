import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_TreeGrouped from './Ext/grid/TreeGrouped.js';
import ElementParser from './common/ElementParser.js';

var EWCTreegroupedgrid = /*#__PURE__*/function (_Ext_grid_TreeGrouped) {
  _inheritsLoose(EWCTreegroupedgrid, _Ext_grid_TreeGrouped);

  function EWCTreegroupedgrid() {
    var _this;

    _this = _Ext_grid_TreeGrouped.call(this, [], []) || this;
    _this.xtype = 'treegroupedgrid';
    return _this;
  }

  return EWCTreegroupedgrid;
}(Ext_grid_TreeGrouped);

export { EWCTreegroupedgrid as default };

try {
  if (window.customElements.get('ext-treegroupedgrid') == undefined) {
    window.customElements.define('ext-treegroupedgrid', ElementParser.withParsedCallback(EWCTreegroupedgrid));
  }
} catch (e) {
  if (window.customElements.get('ext-treegroupedgrid') == undefined) {
    window.customElements.define('ext-treegroupedgrid', EWCTreegroupedgrid);
  }
}