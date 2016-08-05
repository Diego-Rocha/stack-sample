package io.diego.domain.service.pessoa;

import io.diego.domain.model.entity.pessoa.Pessoa;

import java.util.List;

public interface PessoaService {
    List<Pessoa> findAll();

    Pessoa findOne(Long id);

    Pessoa save(Pessoa entity);

    boolean exists(Pessoa entity);

    void delete(Pessoa entity);
}
