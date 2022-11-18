
export const inputmedio = $("#mediun-btn")
export const inputImportante = $("#important-btn")
export const inputbajo = $("#low-btn")
export const labelImportante = $("label#imp-btn")
export const labelMedio = $("label#media-btn")
export const labelbajo = $("label#bajo-btn")


export const evento = parametro =>{
    if(parametro === inputImportante){
        labelImportante.addClass("active-label")
        labelMedio.removeClass("active-label")
        labelbajo.removeClass("active-label")
            
        if(inputImportante.prop("checked") === true){
            inputmedio.prop("checked", false)
            inputbajo.prop("checked", false)
            }
    }
    if(parametro === inputmedio){
        labelMedio.addClass("active-label")
        labelImportante.removeClass("active-label")
        labelbajo.removeClass("active-label")
    
        if(inputmedio.prop("checked") === true){
            inputImportante.prop("checked", false)
            inputbajo.prop("checked", false)
        }
    }
    if(parametro === inputbajo){
        labelbajo.addClass("active-label")
        labelMedio.removeClass("active-label")
        labelImportante.removeClass("active-label")
    
        if(inputbajo.prop("checked") === true){
            inputmedio.prop("checked", false)
            inputImportante.prop("checked", false)
        }
        }
}
inputImportante.on("click", ()=>{evento(inputImportante)})

inputmedio.on("click", ()=>{evento(inputmedio)})

inputbajo.on("click", ()=>{evento(inputbajo)})







   
    
    