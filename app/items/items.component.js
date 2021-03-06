"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var items_service_1 = require('./items.service');
var ItemsComponent = (function () {
    function ItemsComponent(itemsService) {
        this.itemsService = itemsService;
    }
    ItemsComponent.prototype.getItems = function () {
        var _this = this;
        this.itemsService.getItems()
            .subscribe(function (items) { _this.items = items; console.log(_this.items); }, function (error) { return _this.errorMessage = error; });
    };
    ItemsComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ItemsComponent.prototype.displayItem = function (item) {
        console.log(item);
        this.specificItem = item;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: 'items-component',
            templateUrl: 'html/items.html',
            styleUrls: ['css/items.css'],
            providers: [items_service_1.ItemsService]
        }), 
        __metadata('design:paramtypes', [items_service_1.ItemsService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
;
//# sourceMappingURL=items.component.js.map