// usamos una factory para crear una nueva instancia // retorna un novo objeto
// en este caso lo que es exportado es una funcion factory
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}