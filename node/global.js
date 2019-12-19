// console.log(global)
// como inserir un atributo al global
global.MinhaApp = Object.freeze({ // es interesante usar el freeze por que sino cualquier uno puede modificar este objeto en el global
    saudacao(){
        return 'Estou en todos os lugares'
    },
    nome: 'sisntema legal'
})
// al hacer esto estamos permitiendo que todo el sistema tenga acceso a este atributo
// solo es necesario llamar al global con el require una unica vez

// no es muy recomendado alterar el global, para eso esta el sistema de modulos