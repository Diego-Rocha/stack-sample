define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
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
                },
                {
                    route: ['web-components'],
                    name: 'web-components',
                    moduleId: './view/web-components/index',
                    nav: true,
                    title: 'Web Components'
                }
            ]);
            this.router = router;
        };
        App.prototype.openDialogMessage = function (title, content) {
            this.dialogMessageTitle.innerHTML = title;
            this.dialogMessageContent.innerHTML = content;
            this.dialogMessage.open();
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map
