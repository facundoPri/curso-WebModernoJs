const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 2', function(){ // primero pongo el tiempo( de 5 en 5 seg, cualquier min, a las 15 horas, cualquier dia, cualquier mes, un martes) y ejecutar una funcion cada vez que se pida
 console.log('Executando tarefa1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) // despues de 20000 segundo se cancelara la tarefa1

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // los dias seran desde lunes(1) a viernes(5)
regra.hour = 15 // a las 15 horas
regra.second = 30 // a los 30 segundos

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})