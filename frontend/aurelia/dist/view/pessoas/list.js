var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-router", "../../service/pessoa-service"], function (require, exports, aurelia_framework_1, aurelia_router_1, pessoa_service_1) {
    "use strict";
    var List = (function () {
        function List(service, router) {
            this.entities = [];
            this.service = service;
            this.router = router;
        }
        List.prototype.activate = function () {
            var _this = this;
            return this.service.getAll()
                .then(function (response) { return response.json(); })
                .then(function (pessoas) {
                _this.entities = pessoas;
            });
        };
        List.prototype.createEntity = function () {
            this.router.navigateToRoute("create");
        };
        List.prototype.editEntity = function (entity) {
            this.router.navigateToRoute("edit", { id: entity.id });
        };
        List.prototype.deleteEntity = function (entity) {
            var _this = this;
            if (!window.confirm("Tem certeza?")) {
                return;
            }
            this.service.delete(entity.id).then(function (response) {
                var index = _this.entities.indexOf(entity);
                _this.entities.splice(index, 1);
                alert("Pessoa removida com sucesso!");
            }).catch(function (error) {
                alert(error.status + ": erro ao excluir!");
            });
        };
        List = __decorate([
            aurelia_framework_1.inject(pessoa_service_1.PessoaService, aurelia_router_1.Router), 
            __metadata('design:paramtypes', [pessoa_service_1.PessoaService, aurelia_router_1.Router])
        ], List);
        return List;
    }());
    exports.List = List;
});

//# sourceMappingURL=list.js.map
