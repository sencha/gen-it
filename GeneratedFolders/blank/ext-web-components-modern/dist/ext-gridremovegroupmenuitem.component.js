import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_RemoveGroup from './Ext/grid/menu/RemoveGroup.js';
import ElementParser from './common/ElementParser.js';

var EWCGridremovegroupmenuitem = /*#__PURE__*/function (_Ext_grid_menu_Remove) {
  _inheritsLoose(EWCGridremovegroupmenuitem, _Ext_grid_menu_Remove);

  function EWCGridremovegroupmenuitem() {
    var _this;

    _this = _Ext_grid_menu_Remove.call(this, [], []) || this;
    _this.xtype = 'gridremovegroupmenuitem';
    return _this;
  }

  return EWCGridremovegroupmenuitem;
}(Ext_grid_menu_RemoveGroup);

export { EWCGridremovegroupmenuitem as default };

try {
  if (window.customElements.get('ext-gridremovegroupmenuitem') == undefined) {
    window.customElements.define('ext-gridremovegroupmenuitem', ElementParser.withParsedCallback(EWCGridremovegroupmenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-gridremovegroupmenuitem') == undefined) {
    window.customElements.define('ext-gridremovegroupmenuitem', EWCGridremovegroupmenuitem);
  }
}