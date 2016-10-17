"use strict";
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var app_routing_1 = require('./app.routing');
var home_module_1 = require("./home/home.module");
var details_module_1 = require("./details/details.module");
var status_bar_util_1 = require("./shared/status_bar_util");
status_bar_util_1.setStatusBarColors();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [],
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.AppRoutes),
                home_module_1.HomeModule,
                details_module_1.DetailsModule
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map