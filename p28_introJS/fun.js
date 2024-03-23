// comentario bloque con asterisco (lo verde) todo lo que vaya por dentro no se ve en el proyecto se explica las funciones. Por ejemplo funcion que calcula un número par dado un input de un número.

const alumno = {
    nombre: "Mike", 
    // string- comilla de apertura - comilla de cierre
    apellidos: "Wasowski",
    edad: 33,
    curso: "4º",
    asignaturas_pendientes: false,
    asignauras: ["css", "html", "js"],
    aficiones: {
    deportes: ["futbol", "baloncesto"],
    ocio: "pintar figuritas de plomo",
    idiomas:{
    latinos:[
    {
    europeos:["español", "francés"]
    }
    ]
    }
    }
    } 

    console.log(alumno.aficiones.idiomas.latinos[0].europeos[1]);