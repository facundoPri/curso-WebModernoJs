insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null)


insert into prefeitos
    (nome, cidade_id)
values
('Rafael Graca', null); -- como es nulo no hay problema con la regla que dice que tiene que tener cidade_id unico

insert into prefeitos
    (nome, cidade_id)
values
    ('Rodrigo Pinheito', 3) -- en este caso si da error ya que esta duplicado
