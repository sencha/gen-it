import { __decorate } from "tslib";
import { EventEmitter, ContentChildren } from '@angular/core';
//import { doAngularXTemplate } from '../overrides/AngularXTemplate';
//import { doAngularCell } from '../overrides/AngularCell';
var Ext = window['Ext'];
var EngBase = /** @class */ (function () {
    function EngBase(eRef, hostComponent, properties, events, eventnames, vc) {
        this.node = eRef.nativeElement;
        this.parentNode = hostComponent;
        var distinct = function (value, index, self) {
            return self.indexOf(value) === index;
        };
        this.properties = properties.filter(distinct);
        this.eventnames = eventnames.filter(distinct);
        var me = this;
        this.eventnames.forEach(function (eventname) {
            if (eventname != "layout") {
                me[eventname] = new EventEmitter();
            }
        });
        this.A = {};
        this.A.props = {};
        this.base = EngBase;
        if (window['ExtAngular'] == null) {
            window['ExtAngular'] = 'loaded';
            // doAngularXTemplate();
            // if (Ext.isModern == true) {
            //   doAngularCell();
            // }
        }
    }
    Object.defineProperty(EngBase.prototype, "childComponents", {
        get: function () {
            var _this = this;
            if (this._childComponents == undefined) {
                return [];
            }
            return this._childComponents.filter(function (item) { return item !== _this; });
        },
        enumerable: true,
        configurable: true
    });
    EngBase.prototype.baseOnInit = function () {
        //console.log('baseOnInit')
        this.node.newDiv = document.createElement('ext-' + this.xtype);
        for (var i = 0; i < this.properties.length; i++) {
            var property = this.properties[i];
            if (this[property] !== undefined) {
                if (property == 'fullscreen' || property == 'xtype') {
                    continue;
                }
                else if (typeof this[property] == 'function') {
                    this.node.newDiv.setAttribute(property, 'function');
                    this.node.newDiv.attributeObjects[property] = this[property];
                }
                else {
                    this.node.newDiv.setAttribute(property, this[property]);
                    this.node.newDiv.attributeObjects[property] = this[property];
                }
            }
        }
        this.node.newDiv.setAttribute('createExtComponentDefer', true);
        this.node.newDiv.attributeObjects['createExtComponentDefer'] = true;
        var me = this;
        this.eventnames.forEach(function (eventname) {
            me.node.newDiv.addEventListener(eventname, function (event) {
                if (me[eventname] != false) {
                    if (eventname != 'layout') {
                        me[eventname].emit(event.detail);
                    }
                }
            });
        });
        if (this.node.parentNode.nodeName.substring(0, 3) !== 'EXT') {
            this.node.after(this.node.newDiv);
        }
        else {
            this.node.parentNode.newDiv.appendChild(this.node.newDiv);
        }
    };
    EngBase.prototype.baseAfterViewInit = function () {
        var me = this;
        this._extitems.toArray().forEach(function (item) {
            me.node.newDiv.appendChild(item.nativeElement);
        });
        me.node.newDiv.doCreateExtComponent();
    };
    EngBase.prototype.baseOnChanges = function (changes) {
        for (var propName in changes) {
            var val = changes[propName].currentValue;
            if (this.node.newDiv != undefined) {
                var propertyVal = '';
                if (typeof val == 'string') {
                    propertyVal = val;
                }
                else {
                    propertyVal = JSON.stringify(val);
                }
                this.node.newDiv.setAttribute(propName, propertyVal);
            }
        }
    };
    EngBase.prototype.baseOnDestroy = function () {
        try {
            if (this.node.parentNode != undefined) {
                if (this.node.parentNode.newDiv != undefined) {
                    this.node.parentNode.newDiv.removeChild(this.node.newDiv);
                }
            }
        }
        catch (e) {
            console.log(e.toString());
        }
    };
    __decorate([
        ContentChildren('extitem')
    ], EngBase.prototype, "_extitems", void 0);
    __decorate([
        ContentChildren(EngBase)
    ], EngBase.prototype, "_childComponents", void 0);
    return EngBase;
}());
export { EngBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvY29tbW9uL2FuZ3VsYXJiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsWUFBWSxFQUVaLGVBQWUsRUFLaEIsTUFBTSxlQUFlLENBQUM7QUFDekIscUVBQXFFO0FBQ3JFLDJEQUEyRDtBQUMzRCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFMUI7SUFnQkksaUJBQ0ksSUFBUyxFQUNULGFBQWtCLEVBQ2xCLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLEVBQUc7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFFaEMsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUk7WUFDbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUztZQUN2QyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3pCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLElB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SUFDTCxDQUFDO0lBRUQsK0JBQWEsR0FBYjtRQUNFLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtRQUNELE9BQU0sQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUMxQjtJQUNILENBQUM7SUF4SDJCO1FBQTNCLGVBQWUsQ0FBQyxTQUFTLENBQUM7OENBQTJCO0lBQzVCO1FBQXpCLGVBQWUsQ0FBQyxPQUFPLENBQUM7cURBQXNDO0lBd0huRSxjQUFDO0NBQUEsQUFsSUQsSUFrSUM7U0FsSVksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBDb250ZW50Q2hpbGQsXHJcbiAgICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgICBWaWV3Q2hpbGRyZW4sXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBRdWVyeUxpc3QsXHJcbiAgICBTaW1wbGVDaGFuZ2VzXHJcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQgeyBkb0FuZ3VsYXJYVGVtcGxhdGUgfSBmcm9tICcuLi9vdmVycmlkZXMvQW5ndWxhclhUZW1wbGF0ZSc7XHJcbi8vaW1wb3J0IHsgZG9Bbmd1bGFyQ2VsbCB9IGZyb20gJy4uL292ZXJyaWRlcy9Bbmd1bGFyQ2VsbCc7XHJcbmNvbnN0IEV4dCA9IHdpbmRvd1snRXh0J107XHJcblxyXG5leHBvcnQgY2xhc3MgRW5nQmFzZSB7XHJcbiAgICB4dHlwZTogYW55XHJcbiAgICBwcm9wZXJ0aWVzOiBhbnlcclxuICAgIEE6IGFueTtcclxuICAgIG5vZGU6IGFueVxyXG4gICAgcGFyZW50Tm9kZTogYW55XHJcbiAgICBiYXNlOiBhbnlcclxuICAgIGV2ZW50bmFtZXM6IGFueTtcclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oRW5nQmFzZSkgX2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xyXG4gICAgZ2V0IGNoaWxkQ29tcG9uZW50cygpOiBFbmdCYXNlW10ge1xyXG4gICAgICAgIGlmICh0aGlzLl9jaGlsZENvbXBvbmVudHMgPT0gdW5kZWZpbmVkKSB7IHJldHVybiBbXX1cclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRDb21wb25lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBlUmVmOiBhbnksXHJcbiAgICAgICAgaG9zdENvbXBvbmVudDogYW55LFxyXG4gICAgICAgIHByb3BlcnRpZXMsXHJcbiAgICAgICAgZXZlbnRzLFxyXG4gICAgICAgIGV2ZW50bmFtZXMsXHJcbiAgICAgICAgdmM/XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm5vZGUgPSBlUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gaG9zdENvbXBvbmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmZpbHRlcihkaXN0aW5jdCk7XHJcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzID0gZXZlbnRuYW1lcy5maWx0ZXIoZGlzdGluY3QpO1xyXG5cclxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50bmFtZSAhPSBcImxheW91dFwiKSB7XHJcbiAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuQSA9IHt9O1xyXG4gICAgICAgIHRoaXMuQS5wcm9wcyA9IHt9XHJcbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvd1snRXh0QW5ndWxhciddID09IG51bGwpIHtcclxuICAgICAgICAgIHdpbmRvd1snRXh0QW5ndWxhciddID0gJ2xvYWRlZCdcclxuICAgICAgICAgIC8vIGRvQW5ndWxhclhUZW1wbGF0ZSgpO1xyXG4gICAgICAgICAgLy8gaWYgKEV4dC5pc01vZGVybiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAvLyAgIGRvQW5ndWxhckNlbGwoKTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFzZU9uSW5pdCgpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygnYmFzZU9uSW5pdCcpXHJcbiAgICAgIHRoaXMubm9kZS5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArIHRoaXMueHR5cGUpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XHJcbiAgICAgICAgaWYgKHRoaXNbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PSAnZnVsbHNjcmVlbicgfHwgcHJvcGVydHkgPT0gJ3h0eXBlJykge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCAnZnVuY3Rpb24nKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB0aGlzW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuYXR0cmlidXRlT2JqZWN0c1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZSgnY3JlYXRlRXh0Q29tcG9uZW50RGVmZXInLCB0cnVlKTtcclxuICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzWydjcmVhdGVFeHRDb21wb25lbnREZWZlciddID0gdHJ1ZTtcclxuXHJcbiAgICAgIHZhciBtZSA9IHRoaXM7XHJcbiAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcclxuICAgICAgICAgIG1lLm5vZGUubmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICBpZiAobWVbZXZlbnRuYW1lXSAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50bmFtZSAhPSAnbGF5b3V0Jykge1xyXG4gICAgICAgICAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZXZlbnQuZGV0YWlsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZS5zdWJzdHJpbmcoMCwgMykgIT09ICdFWFQnKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGUuYWZ0ZXIodGhpcy5ub2RlLm5ld0Rpdik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQodGhpcy5ub2RlLm5ld0Rpdik7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gICAgYmFzZUFmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdmFyIG1lID0gdGhpcztcclxuICAgICAgICB0aGlzLl9leHRpdGVtcy50b0FycmF5KCkuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIG1lLm5vZGUubmV3RGl2LmFwcGVuZENoaWxkKGl0ZW0ubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBtZS5ub2RlLm5ld0Rpdi5kb0NyZWF0ZUV4dENvbXBvbmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGJhc2VPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHByb3BlcnR5VmFsID0gJyc7XHJcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsID0gdmFsO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcE5hbWUsIHByb3BlcnR5VmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiYXNlT25EZXN0cm95KCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLm5ld0Rpdi5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubmV3RGl2KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0Y2goZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSlcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==