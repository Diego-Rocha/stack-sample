package io.diego.domain.service.pessoa;

import io.diego.domain.model.entity.pessoa.Pessoa;

import java.util.List;

public interface PessoaService {
    List<Pessoa> findAll();
}
