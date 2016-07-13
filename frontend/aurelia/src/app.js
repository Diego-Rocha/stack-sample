export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      {route: ['', 'index'], name: 'index', moduleId: './index/index', nav: true, title: 'Index'},
      {route: ['pessoas'], name: 'pessoas', moduleId: './pessoas/pessoas', nav: true, title: 'Pessoas'}
    ]);

    this.router = router;
  }
}