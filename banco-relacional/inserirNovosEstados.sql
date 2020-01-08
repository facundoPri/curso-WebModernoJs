insert into estados (id, nome, sigla, regiao, populacao)
values(1000, 'Novo', 'NV', 'Sul', 2.54)

insert into estados ( nome, sigla, regiao, populacao)
values('Mais Novo', 'MV', 'Norte', 2.51)

SELECT * FROM estados
-- podemo ver que si ponemos para que el id se acrecente de forma automatico este siempre sera el mayor valor con un uno sumado por eso permite haber agujeros como el de recien