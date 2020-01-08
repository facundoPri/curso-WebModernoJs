select e.nome as Estado, c.nome as Cidade, Regiao from estados e, cidades c -- este ass no es necesario si lo usas con mysql pero en este plugin da un problema
WHERE e.id = c.estado_id

select 
    c.nome as Cidade,
    e.nome as Estado,
    Regiao
from estados e
inner join cidades c 
    on e.id = c.estado_id -- si quiero poner mas criterios solo tengo que ponerle un and