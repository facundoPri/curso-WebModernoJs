create table if not exists empresas (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj int unsigned,
    primary key (id),
    unique key (cnpj)
)

-- cidades_empresas
create table if not exists empresas_unidades (
    empresa_id int unsigned not null,
    cidade_id int unsigned not null,
    sede tinyint(1) not null, -- tinyint(1) me esta limitando para que apenas pueda poner un unico valor, ya que queremos utilizarlo como un booleano
    primary key (empresa_id, cidade_id)
);
