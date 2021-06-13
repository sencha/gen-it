import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_column_Groups from './Ext/grid/column/Groups.js';
import ElementParser from './common/ElementParser.js';

var EWCGroupscolumn = /*#__PURE__*/function (_Ext_grid_column_Grou) {
  _inheritsLoose(EWCGroupscolumn, _Ext_grid_column_Grou);

  function EWCGroupscolumn() {
    var _this;

    _this = _Ext_grid_column_Grou.call(this, [], []) || this;
    _this.xtype = 'groupscolumn';
    return _this;
  }

  return EWCGroupscolumn;
}(Ext_grid_column_Groups);

export { EWCGroupscolumn as default };

try {
  if (window.customElements.get('ext-groupscolumn') == undefined) {
    window.customElements.define('ext-groupscolumn', ElementParser.withParsedCallback(EWCGroupscolumn));
  }
} catch (e) {
  if (window.customElements.get('ext-groupscolumn') == undefined) {
    window.customElements.define('ext-groupscolumn', EWCGroupscolumn);
  }
}