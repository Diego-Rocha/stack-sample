import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
import {Pessoa} from '../model/pessoa';

@inject(HttpClient)
export class PessoaService {

    private httpClient:HttpClient;

    constructor(httpClient: HttpClient) {
        httpClient.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('http://localhost:8080/');
        });
        this.httpClient = httpClient;
    }

    getAll() {
        return this.httpClient.fetch('pessoas');
    }

    getOne(id:number){
        return this.httpClient.fetch(`pessoas/${id}`);
    }

    create(entity:Pessoa){
        return this.httpClient.fetch('pessoas',{
            method: 'post',
            redirect: 'follow',
            body: json(entity)
        });
    }

    update(entity:Pessoa){
        return this.httpClient.fetch(`pessoas/${entity.id}`,{
            method: 'put',
            body: json(entity)
        });
    }

    delete(id:number){
        return this.httpClient.fetch(`pessoas/${id}`,{
            method: 'delete'
        });
    }

}