import {inject} from "aurelia-framework";
import {App} from '../../app';

@inject(App)
export class Index {
    public latitude: number = -27.5970319;
    public longitude: number = -48.5564422;

    public items: string[] = ["Item 1", "Item 2", "Item 3"];

    public newItem: string = "Novo Item";
    private app;

    constructor(app: App) {
        this.app = app;
    }

    public addItem(): void {
        if (this.newItem.length == 0) {
            this.app.openDialogMessage("Alerta", "Campo vazio!");
            return;
        }
        this.items.push(this.newItem);
        this.newItem = "";
    }
}