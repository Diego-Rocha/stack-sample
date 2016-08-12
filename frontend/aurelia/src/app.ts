import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      {route: ['', 'index'], name: 'index', moduleId: './view/index/index', nav: true, title: 'Index'},
      {route: ['pessoas'], name: 'pessoas', moduleId: './view/pessoas/index', nav: true, title: 'Pessoas'}
    ]);

    this.router = router;
  }
}
