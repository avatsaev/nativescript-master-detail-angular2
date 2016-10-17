"use strict";
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var DetailsComponent = (function () {
    function DetailsComponent(route) {
        this.route = route;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.item_id = params['id'];
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: "app-details",
            templateUrl: "details/details.component.html",
            styleUrls: ["details/details.component.css"],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map