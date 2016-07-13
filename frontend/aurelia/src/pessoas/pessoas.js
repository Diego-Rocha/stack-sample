import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Pessoas {
    
    pessoas = [];

    constructor(http) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8080/');
        });
        this.http = http;
    }

    activate() {
        return this.http.fetch('pessoas')
            .then(response => response.json())
            .then(pessoas =>  this.pessoas = pessoas);
    }
}