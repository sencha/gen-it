import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_AddGroup from './Ext/grid/menu/AddGroup.js';
import ElementParser from './common/ElementParser.js';

var EWCGridaddgroupmenuitem = /*#__PURE__*/function (_Ext_grid_menu_AddGro) {
  _inheritsLoose(EWCGridaddgroupmenuitem, _Ext_grid_menu_AddGro);

  function EWCGridaddgroupmenuitem() {
    var _this;

    _this = _Ext_grid_menu_AddGro.call(this, [], []) || this;
    _this.xtype = 'gridaddgroupmenuitem';
    return _this;
  }

  return EWCGridaddgroupmenuitem;
}(Ext_grid_menu_AddGroup);

export { EWCGridaddgroupmenuitem as default };

try {
  if (window.customElements.get('ext-gridaddgroupmenuitem') == undefined) {
    window.customElements.define('ext-gridaddgroupmenuitem', ElementParser.withParsedCallback(EWCGridaddgroupmenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-gridaddgroupmenuitem') == undefined) {
    window.customElements.define('ext-gridaddgroupmenuitem', EWCGridaddgroupmenuitem);
  }
}