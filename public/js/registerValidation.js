console.log('Archivo registerValidation vinculado');

window.addEventListener('load', function(){
    let formulario = document.querySelectorAll('.register-input');

    formulario.addEventListener('submit', function(e){
        
        let errores = [];

            let campoNombre = document.querySelector('#nombre');

            if(campoNombre.value == ''){
                errores.push('El campo "Nombre" no puede estar vacío');
            }else if(campoNombre.value.length < 2){
                errores.push('El campo "Nombre" debe tener al menos 2 caracteres');
            }

            let campoApellido = document.querySelector('#apellido');

            if(campoApellido.value == ''){
                errores.push('El campo "Apellido" no puede estar vacío');
            }else if(campoApellido.value.length < 2){
                errores.push('El campo "Apellido" debe tener al menos 2 caracteres');
            }

            let campoContraseña = document.querySelector("input.contraseña")

        if (campoContraseña.value == "") {
            errores.push("el campo de contraseña no tiene que estar vacio")
        } else if (campoContraseña.value.length < 8) {
            errores.push("la contraseña debe tener al menos 8 caracteres")
        }

        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector('div.errores ul');
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
                
            }
        }
    })
})