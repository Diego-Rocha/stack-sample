import {Router, RouterConfiguration} from "aurelia-router";

export class App {
  router: Router;

  dialogMessage;
  dialogMessageTitle;
  dialogMessageContent;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Index';
    config.map([
      {
        route: ['', 'index'],
        name: 'index',
        moduleId: './view/index/index',
        nav: true,
        title: 'Hello world (Bindable teste)'
      },
      {
        route: ['pessoas'],
        name: 'pessoas',
        moduleId: './view/pessoas/index',
        nav: true,
        title: 'Pessoas (CRUD teste)'
      }
    ]);

    this.router = router;
  }

  openDialogMessage(title: string, content: string) {
    this.dialogMessageTitle.innerHTML = title;
    this.dialogMessageContent.innerHTML = content;
    this.dialogMessage.open();
  }

}
