import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";
import {App} from "../../app";
import {PessoaService} from "../../service/pessoa-service";
import {Pessoa} from "../../model/pessoa";

@inject(PessoaService, Router, App)
export class List {

  private service: PessoaService;
  private router: Router;
  private app: App;

  public pagination = {number: 0, content: []};

  constructor(service: PessoaService, router: Router, app: App) {
    this.service = service;
    this.router = router;
    this.app = app;
  }

  activate(params) {
    this.pagination.number = parseInt(params.page) || 0;
    return this.list();
  }

  list() {
    return this.service.getAll(this.pagination.number)
      .then(response => response.json())
      .then(result => {
        this.pagination = result;
      });
  }

  createEntity() {
    this.router.navigateToRoute("create");
  }

  editEntity(entity: Pessoa) {
    this.router.navigateToRoute("edit", {id: entity.id});
  }

  deleteEntity(entity: Pessoa) {
    if (!window.confirm("Tem certeza?")) {
      return;
    }
    this.service.delete(entity.id).then(response => {
      let index: number = this.pagination.content.indexOf(entity);
      this.pagination.content.splice(index, 1);
      this.list();
      this.app.openDialogMessage("Info", "Pessoa removida com sucesso!");
    }).catch(error => {
      alert(`${error.status}: erro ao excluir!`);
    });
  }
}
