const lvSat = [30, 31, 34, 39, 45, 52, 61, 72, 84, 97, 112, 129, 147, 166, 187, 210, 234, 259, 286, 315, 345, 376, 409, 444, 480, 517, 556, 597, 639, 682, 727, 774, 822, 871, 922, 975, 1029, 1084, 1141, 1200, 1260, 1321, 1384, 1449, 1515, 1582, 1651, 1722, 1794, 1867, 1942]

function dRandom(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let lv = 0
let hora = 0
let diamantes = 0
let xp = 0
let xpNecesaria = 300
let contadorParaRandom = 0
let diamantesRandom

let caso1 = [100, 50] // 100 diamantes equivale a 50xp
let caso2 = [500, 275] // 500 diamantes equivale a 275xp
let caso3 = [1000, 600] // 1000 =  600xp
let caso4 = [5000, 3250] // 5000 = 3250xp
let caso5 = [25000, 17500] // 25000 = 17500xp
let caso6 = [100000, 75000] // 100000 = 75000xp
let caso7 = [500000, 400000] // 500000 = 400000xp

while (lv < 50){
    hora++
    contadorParaRandom++
    diamantes = diamantes + (lvSat[lv] / 10)
    if (contadorParaRandom == 10) {
        contadorParaRandom = 0
        diamantesRandom = dRandom(10, 150)
        diamantes += diamantesRandom
        console.log(`Recibiste ${diamantesRandom} diamantes`)
        diamantesRandom = 0
    }
    if (diamantes >= caso4[0]){ // cambiar
        diamantes -= caso4[0] // cambiar 
        xp += caso4[1] //cambiar
        console.log(`A las ${hora} horas de juego tenes ${xp} de exp y estas en el nivel ${lv} `)
    }
    if (xp >= xpNecesaria){
        xp -= xpNecesaria
        xpNecesaria = xpNecesaria + 150
        lv++
        console.log(`Subiste un nivel a las ${hora} horas, tu nivel actual es ${lv}`)
    }
    console.log('horas: ' +hora)
    console.log('diamantes: ' +diamantes)
}

console.log(`
Felicitaciones llevaste al nivel 50 a las ${hora} horas de juego, lo que es igual a aproximadamente ${hora/24} dias`)