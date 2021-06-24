import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_menu_Groups from './Ext/grid/menu/Groups.js';
import ElementParser from './common/ElementParser.js';

var EWCGridgroupsmenuitem = /*#__PURE__*/function (_Ext_grid_menu_Groups) {
  _inheritsLoose(EWCGridgroupsmenuitem, _Ext_grid_menu_Groups);

  function EWCGridgroupsmenuitem() {
    var _this;

    _this = _Ext_grid_menu_Groups.call(this, [], []) || this;
    _this.xtype = 'gridgroupsmenuitem';
    return _this;
  }

  return EWCGridgroupsmenuitem;
}(Ext_grid_menu_Groups);

export { EWCGridgroupsmenuitem as default };

try {
  if (window.customElements.get('ext-gridgroupsmenuitem') == undefined) {
    window.customElements.define('ext-gridgroupsmenuitem', ElementParser.withParsedCallback(EWCGridgroupsmenuitem));
  }
} catch (e) {
  if (window.customElements.get('ext-gridgroupsmenuitem') == undefined) {
    window.customElements.define('ext-gridgroupsmenuitem', EWCGridgroupsmenuitem);
  }
}