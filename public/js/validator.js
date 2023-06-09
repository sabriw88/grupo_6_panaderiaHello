window.addEventListener("load", function () {
    let formulario = document.querySelector("form.register-input")

    formulario.addEventListener("submit", function (e) {

        let errores = [];

        let campoContraseña = document.querySelector("input.contraseña")

        if (campoContraseña.value == "") {
            errores.push("el campo de contraseña no tiene que estar vacio")
        } else if (campoContraseña.value.length < 8) {
            errores.push("la contraseña debe tener al menos 8 caracteres")
        }

        if (errores.length > 0) {
            e.preventDefault();
            

            let ulErrores = document.querySelector("div.errores ul")

            for (let i = 0; i < errores.length; i++) {

        

                    ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
         
            }


        }
    })





})
