// vamos a crear un ejemplo muy parecido con el de la clase thisEBind2 para mostrar que el this ahora no es variable, se queda adentro del contexto lexico 
function Pessoa(){
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa