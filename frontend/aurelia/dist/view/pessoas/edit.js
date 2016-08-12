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
    var Edit = (function () {
        function Edit(service, router) {
            this.isEdit = false;
            this.entity = null;
            this.service = service;
            this.router = router;
        }
        Edit.prototype.activate = function (params, navigation) {
            var _this = this;
            this.isEdit = navigation.name == 'edit';
            if (!this.isEdit) {
                return;
            }
            return this.service.getOne(params.id)
                .then(function (response) { return response.json(); })
                .then(function (pessoa) {
                _this.entity = pessoa;
            }).catch(function (error) {
                alert(error.status + ": erro ao editar!");
            });
        };
        Edit.prototype.salvarEntity = function (entity) {
            if (this.isEdit) {
                this.update(entity);
                return;
            }
            this.create(entity);
        };
        Edit.prototype.update = function (entity) {
            var _this = this;
            this.service.update(entity)
                .then(function (response) { return response.json(); })
                .then(function (pessoa) {
                _this.entity = pessoa;
                alert("Pessoa alterada com sucesso!");
                _this.router.navigateToRoute("list");
            }).catch(function (error) {
                alert(error.status + ": erro ao alterar!");
            });
        };
        Edit.prototype.create = function (entity) {
            var _this = this;
            this.service.create(entity)
                .then(function (response) {
                alert("Pessoa salva com sucesso!");
                _this.router.navigateToRoute("list");
            }).catch(function (error) {
                alert(error.status + ": erro ao salvar!");
            });
        };
        Edit = __decorate([
            aurelia_framework_1.inject(pessoa_service_1.PessoaService, aurelia_router_1.Router), 
            __metadata('design:paramtypes', [pessoa_service_1.PessoaService, aurelia_router_1.Router])
        ], Edit);
        return Edit;
    }());
    exports.Edit = Edit;
});

//# sourceMappingURL=edit.js.map
