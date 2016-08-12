import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {PessoaService} from "../../service/pessoa-service";
import {Pessoa} from '../../model/pessoa';

@inject(PessoaService, Router)
export class List {

    private service:PessoaService;
    private router:Router;

    public entities:Pessoa[] = [];

    constructor(service:PessoaService, router:Router) {
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

    editEntity(entity:Pessoa) {
        this.router.navigateToRoute("edit", {id: entity.id});
    }

    deleteEntity(entity:Pessoa) {
        if(!window.confirm("Tem certeza?")){
            return;
        }
        this.service.delete(entity.id).then(response => {
            let index:number = this.entities.indexOf(entity);
            this.entities.splice(index, 1);
            alert("Pessoa removida com sucesso!");
        }).catch(error => {
            alert(`${error.status}: erro ao excluir!`);
        });
    }
}