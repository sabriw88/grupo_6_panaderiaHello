

window.addEventListener('load', function(){

    let formulario = document.querySelector('form.form-edit');
  

    formulario.addEventListener('submit', function(event){
        
        let errores = [];
        //validacion del nombre
let nombreProducto = document.querySelector('#name');


if(nombreProducto.value == ''){
errores.push('El campo "Nombre" no puede estar vacío');
}
else if(nombreProducto.value.length < 2){
errores.push('El campo "Nombre" debe tener al menos 5 caracteres');

}
//validacion descripcion


let descripcionProducto = document.querySelector('#description');
if(descripcionProducto.value.length < 2){
errores.push('El campo "Descripcion" debe tener al menos 20 caracteres');}


// Validación del campo imagen
let imagenProducto = document.querySelector('#image');
let allowedFormats = ['jpg', 'jpeg', 'png', 'gif'];
let fileExtension = imagenProducto.value.split('.').pop().toLowerCase();

if (imagenProducto.value !== '' && !allowedFormats.includes(fileExtension)) {
    errores.push('El campo "Imagen" debe ser en formato JPG, JPEG, PNG o GIF');
}   


if(errores.length > 0){
    event.preventDefault();

    
      


    let ulErrores = document.querySelector('div.errores ul');
    ulErrores.innerHTML = ''; // Limpiar los errores anteriores
    for (let i = 0; i < errores.length; i++) {

  
            ulErrores.innerHTML += '<li>' + errores[i] + '</li>'  

    }
   

} 

    })
})




