define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'index'], name: 'index', moduleId: './view/index/index', nav: true, title: 'Index' },
                { route: ['pessoas'], name: 'pessoas', moduleId: './view/pessoas/index', nav: true, title: 'Pessoas' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map
