package io.diego.app.controller.pessoa;

import io.diego.domain.model.entity.pessoa.Pessoa;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.util.UriComponentsBuilder;

@Api(description = "CRUD de pessoas",tags = "pessoas")
public interface PessoaController {

    String PATH_ALL = "/pessoas";
    String PATH_ONE = PATH_ALL + "/{id}";

    @ApiOperation("Lista de pessoas")
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(path = PATH_ALL, method = RequestMethod.GET)
    ResponseEntity<Page<Pessoa>> getAll(Pageable pageable);

    @ApiOperation("Retorna uma pessoa")
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(path = PATH_ONE, method = RequestMethod.GET)
    ResponseEntity<Pessoa> getOne(Long id);

    @ApiOperation("Adiciona uma pessoa")
    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(path = PATH_ALL, method = RequestMethod.POST)
    ResponseEntity<Void> create(Pessoa entity, UriComponentsBuilder ucBuilder);

    @ApiOperation("Modifica uma pessoa")
    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(path = PATH_ONE, method = RequestMethod.PUT)
    ResponseEntity<Pessoa> update(Long id, Pessoa entity);

    @ApiOperation("Exclui uma pessoa")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @RequestMapping(path = PATH_ONE, method = RequestMethod.DELETE)
    ResponseEntity<Void> delete(Long id);
}
