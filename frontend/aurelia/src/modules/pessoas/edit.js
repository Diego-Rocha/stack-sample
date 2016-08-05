import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {PessoaService} from "./pessoa-service";

@inject(PessoaService, Router)
export class Edit {

    entity = null;
    isEdit = false;

    constructor(service, router) {
        this.service = service;
        this.router = router;
    }

    activate(params, navigation) {
        this.isEdit = navigation.name == 'edit';
        if (this.isEdit) {
            return this.service.getOne(params.id)
                .then(response => response.json())
                .then(pessoa => {
                    this.entity = pessoa;
                }).catch(error => {
                    alert(`${error.status}: erro ao editar!`);
                });
        }
    }

    salvarEntity(entity) {
        if (this.isEdit) {
            this.service.update(entity)
                .then(response => response.json())
                .then(pessoa => {
                    this.entity = pessoa;
                    alert(`${this.entity.id}: alterado com sucesso!`);
                    this.router.navigateToRoute("list");
                }).catch(error => {
                alert(`${error.status}: erro ao alterar!`);
            });
            return;
        }
        this.service.create(entity)
            .then(response => {
                alert(`salvo com sucesso!`);
                this.router.navigateToRoute("list");
            }).catch(error => {
            alert(`${error.status}: erro ao salvar!`);
        });
    }


}