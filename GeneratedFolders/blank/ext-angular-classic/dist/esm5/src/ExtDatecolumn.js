import { __decorate, __extends, __param } from "tslib";
//import EWCDatecolumn from '../dist/ext-datecolumn.component.js';
//inputs: (new EWCDatecolumn()).properties,
//import EWCDatecolumn from '@sencha/ext-web-components-classic/dist/ext-datecolumn.component.js';
import { EWCDatecolumn } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
var ExtDatecolumnComponent = /** @class */ (function (_super) {
    __extends(ExtDatecolumnComponent, _super);
    function ExtDatecolumnComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'align', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'cellFocusable', 'cellWrap', 'childEls', 'cls', 'columns', 'columnsText', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'dataIndex', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'defaultWidth', 'detachOnRemove', 'dirtyText', 'disabled', 'disabledCls', 'dock', 'draggable', 'editor', 'editRenderer', 'emptyCellText', 'enableColumnHide', 'enableTextSelection', 'exportRenderer', 'exportStyle', 'exportSummaryRenderer', 'undefined', 'filterType', 'undefined', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'format', 'formatter', 'formBind', 'frame', 'groupable', 'grouper', 'groupFormatter', 'undefined', 'headerWrap', 'height', 'hidden', 'hideable', 'hideMode', 'html', 'id', 'ignoreExport', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'lockable', 'locked', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'menuDisabled', 'menuText', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'producesHTML', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderer', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scope', 'scrollable', 'sealed', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'sortable', 'sortAscText', 'sortClearText', 'sortDescText', 'sorter', 'stateEvents', 'stateful', 'stateId', 'style', 'summaries', 'summaryRenderer', 'suspendLayout', 'tabGuard', 'tabIndex', 'tdCls', 'text', 'toFrontOnShow', 'tooltip', 'tooltipType', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'updater', 'userCls', 'variableRowHeight', 'viewModel', 'weight', 'width', 'xtype',], (new EWCDatecolumn()).events, ['ready', 'created', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'childmove', 'columnhide', 'columnmove', 'columnresize', 'columnschanged', 'columnshow', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'headerclick', 'headercontextmenu', 'headertriggerclick', 'hide', 'menucreate', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'sortchange', 'staterestore', 'statesave',], vc) || this;
        _this.xtype = 'datecolumn';
        return _this;
    }
    ExtDatecolumnComponent_1 = ExtDatecolumnComponent;
    ExtDatecolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatecolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatecolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatecolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatecolumnComponent_1;
    ExtDatecolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtDatecolumnComponent = ExtDatecolumnComponent_1 = __decorate([
        Component({
            selector: 'ExtDatecolumn',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'align', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'cellFocusable', 'cellWrap', 'childEls', 'cls', 'columns', 'columnsText', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'dataIndex', 'defaultAlign', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'defaultWidth', 'detachOnRemove', 'dirtyText', 'disabled', 'disabledCls', 'dock', 'draggable', 'editor', 'editRenderer', 'emptyCellText', 'enableColumnHide', 'enableTextSelection', 'exportRenderer', 'exportStyle', 'exportSummaryRenderer', 'undefined', 'filterType', 'undefined', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'format', 'formatter', 'formBind', 'frame', 'groupable', 'grouper', 'groupFormatter', 'undefined', 'headerWrap', 'height', 'hidden', 'hideable', 'hideMode', 'html', 'id', 'ignoreExport', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'lockable', 'locked', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'menuDisabled', 'menuText', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'undefined', 'undefined', 'padding', 'plugins', 'producesHTML', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'renderer', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scope', 'scrollable', 'sealed', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'sortable', 'sortAscText', 'sortClearText', 'sortDescText', 'sorter', 'stateEvents', 'stateful', 'stateId', 'style', 'summaries', 'summaryRenderer', 'suspendLayout', 'tabGuard', 'tabIndex', 'tdCls', 'text', 'toFrontOnShow', 'tooltip', 'tooltipType', 'touchAction', 'tpl', 'tplWriteMode', 'twoWayBindable', 'ui', 'uiCls', 'updater', 'userCls', 'variableRowHeight', 'viewModel', 'weight', 'width', 'xtype',],
            outputs: ['ready', 'created', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'childmove', 'columnhide', 'columnmove', 'columnresize', 'columnschanged', 'columnshow', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'headerclick', 'headercontextmenu', 'headertriggerclick', 'hide', 'menucreate', 'move', 'remove', 'removed', 'render', 'resize', 'show', 'sortchange', 'staterestore', 'statesave',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatecolumnComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtDatecolumnComponent);
    return ExtDatecolumnComponent;
}(EngBase));
export { ExtDatecolumnComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCDatecolumn()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0RGF0ZWNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItY2xhc3NpYy8iLCJzb3VyY2VzIjpbInNyYy9FeHREYXRlY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxrRUFBa0U7QUFDbEUsMkNBQTJDO0FBQzNDLGtHQUFrRztBQUNsRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTL0M7SUFBNEMsMENBQU87SUFDL0MsZ0NBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFIeEIsWUFLSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxTQUFTLEVBQUMscUJBQXFCLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQywrQkFBK0IsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxVQUFVLEVB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QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NEYXRlY29sdW1uIGZyb20gJy4uL2Rpc3QvZXh0LWRhdGVjb2x1bW4uY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0RhdGVjb2x1bW4oKSkucHJvcGVydGllcyxcbi8vaW1wb3J0IEVXQ0RhdGVjb2x1bW4gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1kYXRlY29sdW1uLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NEYXRlY29sdW1uIH0gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9jb21tb24vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dERhdGVjb2x1bW4nLFxuICAgIGlucHV0czogWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3Rpb25zJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVJdGVtJywnYWxpZ24nLCdhbGlnbk9uU2Nyb2xsJywnYWxpZ25UYXJnZXQnLCdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsJ2Fsd2F5c09uVG9wJywnYW5jaG9yJywnYW5jaG9yU2l6ZScsJ2FuaW1hdGVTaGFkb3cnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYXV0b0Rlc3Ryb3knLCdhdXRvRWwnLCdhdXRvUmVuZGVyJywndW5kZWZpbmVkJywnYXV0b1Nob3cnLCdiYXNlQ2xzJywnYmluZCcsJ2JvcmRlcicsJ2J1YmJsZUV2ZW50cycsJ2NlbGxGb2N1c2FibGUnLCdjZWxsV3JhcCcsJ2NoaWxkRWxzJywnY2xzJywnY29sdW1ucycsJ2NvbHVtbnNUZXh0JywnY29sdW1uV2lkdGgnLCdjb21wb25lbnRDbHMnLCdjb21wb25lbnRMYXlvdXQnLCdjb25zdHJhaW4nLCdjb25zdHJhaW50SW5zZXRzJywnY29uc3RyYWluVG8nLCdjb250ZW50RWwnLCdjb250cm9sbGVyJywnZGF0YScsJ2RhdGFJbmRleCcsJ2RlZmF1bHRBbGlnbicsJ2RlZmF1bHRGb2N1cycsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGVmYXVsdHMnLCdkZWZhdWx0VHlwZScsJ2RlZmF1bHRXaWR0aCcsJ2RldGFjaE9uUmVtb3ZlJywnZGlydHlUZXh0JywnZGlzYWJsZWQnLCdkaXNhYmxlZENscycsJ2RvY2snLCdkcmFnZ2FibGUnLCdlZGl0b3InLCdlZGl0UmVuZGVyZXInLCdlbXB0eUNlbGxUZXh0JywnZW5hYmxlQ29sdW1uSGlkZScsJ2VuYWJsZVRleHRTZWxlY3Rpb24nLCdleHBvcnRSZW5kZXJlcicsJ2V4cG9ydFN0eWxlJywnZXhwb3J0U3VtbWFyeVJlbmRlcmVyJywndW5kZWZpbmVkJywnZmlsdGVyVHlwZScsJ3VuZGVmaW5lZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JtYXQnLCdmb3JtYXR0ZXInLCdmb3JtQmluZCcsJ2ZyYW1lJywnZ3JvdXBhYmxlJywnZ3JvdXBlcicsJ2dyb3VwRm9ybWF0dGVyJywndW5kZWZpbmVkJywnaGVhZGVyV3JhcCcsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVhYmxlJywnaGlkZU1vZGUnLCdodG1sJywnaWQnLCdpZ25vcmVFeHBvcnQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpdGVtSWQnLCdpdGVtcycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsYXlvdXQnLCdsaXF1aWRMYXlvdXQnLCdsaXN0ZW5lcnMnLCdsaXZlRHJhZycsJ2xvYWRlcicsJ2xvY2thYmxlJywnbG9ja2VkJywnbWFyZ2luJywnbWFza0RlZmF1bHRzJywnbWFza0VsZW1lbnQnLCdtYXhIZWlnaHQnLCdtYXhXaWR0aCcsJ21lbnVEaXNhYmxlZCcsJ21lbnVUZXh0JywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ292ZXJDbHMnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGx1Z2lucycsJ3Byb2R1Y2VzSFRNTCcsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCdyZW5kZXJlcicsJ3VuZGVmaW5lZCcsJ3JlbmRlclRvJywncmVuZGVyVHBsJywncmVzZXRGb2N1c1Bvc2l0aW9uJywncmVzaXphYmxlJywncmVzaXplSGFuZGxlcycsJ3NhdmVEZWxheScsJ3Njb3BlJywnc2Nyb2xsYWJsZScsJ3NlYWxlZCcsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFkb3dPZmZzZXQnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nocmlua1dyYXAnLCdzb3J0YWJsZScsJ3NvcnRBc2NUZXh0Jywnc29ydENsZWFyVGV4dCcsJ3NvcnREZXNjVGV4dCcsJ3NvcnRlcicsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3R5bGUnLCdzdW1tYXJpZXMnLCdzdW1tYXJ5UmVuZGVyZXInLCdzdXNwZW5kTGF5b3V0JywndGFiR3VhcmQnLCd0YWJJbmRleCcsJ3RkQ2xzJywndGV4dCcsJ3RvRnJvbnRPblNob3cnLCd0b29sdGlwJywndG9vbHRpcFR5cGUnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1aUNscycsJ3VwZGF0ZXInLCd1c2VyQ2xzJywndmFyaWFibGVSb3dIZWlnaHQnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdjcmVhdGVkJywnYWN0aXZhdGUnLCdhZGQnLCdhZGRlZCcsJ2FmdGVybGF5b3V0JywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlYWRkJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc3Ryb3knLCdiZWZvcmVoaWRlJywnYmVmb3JlcmVtb3ZlJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NoaWxkbW92ZScsJ2NvbHVtbmhpZGUnLCdjb2x1bW5tb3ZlJywnY29sdW1ucmVzaXplJywnY29sdW1uc2NoYW5nZWQnLCdjb2x1bW5zaG93JywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZW5hYmxlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hlYWRlcmNsaWNrJywnaGVhZGVyY29udGV4dG1lbnUnLCdoZWFkZXJ0cmlnZ2VyY2xpY2snLCdoaWRlJywnbWVudWNyZWF0ZScsJ21vdmUnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3NvcnRjaGFuZ2UnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dERhdGVjb2x1bW5Db21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHREYXRlY29sdW1uQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FjdGlvbnMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlQ291bnRlcicsJ2FjdGl2ZUl0ZW0nLCdhbGlnbicsJ2FsaWduT25TY3JvbGwnLCdhbGlnblRhcmdldCcsJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmNob3JTaXplJywnYW5pbWF0ZVNoYWRvdycsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9FbCcsJ2F1dG9SZW5kZXInLCd1bmRlZmluZWQnLCdhdXRvU2hvdycsJ2Jhc2VDbHMnLCdiaW5kJywnYm9yZGVyJywnYnViYmxlRXZlbnRzJywnY2VsbEZvY3VzYWJsZScsJ2NlbGxXcmFwJywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5zJywnY29sdW1uc1RleHQnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGF0YUluZGV4JywnZGVmYXVsdEFsaWduJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUeXBlJywnZGVmYXVsdFdpZHRoJywnZGV0YWNoT25SZW1vdmUnLCdkaXJ0eVRleHQnLCdkaXNhYmxlZCcsJ2Rpc2FibGVkQ2xzJywnZG9jaycsJ2RyYWdnYWJsZScsJ2VkaXRvcicsJ2VkaXRSZW5kZXJlcicsJ2VtcHR5Q2VsbFRleHQnLCdlbmFibGVDb2x1bW5IaWRlJywnZW5hYmxlVGV4dFNlbGVjdGlvbicsJ2V4cG9ydFJlbmRlcmVyJywnZXhwb3J0U3R5bGUnLCdleHBvcnRTdW1tYXJ5UmVuZGVyZXInLCd1bmRlZmluZWQnLCdmaWx0ZXJUeXBlJywndW5kZWZpbmVkJywnZmxleCcsJ2Zsb2F0aW5nJywnZm9jdXNhYmxlQ29udGFpbmVyJywnZm9jdXNDbHMnLCdmb2N1c09uVG9Gcm9udCcsJ2Zvcm1hdCcsJ2Zvcm1hdHRlcicsJ2Zvcm1CaW5kJywnZnJhbWUnLCdncm91cGFibGUnLCdncm91cGVyJywnZ3JvdXBGb3JtYXR0ZXInLCd1bmRlZmluZWQnLCdoZWFkZXJXcmFwJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZWFibGUnLCdoaWRlTW9kZScsJ2h0bWwnLCdpZCcsJ2lnbm9yZUV4cG9ydCcsJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2l0ZW1JZCcsJ2l0ZW1zJywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xpcXVpZExheW91dCcsJ2xpc3RlbmVycycsJ2xpdmVEcmFnJywnbG9hZGVyJywnbG9ja2FibGUnLCdsb2NrZWQnLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWVudURpc2FibGVkJywnbWVudVRleHQnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywnb3ZlckNscycsJ3VuZGVmaW5lZCcsJ3VuZGVmaW5lZCcsJ3BhZGRpbmcnLCdwbHVnaW5zJywncHJvZHVjZXNIVE1MJywncHVibGlzaGVzJywncmVmZXJlbmNlJywncmVmZXJlbmNlSG9sZGVyJywncmVnaW9uJywncmVuZGVyQ29uZmlnJywncmVuZGVyRGF0YScsJ3JlbmRlcmVyJywndW5kZWZpbmVkJywncmVuZGVyVG8nLCdyZW5kZXJUcGwnLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyZXNpemVIYW5kbGVzJywnc2F2ZURlbGF5Jywnc2NvcGUnLCdzY3JvbGxhYmxlJywnc2VhbGVkJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3NvcnRhYmxlJywnc29ydEFzY1RleHQnLCdzb3J0Q2xlYXJUZXh0Jywnc29ydERlc2NUZXh0Jywnc29ydGVyJywnc3RhdGVFdmVudHMnLCdzdGF0ZWZ1bCcsJ3N0YXRlSWQnLCdzdHlsZScsJ3N1bW1hcmllcycsJ3N1bW1hcnlSZW5kZXJlcicsJ3N1c3BlbmRMYXlvdXQnLCd0YWJHdWFyZCcsJ3RhYkluZGV4JywndGRDbHMnLCd0ZXh0JywndG9Gcm9udE9uU2hvdycsJ3Rvb2x0aXAnLCd0b29sdGlwVHlwZScsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VpQ2xzJywndXBkYXRlcicsJ3VzZXJDbHMnLCd2YXJpYWJsZVJvd0hlaWdodCcsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dpZHRoJywneHR5cGUnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ0RhdGVjb2x1bW4oKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2NyZWF0ZWQnLCdhY3RpdmF0ZScsJ2FkZCcsJ2FkZGVkJywnYWZ0ZXJsYXlvdXQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVhZGQnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVyZW1vdmUnLCdiZWZvcmVyZW5kZXInLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY2hpbGRtb3ZlJywnY29sdW1uaGlkZScsJ2NvbHVtbm1vdmUnLCdjb2x1bW5yZXNpemUnLCdjb2x1bW5zY2hhbmdlZCcsJ2NvbHVtbnNob3cnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2Rpc2FibGUnLCdlbmFibGUnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGVhZGVyY2xpY2snLCdoZWFkZXJjb250ZXh0bWVudScsJ2hlYWRlcnRyaWdnZXJjbGljaycsJ2hpZGUnLCdtZW51Y3JlYXRlJywnbW92ZScsJ3JlbW92ZScsJ3JlbW92ZWQnLCdyZW5kZXInLCdyZXNpemUnLCdzaG93Jywnc29ydGNoYW5nZScsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdkYXRlY29sdW1uJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NEYXRlY29sdW1uKCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=