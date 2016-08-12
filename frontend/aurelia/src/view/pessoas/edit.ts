import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {PessoaService} from "../../service/pessoa-service";
import {Pessoa} from "../../model/pessoa";

@inject(PessoaService, Router)
export class Edit {

    private isEdit:boolean = false;
    private service:PessoaService;
    private router:Router;

    public entity:Pessoa = null;

    constructor(service:PessoaService, router:Router) {
        this.service = service;
        this.router = router;
    }

    activate(params, navigation) {
        this.isEdit = navigation.name == 'edit';
        if (!this.isEdit) {
            return;
        }
        return this.service.getOne(params.id)
            .then(response => response.json())
            .then(pessoa => {
                this.entity = pessoa;
            }).catch(error => {
                alert(`${error.status}: erro ao editar!`);
            });
    }

    salvarEntity(entity:Pessoa) {
        if (this.isEdit) {
            this.update(entity);
            return;
        }
        this.create(entity);
    }

    private update(entity:Pessoa){
        this.service.update(entity)
            .then(response => response.json())
            .then(pessoa => {
                this.entity = pessoa;
                alert("Pessoa alterada com sucesso!");
                this.router.navigateToRoute("list");
            }).catch(error => {
            alert(`${error.status}: erro ao alterar!`);
        });
    }

    private create(entity:Pessoa){
        this.service.create(entity)
            .then(response => {
                alert("Pessoa salva com sucesso!");
                this.router.navigateToRoute("list");
            }).catch(error => {
            alert(`${error.status}: erro ao salvar!`);
        });
    }


}