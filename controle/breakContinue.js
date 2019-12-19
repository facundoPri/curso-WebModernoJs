const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if (x == 5) {
        break // en este caso va a cortar el codigo cuando llegua a 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue // en este caso va a ocuntinuar pero saltando en le momento que llega a 5
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo //normalmente el break actuaria apenas en el mas cercano pero con el rotulo que creamos le estoy atribuyendo el break al externo
        console.log(`Par = ${a},${b}`)
    }
}
