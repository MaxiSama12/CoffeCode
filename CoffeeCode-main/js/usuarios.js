
const formRegistro = document.getElementById('formRegistro')
const nombreApellido = document.getElementById('nombreApellido')
const username = document.getElementById('username')
const mailUsu = document.getElementById('mailUsu')
const claveUsu = document.getElementById('claveUsu')
const botonSubmit = document.getElementById('botonSubmit')

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

localStorage.setItem('usuarios', JSON.stringify(usuarios));

const confirmacionForm = () =>{
    Swal.fire({
        title: 'Listo!',
        text: 'Usuario registrado con exito!',
        icon: 'success',
        heightAuto: 'false',
        background: '#eddcc6',
        confirmButtonColor: '#281c16'}
      ) .then((result) => {
        window.location.href = '../index.html';});
}

formRegistro.addEventListener('input', ()=>{
    const valorNombreApellido = nombreApellido.value;
    const valorUsername = username.value;
    const valorMail = mailUsu.value;
    const valorClave = claveUsu.value;
    const patternNombre = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;
    const patternUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
    const patternMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const patternClave = /^.{8,12}$/
    
    if (
        valorNombreApellido.length < 4 ||
        valorNombreApellido.length > 40 ||
        !patternNombre.test(valorNombreApellido)
      ) {
        nombreApellido.setCustomValidity(
          "Ingrese al menos 4 caracteres validos (solo letras)"
        );
      } else {
        nombreApellido.setCustomValidity("");
      }
      if (
        valorUsername.length < 4 ||
        valorUsername.length > 16 ||
        !patternUsuario.test(valorUsername)
      ) {
        username.setCustomValidity(
          "Ingrese entre 4 y 16 caracteres"
        );
      } else {
        username.setCustomValidity("");
      }
      if (valorMail < 3 || valorMail > 30 || !patternMail.test(valorMail)) {
        mailUsu.setCustomValidity(
          "Ingrese una direccion de correo electronico valida"
        );
      } else {
        mailUsu.setCustomValidity("");
      }
      if (
        valorClave.length < 8 ||
        valorClave.length > 16 ||
        !patternClave.test(valorClave)
      ) {
        claveUsu.setCustomValidity(
          "La contraseña ingresada debe ser de 8 a 12 digitos e incluir un numero"
        );
      } else {
        claveUsu.setCustomValidity("");
      };
})


function uuidv4() {
  return crypto.randomUUID();
};

formRegistro.addEventListener('submit', (e) => {
  e.preventDefault();
  const valorNombreApellido = nombreApellido.value;
  const valorUsername = username.value;
  const valorMail = mailUsu.value;
  const valorClave = claveUsu.value;
  const patternNombre = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;
  const patternUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
  const patternMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const patternClave = /^.{8,12}$/;
  const id = uuidv4();
  let usuario = {id: id, nombreApellido: valorNombreApellido, username: valorUsername, mailUsu: valorMail, claveUsu: valorClave};


  if (
    valorNombreApellido.length > 3 &&
    valorNombreApellido.length < 41 &&
    patternNombre.test(valorNombreApellido) &&
    valorUsername.length > 3 &&
    valorUsername.length < 17 &&
    patternUsuario.test(valorUsername) &&
    patternMail.test(valorMail) &&
    patternClave.test(valorClave)
    ) {
      if (usuarios.some(u => u.mailUsu === valorMail)) {
        mailUsu.setCustomValidity('El correo electrónico ya está registrado');
      } else {
        usuario = {id: id, nombreApellido: valorNombreApellido, username: valorUsername, mailUsu: valorMail, claveUsu: valorClave };
        usuarios.push(usuario);
        formRegistro.reset();
        confirmacionForm(); 
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        localStorage.setItem('usuarioActual',JSON.stringify(usuario));
        }
    }
    });
      