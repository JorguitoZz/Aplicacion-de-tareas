import * as index from "./index.js"
import * as estilo  from "./estilo.js";




export function mensajes(mensaje, id, close) {
    const alert = document.createElement("div")

    alert.innerHTML = `<div class="alerts " id="${id}">
                            <p class="error-alerts">
                                <box-icon name="error-circle" color="red">
                                </box-icon>
                                    ${mensaje}
                            </p>
                            <box-icon name='x' id="close-${close}" ></box-icon>
                        </div>`
        formulario.append(alert)
}

export function cerrarAlertas(id){
    const cerrarAlertTarea = $(`#close-${id}`)
    cerrarAlertTarea.on("click", ()=>{
        const padre = cerrarAlertTarea.parent()
        const abuelo = padre.parent()
        abuelo.remove()
    })
}

export function errores(){
    const errorNombreTarea = document.getElementById("alert-tarea-nombre")
    const errorHorasTarea = document.getElementById("alert-horas-tarea")
    const errorDesde = document.getElementById("alert-desde-hora")
    const errorHasta = document.getElementById("alert-hasta-hora")
    
    if(errorNombreTarea == null){
        if(index.nombreTarea.val() == ""){
            mensajes("No introduciste el nombre de la tarea", "alert-tarea-nombre", "nombre-tarea")
        }
        cerrarAlertas("nombre-tarea")  
    }
    
    
    if(errorHorasTarea == null){
        if(index.horasTarea.val() == ""){
            mensajes("No introduciste las horas de la tarea", "alert-horas-tarea", "horas-tarea")
        }
        cerrarAlertas("horas-tarea")  
    }
    
    if(errorDesde == null){
        if(index.desde.val() == ""){
            mensajes("No introduciste la hora que empezaras la tarea", "alert-desde-hora", "desde")
            const cerrarAlertTarea = $("#alert-tarea-nombre")
        }
        cerrarAlertas("desde")  
    }
        
    if(errorHasta == null){
        if(index.hasta.val() ==""){
            mensajes("No introduciste hasta que hora realizaras tarea", "alert-hasta-hora", "hasta")
        }
        cerrarAlertas("hasta")  
    }
}

export function resetearCampos(){
    index.nombreTarea.val("")
    index.horasTarea.val("")
    index.desde.val("")
    index.hasta.val("")
    estilo.inputImportante.prop("checked", false)
    estilo.inputmedio.prop("checked", false)
    estilo.inputbajo.prop("checked", false)
    estilo.labelMedio.removeClass("active-label")
    estilo.labelImportante.removeClass("active-label")
    estilo.labelbajo.removeClass("active-label")
}