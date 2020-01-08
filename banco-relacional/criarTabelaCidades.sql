CREATE TABLE IF NOT EXISTS cidades ( -- es una rescticcion que impide que me de un error si sin querer termino pidiendo para que duplique una tabla
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id) -- le hacemos una referencia a id de la tabla estados en la columna que se llama estado_id
);

--CREATE TABLE IF NOT EXISTS teste (
--    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
--);

--DROP TABLE IF EXISTS teste;
