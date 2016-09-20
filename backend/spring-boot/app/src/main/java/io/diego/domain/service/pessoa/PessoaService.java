package io.diego.domain.service.pessoa;

import io.diego.domain.model.entity.pessoa.Pessoa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PessoaService {
    Page<Pessoa> findAll(Pageable pageable);

    Pessoa findOne(Long id);

    Pessoa save(Pessoa entity);

    boolean exists(Pessoa entity);

    void delete(Pessoa entity);
}
