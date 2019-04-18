"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var angular_oauth2_oidc_1 = require("angular-oauth2-oidc");
var operators_1 = require("rxjs/operators");
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var oauthService = this.injector.get(angular_oauth2_oidc_1.OAuthService);
        if (oauthService.hasValidAccessToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: oauthService.authorizationHeader()
                }
            });
        }
        return next.handle(request).pipe(operators_1.tap(function (event) {
            if (event instanceof http_1.HttpResponse) {
                return event;
            }
        }, function (error) {
            if (error instanceof http_1.HttpErrorResponse) {
                if (error.status === 401) {
                    return rxjs_1.of(error);
                }
            }
        }));
    };
    AuthInterceptor = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthInterceptor);
    return AuthInterceptor;
}());
exports.AuthInterceptor = AuthInterceptor;
