DROP TABLE IF EXISTS pessoa;

CREATE TABLE pessoa(
  id INTEGER NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  CONSTRAINT pessoa_pk PRIMARY KEY (id)
)