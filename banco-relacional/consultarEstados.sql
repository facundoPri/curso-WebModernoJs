select * from estados

select Sigla, nome as 'Nome do Estado' from estados -- forma de poner un lable y recordad que sql es case sensitive osea que no le importa si es minuscula o mayuscula
where regiao = 'Sul'

select nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc -- desc es decrecente y si no pongo nada es creciente
