-- Criando tabela estado !
create table estados (-- metemos las columnas que le queremos meter a nuestra nuva tabla adentro de los parentecis
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, -- es un entero sin señal no nulo
    nome VARCHAR(45) NOT NULL,-- tendra como maximo 45 caracteres y tiene que estas pasado si o si, osea no puede ser nulo
    sigla VARCHAR(2) NOT NULL, 
    regiao ENUM('Norte', 'Nordeste','Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,-- tiene que ser uno de los valores pasados adentro del enum
    populacao DECIMAL(5,2) NOT NULL,--se puesen tener 5 numeros en los decimales siendo apenas dos fluctuantes
    PRIMARY KEY (id),-- la columna primaria es el id
    UNIQUE KEY (nome), -- no se puede repetir el nombre 
    UNIQUE KEY (sigla) -- tampoco se puede repetri la sigla
);