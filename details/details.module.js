"use strict";
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var details_routing_1 = require("./details.routing");
var details_component_1 = require("./details.component");
var DetailsModule = (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                details_routing_1.detailsRouting
            ],
            declarations: [
                details_component_1.DetailsComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailsModule);
    return DetailsModule;
}());
exports.DetailsModule = DetailsModule;
//# sourceMappingURL=details.module.js.map