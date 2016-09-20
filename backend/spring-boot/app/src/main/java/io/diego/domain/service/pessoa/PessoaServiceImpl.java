package io.diego.domain.service.pessoa;

import io.diego.domain.model.entity.pessoa.Pessoa;
import io.diego.domain.model.repository.pessoa.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PessoaServiceImpl implements PessoaService {

    @Autowired
    private PessoaRepository repository;

    public Page<Pessoa> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Pessoa findOne(Long id) {
        return repository.findOne(id);
    }

    public Pessoa save(Pessoa entity) {
        return repository.save(entity);
    }

    public boolean exists(Pessoa entity) {
        if (entity.getId() == null) {
            return false;
        }
        return repository.exists(entity.getId());
    }

    public void delete(Pessoa entity) {
        repository.delete(entity);
    }


}
