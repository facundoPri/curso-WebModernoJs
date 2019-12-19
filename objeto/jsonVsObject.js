// json tiene un formato textual, no es algo que pueda ser ejecutado
//sirve para compartir datos en el mismo codigo y con el esteriro
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c}}
console.log(JSON.stringify(obj)) //trasformamos un objeto a una JSON

//console.log(JSON.parse("{a:1,b:2,c:3}")) // quiero pasar un JSON a objeto pero este tiene un formato muy especifico que si no es respetado no sera reconocido como JSON
//console.log(JSON.parse("{'a':1,'b':2,'c':3}")) // tenemos un problema y es que debe esta en aspas doble todos los atributos
console.log(JSON.parse('{"a":1,"b":2,"c":3}')) // este si  funciona y me devuelve un objeto
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // los atributos y los string deben estar entre aspas dobles pero el resto entra normal
