import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class PessoaService {

    constructor(http) {
        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8080/');
        });
        this.http = http;
    }

    getAll() {
        return this.http.fetch('pessoas');
    }

    getOne(id){
        return this.http.fetch(`pessoas/${id}`);
    }

    create(entity){
        return this.http.fetch('pessoas',{
            method: 'post',
            redirect: 'follow',
            body: json(entity)
        });
    }

    update(entity){
        return this.http.fetch(`pessoas/${entity.id}`,{
            method: 'put',
            body: json(entity)
        });
    }

    delete(id){
        return this.http.fetch(`pessoas/${id}`,{
            method: 'delete'
        });
    }

}