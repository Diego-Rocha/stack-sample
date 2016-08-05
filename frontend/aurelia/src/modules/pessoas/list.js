import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {PessoaService} from "./pessoa-service";

@inject(PessoaService, Router)
export class List {

    entities = [];

    constructor(service, router) {
        this.service = service;
        this.router = router;
    }

    activate() {
        return this.service.getAll()
            .then(response => response.json())
            .then(pessoas => {
                this.entities = pessoas;
            });
    }

    createEntity() {
        this.router.navigateToRoute("create");
    }

    editEntity(entity) {
        this.router.navigateToRoute("edit", {id: entity.id});
    }

    deleteEntity(entity) {
        this.service.delete(entity.id).then(response => {
            let index = this.entities.indexOf(entity);
            this.entities.splice(index, 1);
            alert(`${entity.nome}: removido com sucesso!`);
        }).catch(error => {
            alert(`${error.status}: erro ao excluir!`);
        });
    }
}