import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_cell_Group from './Ext/grid/cell/Group.js';
import ElementParser from './common/ElementParser.js';

var EWCGroupcell = /*#__PURE__*/function (_Ext_grid_cell_Group) {
  _inheritsLoose(EWCGroupcell, _Ext_grid_cell_Group);

  function EWCGroupcell() {
    var _this;

    _this = _Ext_grid_cell_Group.call(this, [], []) || this;
    _this.xtype = 'groupcell';
    return _this;
  }

  return EWCGroupcell;
}(Ext_grid_cell_Group);

export { EWCGroupcell as default };

try {
  if (window.customElements.get('ext-groupcell') == undefined) {
    window.customElements.define('ext-groupcell', ElementParser.withParsedCallback(EWCGroupcell));
  }
} catch (e) {
  if (window.customElements.get('ext-groupcell') == undefined) {
    window.customElements.define('ext-groupcell', EWCGroupcell);
  }
}