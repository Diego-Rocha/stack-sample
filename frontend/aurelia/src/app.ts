import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;

    dialogMessage;
    dialogMessageTitle;
    dialogMessageContent;

    configureRouter(config: RouterConfiguration, router: Router) {
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
    }

    openDialogMessage(title: string, content: string) {
        this.dialogMessageTitle.innerHTML = title;
        this.dialogMessageContent.innerHTML = content;
        this.dialogMessage.open();
    }

}
