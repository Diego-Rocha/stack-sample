package io.diego.app.controller.pessoa;

import io.diego.domain.model.entity.pessoa.Pessoa;
import io.diego.domain.service.pessoa.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@CrossOrigin
public class PessoaControllerImpl implements PessoaController {

    @Autowired
    private PessoaService service;

    @Override
    public ResponseEntity<Page<Pessoa>> getAll(@PageableDefault Pageable pageable) {
        Page<Pessoa> entities = service.findAll(pageable);
        return new ResponseEntity(entities, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Pessoa> getOne(@PathVariable Long id) {
        Pessoa entity = service.findOne(id);
        if (entity == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity(entity, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Void> create(@RequestBody Pessoa entity, UriComponentsBuilder ucBuilder) {
        if (service.exists(entity)) {
            return new ResponseEntity(HttpStatus.CONFLICT);
        }
        service.save(entity);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path(PATH_ONE).buildAndExpand(entity.getId()).toUri());
        return new ResponseEntity(headers, HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Pessoa> update(@PathVariable Long id, @RequestBody Pessoa entity) {
        Pessoa localEntity = service.findOne(id);
        if (localEntity == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        localEntity.setNome(entity.getNome());
        service.save(localEntity);
        return new ResponseEntity(localEntity, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        Pessoa entity = service.findOne(id);
        if (entity == null) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        service.delete(entity);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
