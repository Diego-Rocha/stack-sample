import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.use.plugin('aurelia-polymer');
    aurelia.use.plugin('aurelia-html-import-template-loader');

    aurelia.start().then(() => aurelia.setRoot());
}
