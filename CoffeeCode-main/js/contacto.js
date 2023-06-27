function validateForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var emailInput = document.getElementById("InputEmail");
    var nombreInput = document.getElementById("InputNombre");
    var mensajeInput = document.getElementById("Textarea1");

    // Validación de correo electrónico
    var emailPattern = new RegExp(emailInput.pattern);
    if (!emailPattern.test(emailInput.value)) {
        Swal.fire({
            text: 'Ingrese una dirección de correo electrónico válida.',
            heightAuto: 'false',
            background: '#33241b',
            color: '#eddcc6',
            confirmButtonColor: '#281c16',
        })
        return;
    }

    // Validación de nombre
    var nombrePattern = new RegExp(nombreInput.pattern);
    if (!nombrePattern.test(nombreInput.value)) {
        Swal.fire({
            text: 'Ingrese un nombre válido.',
            heightAuto: 'false',
            background: '#33241b',
            color: '#eddcc6',
            confirmButtonColor: '#281c16',
        })
        return;
    }

    // Validación de mensaje
    if (mensajeInput.value.trim() === "") {
        Swal.fire({
            text: 'Ingrese un mensaje.',
            heightAuto: 'false',
            background: '#33241b',
            color: '#eddcc6',
            confirmButtonColor: '#281c16',
        })
        return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario
    document.getElementById("myForm").submit();
}
