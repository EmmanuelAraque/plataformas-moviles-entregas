var personaEjemplo = {
    "apellido": "Perez",
    "nombre": "Juan",
    "edad": 20,
    "documento": 12345
};

/**
 * 01 - crearPersona
 * 
 * Recibe
 * - `nombre`: string, con el nombre.
 * - `apellido`: string, con el apellido.
 * - `edad`: numero entero, con la edad de la persona.
 * - `documento`: numero entero, con el documento de la persona.
 * 
 * Retorna: 
 * - un objeto, representando una persona, con los campos recibidos.
 * 
 * Ejemplos:
 * - crearPersona("Juan", "Pérez", 20, 123456)
 * {
 *   nombre: "Juan",
 *   apellido: "Pérez",
 *   edad: 20,
 *   documento: 123456,
 * }
 */
function crearPersona(nombre, apellido, edad, documento) {
    let crearObjpersona = {
        nombre: nombre ,
        apellido: apellido ,
        edad: edad,
        documento: documento 

    };
    return crearObjpersona; 
}

console.log("resultado crearPersona: ", crearPersona("Juan", "Pérez", 20, 123456));


/**
 * 02 - agregarApodo
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * - `apodo`: string, con el apodo que agregarle a la persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un nuevo campo 'apodo'.
 */
function agregarApodo(persona, apodo) {
    let crearNuevaPersona = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad,
        documento: persona.documento,
        apodo: apodo
    };
    return crearNuevaPersona;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "JuanPe"));
let personaInteresante = crearPersona("emmanuel","araque",18,123444);
console.log("resultado agregarApodo: ", agregarApodo(personaInteresante, "JuanPe"));

function sinDocumento(persona) {
    let SacarDni = {
        nombre: persona.nombre,
        apellido: persona.apellido,
        edad: persona.edad

    };
    return SacarDni;
}

console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));


/**
 * 04 - nombreCompletoDePersona
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un string, con el nombre completo de una persona. Asumimos que nombre completo tiene el formato 
 * "Apellido, Nombre". Por ejemplo para una persona con nombre "Juan" y apellido "Pérez", 
 * el nombre completo sería "Pérez, Juan".
 */
function nombreCompletoDePersona(persona) {
    let nombreCompleto = persona.apellido + " " + persona.nombre 
    return nombreCompleto;
     
    
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));


/**
 * 05 - felizCumpleaños
 * 
 * Recibe
 * - `persona`: objeto de la forma persona.
 * 
 * Retorna: 
 * - un objeto, representando a la misma persona recibida, pero con un año más. 
 */
function felizCumpleaños(persona) {
    let Cumpleaños = {
        nombre : persona.nombre,
        apellido : persona.apellido,
        edad : persona.edad + 1,
        documento : persona.documento,
    };

    return Cumpleaños;
    
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));


/**
 * 06 - sonLaMismaPersona
 * 
 * Recibe
 * - `persona1`: Un objeto de la forma persona.
 * - `persona2`: Otro objeto de la forma persona.
 * 
 * Retorna: 
 * - un valor boolean ('true' o 'false'), indicando si persona1 y persona2 son la misma persona.
 */
function sonLaMismaPersona(persona1, persona2) {
    if (persona1 == persona2){
        return true;
    }
    else {
        return false;
    }
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Perez", nombre: "Juan", edad: 20, documento: 12345 }
));
