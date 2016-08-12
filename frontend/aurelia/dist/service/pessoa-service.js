var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var PessoaService = (function () {
        function PessoaService(httpClient) {
            httpClient.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('http://localhost:8080/');
            });
            this.httpClient = httpClient;
        }
        PessoaService.prototype.getAll = function () {
            return this.httpClient.fetch('pessoas');
        };
        PessoaService.prototype.getOne = function (id) {
            return this.httpClient.fetch("pessoas/" + id);
        };
        PessoaService.prototype.create = function (entity) {
            return this.httpClient.fetch('pessoas', {
                method: 'post',
                redirect: 'follow',
                body: aurelia_fetch_client_1.json(entity)
            });
        };
        PessoaService.prototype.update = function (entity) {
            return this.httpClient.fetch("pessoas/" + entity.id, {
                method: 'put',
                body: aurelia_fetch_client_1.json(entity)
            });
        };
        PessoaService.prototype.delete = function (id) {
            return this.httpClient.fetch("pessoas/" + id, {
                method: 'delete'
            });
        };
        PessoaService = __decorate([
            aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient), 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], PessoaService);
        return PessoaService;
    }());
    exports.PessoaService = PessoaService;
});

//# sourceMappingURL=pessoa-service.js.map
