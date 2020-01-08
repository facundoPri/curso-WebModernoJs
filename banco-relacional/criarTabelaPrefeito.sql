create table if not exists prefeitos (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary key (id),
    unique key (cidade_id), --estamos diciendo que la foreign key no acepta duplicidad relacion uno para uno
    foreign key (cidade_id) references cidades (id)
);