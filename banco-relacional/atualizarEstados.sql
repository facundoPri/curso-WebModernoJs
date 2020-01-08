update estados
set nome = 'Maranhão'
where sigla = 'MA'

select est.nome from estados est where sigla = "MA" -- el est es una forma de poder referirce a mi tabla si deceado

update estados
set nome = "Paraná", populacao= 11.32 -- se pueden modificar dos valores de una vex
where sigla = 'PR'

select nome, sigla, populacao -- el apellido usado arriba y aca no es necesario para cuando queremos cambiar algo de distintas columnas pero en la misma consulta
from estados where sigla = "PR"

