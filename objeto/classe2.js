// herancas en clases
class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // super significa que va a revisar en el de arriba// osea que va a ser igual al de arriba
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // en este caso yo pongo que silva va a ser el sobrenome de arriba asi que lo va seteando hasta llegar al avo y despues baja hasta filho pero con la profissao tambien
    }
}

const filho = new Filho
console.log(filho)