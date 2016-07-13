package io.diego.domain.model.entity.pessoa;


import javax.persistence.*;

@Entity
@Table(name = "pessoa", schema = "diego_sample")
public class Pessoa {

    private Long id;
    private String nome;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    public Long getId() {
        return id;
    }

    @Column(name = "nome", nullable = false)
    public String getNome() {
        return nome;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public void setNome(String nome) {
        this.nome = nome;
    }
}
