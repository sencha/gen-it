import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_row_Group from './Ext/grid/row/Group.js';
import ElementParser from './common/ElementParser.js';

var EWCGridgrouprow = /*#__PURE__*/function (_Ext_grid_row_Group) {
  _inheritsLoose(EWCGridgrouprow, _Ext_grid_row_Group);

  function EWCGridgrouprow() {
    var _this;

    _this = _Ext_grid_row_Group.call(this, [], []) || this;
    _this.xtype = 'gridgrouprow';
    return _this;
  }

  return EWCGridgrouprow;
}(Ext_grid_row_Group);

export { EWCGridgrouprow as default };

try {
  if (window.customElements.get('ext-gridgrouprow') == undefined) {
    window.customElements.define('ext-gridgrouprow', ElementParser.withParsedCallback(EWCGridgrouprow));
  }
} catch (e) {
  if (window.customElements.get('ext-gridgrouprow') == undefined) {
    window.customElements.define('ext-gridgrouprow', EWCGridgrouprow);
  }
}