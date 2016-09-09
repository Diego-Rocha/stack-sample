export class CurrentPageValueConverter {
    toView(value:number) {
        return value;
    }
}
export class PrevPageValueConverter {
    toView(value:number) {
        return value -1;
    }
}
export class NextPageValueConverter {
    toView(value:number) {
        return value + 1;
    }
}
