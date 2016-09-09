define(["require", "exports"], function (require, exports) {
    "use strict";
    var Index = (function () {
        function Index() {
        }
        Index.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'index', ':page'], moduleId: './list', name: 'list' },
                { route: 'edit/:id', moduleId: './edit', name: 'edit' },
                { route: 'create', moduleId: './edit', name: 'create' }
            ]);
            this.router = router;
        };
        return Index;
    }());
    exports.Index = Index;
});

//# sourceMappingURL=index.js.map
