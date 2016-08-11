package io.diego.app.controller;

import io.diego.domain.model.entity.pessoa.Pessoa;
import io.diego.domain.service.pessoa.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@CrossOrigin
public class PessoaController {

    @Autowired
    private PessoaService service;

    private static final String PATH_ALL = "/pessoas";
    private static final String PATH_ONE = "/pessoas/{id}";

    @RequestMapping(value = PATH_ALL, method = RequestMethod.GET)
    public ResponseEntity<List<Pessoa>> getAll() {
        List<Pessoa> entities = service.findAll();
        if (entities.isEmpty()) {
            return new ResponseEntity<List<Pessoa>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Pessoa>>(entities, HttpStatus.OK);
    }

    @RequestMapping(value = PATH_ONE, method = RequestMethod.GET)
    public ResponseEntity<Pessoa> getOne(@PathVariable Long id) {
        Pessoa entity = service.findOne(id);
        if (entity == null) {
            return new ResponseEntity<Pessoa>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Pessoa>(entity, HttpStatus.OK);
    }

    @RequestMapping(value = PATH_ALL, method = RequestMethod.POST)
    public ResponseEntity<Void> create(@RequestBody Pessoa entity, UriComponentsBuilder ucBuilder) {
        if (service.exists(entity)) {
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        service.save(entity);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path(PATH_ONE).buildAndExpand(entity.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @RequestMapping(value = PATH_ONE, method = RequestMethod.PUT)
    public ResponseEntity<Pessoa> update(@PathVariable Long id, @RequestBody Pessoa entity) {
        Pessoa localEntity = service.findOne(id);
        if (localEntity == null) {
            return new ResponseEntity<Pessoa>(HttpStatus.NOT_FOUND);
        }
        localEntity.setNome(entity.getNome());
        service.save(localEntity);
        return new ResponseEntity<Pessoa>(localEntity, HttpStatus.OK);
    }

    @RequestMapping(value = PATH_ONE, method = RequestMethod.DELETE)
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        Pessoa entity = service.findOne(id);
        if (entity == null) {
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        service.delete(entity);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

}
