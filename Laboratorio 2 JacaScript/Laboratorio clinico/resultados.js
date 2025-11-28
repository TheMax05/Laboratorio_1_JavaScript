window.addEventListener("DOMContentLoaded",function(){
    //Obtener los parametros de la URL enviados por el Form
    const urlParams=new URLSearchParams(window.location.search);
    //extraer los parametros de la URL y guardarlos en contactos
    const nombre = urlParams.get("nombres");
    const cedula = urlParams.get("cedula");
    const email = urlParams.get("email");
    const telefono = urlParams.get("telefono");
    const tipoExamen = urlParams.get("tipoExamen");
    const fechaExamen = urlParams.get("fechaExamen");

    //Verificar si hay datos
    if (nombre && cedula && email && telefono && tipoExamen && fechaExamen){
        const elementoNombre = document.getElementById("mostrarNombre");
        const elementoCedula = document.getElementById("mostrarCedula");
        const elementoEmail = document.getElementById("mostrarEmail");
        const elementoTelefono = document.getElementById("mostrarTelefono");
        const elementoTipoExamen = document.getElementById("mostrarTipoExamen");
        const elementoFechaExamen = document.getElementById("mostrarFechaExamen");

        elementoNombre.textContent = decodeURIComponent(nombre);
        elementoCedula.textContent = decodeURIComponent(cedula);
        elementoEmail.textContent = decodeURIComponent(email);
        elementoTelefono.textContent = decodeURIComponent(telefono);
        elementoTipoExamen.textContent = decodeURIComponent(tipoExamen);
        elementoFechaExamen.textContent = decodeURIComponent(fechaExamen);
    }else{
        this.alert("No se encontraron datos");
    }
});
function Volveralformulario(){
    window.location.href="index.html";
}