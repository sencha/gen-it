import { __decorate, __extends, __param } from "tslib";
//import EWCStatusbar from '../dist/ext-statusbar.component.js';
//inputs: (new EWCStatusbar()).properties,
//import EWCStatusbar from '@sencha/ext-web-components-classic/dist/ext-statusbar.component.js';
import { EWCStatusbar } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
var ExtStatusbarComponent = /** @class */ (function (_super) {
    __extends(ExtStatusbarComponent, _super);
    function ExtStatusbarComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoClear', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'busyIconCls', 'busyText', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultButtonUI', 'defaultFieldUI', 'defaultFocus', 'defaultFooterButtonUI', 'defaultFooterFieldUI', 'defaultIconCls', 'defaultListenerScope', 'defaults', 'defaultText', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'emptyText', 'enableOverflow', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'iconCls', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'overflowHandler', 'undefined', 'undefined', 'padding', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'statusAlign', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'text', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackMenus', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'vertical', 'viewModel', 'weight', 'width', 'xtype',], (new EWCStatusbar()).events, ['ready', 'created', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'childmove', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'overflowchange', 'remove', 'removed', 'render', 'resize', 'show', 'staterestore', 'statesave',], vc) || this;
        _this.xtype = 'statusbar';
        return _this;
    }
    ExtStatusbarComponent_1 = ExtStatusbarComponent;
    ExtStatusbarComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtStatusbarComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtStatusbarComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtStatusbarComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtStatusbarComponent_1;
    ExtStatusbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtStatusbarComponent = ExtStatusbarComponent_1 = __decorate([
        Component({
            selector: 'ExtStatusbar',
            inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'actions', 'activeChildTabIndex', 'activeCounter', 'activeItem', 'alignOnScroll', 'alignTarget', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorSize', 'animateShadow', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoClear', 'autoDestroy', 'autoEl', 'autoRender', 'undefined', 'autoShow', 'baseCls', 'bind', 'border', 'bubbleEvents', 'busyIconCls', 'busyText', 'childEls', 'cls', 'columnWidth', 'componentCls', 'componentLayout', 'constrain', 'constraintInsets', 'constrainTo', 'contentEl', 'controller', 'data', 'defaultAlign', 'defaultButtonUI', 'defaultFieldUI', 'defaultFocus', 'defaultFooterButtonUI', 'defaultFooterFieldUI', 'defaultIconCls', 'defaultListenerScope', 'defaults', 'defaultText', 'defaultType', 'detachOnRemove', 'disabled', 'disabledCls', 'dock', 'draggable', 'emptyText', 'enableOverflow', 'fixed', 'flex', 'floating', 'focusableContainer', 'focusCls', 'focusOnToFront', 'formBind', 'frame', 'height', 'hidden', 'hideMode', 'html', 'iconCls', 'id', 'inactiveChildTabIndex', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'liquidLayout', 'listeners', 'liveDrag', 'loader', 'margin', 'maskDefaults', 'maskElement', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'nameable', 'nameHolder', 'overCls', 'overflowHandler', 'undefined', 'undefined', 'padding', 'plugins', 'publishes', 'reference', 'referenceHolder', 'region', 'renderConfig', 'renderData', 'undefined', 'renderTo', 'renderTpl', 'resetFocusPosition', 'resizable', 'resizeHandles', 'saveDelay', 'scrollable', 'session', 'shadow', 'shadowOffset', 'shareableName', 'shim', 'shrinkWrap', 'stateEvents', 'stateful', 'stateId', 'statusAlign', 'style', 'suspendLayout', 'tabGuard', 'tabIndex', 'text', 'toFrontOnShow', 'touchAction', 'tpl', 'tplWriteMode', 'trackMenus', 'twoWayBindable', 'ui', 'uiCls', 'userCls', 'vertical', 'viewModel', 'weight', 'width', 'xtype',],
            outputs: ['ready', 'created', 'activate', 'add', 'added', 'afterlayout', 'afterlayoutanimation', 'afterrender', 'beforeactivate', 'beforeadd', 'beforedeactivate', 'beforedestroy', 'beforehide', 'beforeremove', 'beforerender', 'beforeshow', 'beforestaterestore', 'beforestatesave', 'blur', 'boxready', 'childmove', 'deactivate', 'destroy', 'disable', 'enable', 'focus', 'focusenter', 'focusleave', 'hide', 'move', 'overflowchange', 'remove', 'removed', 'render', 'resize', 'show', 'staterestore', 'statesave',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtStatusbarComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
    ], ExtStatusbarComponent);
    return ExtStatusbarComponent;
}(EngBase));
export { ExtStatusbarComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCStatusbar()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0U3RhdHVzYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dFN0YXR1c2Jhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0VBQWdFO0FBQ2hFLDBDQUEwQztBQUMxQyxnR0FBZ0c7QUFDaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xFLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBUy9DO0lBQTJDLHlDQUFPO0lBQzlDLCtCQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBSHhCLFlBS0ksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsU0FBUyxFQUFDLHFCQUFxQixFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsZUFBZSxFQUFDLGFBQWEsRUFBQywrQkFBK0IsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLFlBQVksRUFBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFD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Six5Q0FBeUM7QUFFekMsK0NBQStDO0FBQy9DLHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDU3RhdHVzYmFyIGZyb20gJy4uL2Rpc3QvZXh0LXN0YXR1c2Jhci5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDU3RhdHVzYmFyKCkpLnByb3BlcnRpZXMsXG4vL2ltcG9ydCBFV0NTdGF0dXNiYXIgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1zdGF0dXNiYXIuY29tcG9uZW50LmpzJztcbmltcG9ydCB7IEVXQ1N0YXR1c2JhciB9IGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLWNsYXNzaWMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vY29tbW9uL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRTdGF0dXNiYXInLFxuICAgIGlucHV0czogWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3Rpb25zJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVJdGVtJywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclNpemUnLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9DbGVhcicsJ2F1dG9EZXN0cm95JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYmFzZUNscycsJ2JpbmQnLCdib3JkZXInLCdidWJibGVFdmVudHMnLCdidXN5SWNvbkNscycsJ2J1c3lUZXh0JywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdEJ1dHRvblVJJywnZGVmYXVsdEZpZWxkVUknLCdkZWZhdWx0Rm9jdXMnLCdkZWZhdWx0Rm9vdGVyQnV0dG9uVUknLCdkZWZhdWx0Rm9vdGVyRmllbGRVSScsJ2RlZmF1bHRJY29uQ2xzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUZXh0JywnZGVmYXVsdFR5cGUnLCdkZXRhY2hPblJlbW92ZScsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkb2NrJywnZHJhZ2dhYmxlJywnZW1wdHlUZXh0JywnZW5hYmxlT3ZlcmZsb3cnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JtQmluZCcsJ2ZyYW1lJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdodG1sJywnaWNvbkNscycsJ2lkJywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ292ZXJDbHMnLCdvdmVyZmxvd0hhbmRsZXInLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RhdHVzQWxpZ24nLCdzdHlsZScsJ3N1c3BlbmRMYXlvdXQnLCd0YWJHdWFyZCcsJ3RhYkluZGV4JywndGV4dCcsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrTWVudXMnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmVydGljYWwnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdjcmVhdGVkJywnYWN0aXZhdGUnLCdhZGQnLCdhZGRlZCcsJ2FmdGVybGF5b3V0JywnYWZ0ZXJsYXlvdXRhbmltYXRpb24nLCdhZnRlcnJlbmRlcicsJ2JlZm9yZWFjdGl2YXRlJywnYmVmb3JlYWRkJywnYmVmb3JlZGVhY3RpdmF0ZScsJ2JlZm9yZWRlc3Ryb3knLCdiZWZvcmVoaWRlJywnYmVmb3JlcmVtb3ZlJywnYmVmb3JlcmVuZGVyJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN0YXRlcmVzdG9yZScsJ2JlZm9yZXN0YXRlc2F2ZScsJ2JsdXInLCdib3hyZWFkeScsJ2NoaWxkbW92ZScsJ2RlYWN0aXZhdGUnLCdkZXN0cm95JywnZGlzYWJsZScsJ2VuYWJsZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoaWRlJywnbW92ZScsJ292ZXJmbG93Y2hhbmdlJywncmVtb3ZlJywncmVtb3ZlZCcsJ3JlbmRlcicsJ3Jlc2l6ZScsJ3Nob3cnLCdzdGF0ZXJlc3RvcmUnLCdzdGF0ZXNhdmUnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFN0YXR1c2JhckNvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dFN0YXR1c2JhckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3Rpb25zJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUNvdW50ZXInLCdhY3RpdmVJdGVtJywnYWxpZ25PblNjcm9sbCcsJ2FsaWduVGFyZ2V0JywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclNpemUnLCdhbmltYXRlU2hhZG93JywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9DbGVhcicsJ2F1dG9EZXN0cm95JywnYXV0b0VsJywnYXV0b1JlbmRlcicsJ3VuZGVmaW5lZCcsJ2F1dG9TaG93JywnYmFzZUNscycsJ2JpbmQnLCdib3JkZXInLCdidWJibGVFdmVudHMnLCdidXN5SWNvbkNscycsJ2J1c3lUZXh0JywnY2hpbGRFbHMnLCdjbHMnLCdjb2x1bW5XaWR0aCcsJ2NvbXBvbmVudENscycsJ2NvbXBvbmVudExheW91dCcsJ2NvbnN0cmFpbicsJ2NvbnN0cmFpbnRJbnNldHMnLCdjb25zdHJhaW5UbycsJ2NvbnRlbnRFbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEFsaWduJywnZGVmYXVsdEJ1dHRvblVJJywnZGVmYXVsdEZpZWxkVUknLCdkZWZhdWx0Rm9jdXMnLCdkZWZhdWx0Rm9vdGVyQnV0dG9uVUknLCdkZWZhdWx0Rm9vdGVyRmllbGRVSScsJ2RlZmF1bHRJY29uQ2xzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRUZXh0JywnZGVmYXVsdFR5cGUnLCdkZXRhY2hPblJlbW92ZScsJ2Rpc2FibGVkJywnZGlzYWJsZWRDbHMnLCdkb2NrJywnZHJhZ2dhYmxlJywnZW1wdHlUZXh0JywnZW5hYmxlT3ZlcmZsb3cnLCdmaXhlZCcsJ2ZsZXgnLCdmbG9hdGluZycsJ2ZvY3VzYWJsZUNvbnRhaW5lcicsJ2ZvY3VzQ2xzJywnZm9jdXNPblRvRnJvbnQnLCdmb3JtQmluZCcsJ2ZyYW1lJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdodG1sJywnaWNvbkNscycsJ2lkJywnaW5hY3RpdmVDaGlsZFRhYkluZGV4JywnaXRlbUlkJywnaXRlbXMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGlxdWlkTGF5b3V0JywnbGlzdGVuZXJzJywnbGl2ZURyYWcnLCdsb2FkZXInLCdtYXJnaW4nLCdtYXNrRGVmYXVsdHMnLCdtYXNrRWxlbWVudCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWluSGVpZ2h0JywnbWluV2lkdGgnLCdtb2RhbCcsJ21vZGVsVmFsaWRhdGlvbicsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ292ZXJDbHMnLCdvdmVyZmxvd0hhbmRsZXInLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdwYWRkaW5nJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlZ2lvbicsJ3JlbmRlckNvbmZpZycsJ3JlbmRlckRhdGEnLCd1bmRlZmluZWQnLCdyZW5kZXJUbycsJ3JlbmRlclRwbCcsJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsJ3Jlc2l6YWJsZScsJ3Jlc2l6ZUhhbmRsZXMnLCdzYXZlRGVsYXknLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYWRvd09mZnNldCcsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hyaW5rV3JhcCcsJ3N0YXRlRXZlbnRzJywnc3RhdGVmdWwnLCdzdGF0ZUlkJywnc3RhdHVzQWxpZ24nLCdzdHlsZScsJ3N1c3BlbmRMYXlvdXQnLCd0YWJHdWFyZCcsJ3RhYkluZGV4JywndGV4dCcsJ3RvRnJvbnRPblNob3cnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrTWVudXMnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndWlDbHMnLCd1c2VyQ2xzJywndmVydGljYWwnLCd2aWV3TW9kZWwnLCd3ZWlnaHQnLCd3aWR0aCcsJ3h0eXBlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NTdGF0dXNiYXIoKSkuZXZlbnRzLFxuICAgICAgICAgICAgWydyZWFkeScsJ2NyZWF0ZWQnLCdhY3RpdmF0ZScsJ2FkZCcsJ2FkZGVkJywnYWZ0ZXJsYXlvdXQnLCdhZnRlcmxheW91dGFuaW1hdGlvbicsJ2FmdGVycmVuZGVyJywnYmVmb3JlYWN0aXZhdGUnLCdiZWZvcmVhZGQnLCdiZWZvcmVkZWFjdGl2YXRlJywnYmVmb3JlZGVzdHJveScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVyZW1vdmUnLCdiZWZvcmVyZW5kZXInLCdiZWZvcmVzaG93JywnYmVmb3Jlc3RhdGVyZXN0b3JlJywnYmVmb3Jlc3RhdGVzYXZlJywnYmx1cicsJ2JveHJlYWR5JywnY2hpbGRtb3ZlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXNhYmxlJywnZW5hYmxlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hpZGUnLCdtb3ZlJywnb3ZlcmZsb3djaGFuZ2UnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyJywncmVzaXplJywnc2hvdycsJ3N0YXRlcmVzdG9yZScsJ3N0YXRlc2F2ZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdzdGF0dXNiYXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ1N0YXR1c2JhcigpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19