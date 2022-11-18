import * as estilo  from "./estilo.js";
import * as funcion from "./functions.js"
const botonSubmit = $("#enviar")

export let nombreTarea = $("#nombre-tarea")
export let horasTarea = $("#horas")
export let desde = $("#desde")
export let hasta = $("#hasta")
export let importante = $("#container-importante")
export let medio = $("#container-medio")
export let bajo = $("#container-bajo")
const formulario = $("#formulario")

botonSubmit.on("click", ()=>{
    //div contenedor
    const div = document.createElement("div");

    //Titulo
    const titulo = document.createElement("h3")
    titulo.innerText = nombreTarea.val()
    
    //Horas dedicadas
    const horasDedicadas = document.createElement("h4")
    horasDedicadas.innerText = `Dedicacion: ${horasTarea.val()} Horas`

    //Desde hasta "Horas"
    const desdeHasta = document.createElement("h5")
    desdeHasta.innerText = `Desde ${desde.val()} Hasta ${hasta.val()}` 

    //Añadiendo datos al div
    div.appendChild(titulo)
    div.appendChild(horasDedicadas)
    div.appendChild(desdeHasta)

    //Metiendo la info en los contenedores de diferente importancia y comprobando que la informacion no este vacia
    if(estilo.inputImportante.prop("checked")){
        if(titulo.text !== "" && horasDedicadas.text !== "" && desde.val() !== "" && hasta.val() !== ""){
            console.log(`Se a añadido ${div} corrrectamente en el contenedor Importante`)
            importante.append(div)
            funcion.resetearCampos()
        }else{
            console.error("Los datos no han sido rellenados ")
            funcion.errores()
        }
    }
    if(estilo.inputmedio.prop("checked")){
        if(titulo.innerText !== "" && horasDedicadas.innerText !== "" && desde.val() !== "" && hasta.val() !== ""){
            console.log(`Se a añadido ${div} corrrectamente en el contenedor Medio`)
            medio.append(div)
            funcion.resetearCampos()
        }else{
            console.error("Los datos no han sido rellenados ")
            funcion.errores()
        }
    }
    if(estilo.inputbajo.prop("checked")){
        if(titulo.innerText !== "" && horasDedicadas.innerText !== "" && desde.val() !== "" && hasta.val() !== ""){
            console.log(`Se a añadido ${div} corrrectamente en el contenedor Bajos`)
            bajo.append(div)
            funcion.resetearCampos()
        }else{
            console.error("Los datos no han sido rellenados ")
            funcion.errores()
        }
    }
})










