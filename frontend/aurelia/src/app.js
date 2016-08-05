export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      {route: ['', 'index'], name: 'index', moduleId: './modules/index/index', nav: true, title: 'Index'},
      {route: ['pessoas'], name: 'pessoas', moduleId: './modules/pessoas/index', nav: true, title: 'Pessoas'}
    ]);

    this.router = router;
  }
}