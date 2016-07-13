package io.diego.app.controller;

import io.diego.domain.model.entity.pessoa.Pessoa;
import io.diego.domain.service.pessoa.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @CrossOrigin(origins = "http://127.0.0.1:8081")
    @RequestMapping("/pessoas")
    public List<Pessoa> index() {
        return pessoaService.findAll();
    }


}
