select * from estados where id = 25

INSERT INTO cidades (nome, area, estado_id)
values("Campinas", 795, 25)

INSERT into cidades (nome, area, estado_id)
values ('Niteroi', 133.9, 19)

INSERT INTO cidades 
    (nome, area, estado_id)
VALUES (
    'Caruaru',
    920.6,
    (select id from estados where sigla = 'PE')
)

INSERT INTO cidades 
    (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    288.2,
    (select id from estados where sigla = 'CE')
)

select * from cidades