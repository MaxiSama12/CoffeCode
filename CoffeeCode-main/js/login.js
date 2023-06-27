

let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
console.log(arrayUsuarios);

const form = document.getElementById('form-login');
const mailInput = document.getElementById('mail-login');
const claveInput = document.getElementById('contrasenia-login');
const usuarioInvalido = document.getElementById("usuario-invalido");
const iconLogin = document.getElementById("icon-login");

mailInput.addEventListener('input', function() {
  const valor = mailInput.value.trim();
  if (arrayUsuarios.some(usuario => usuario.mailUsu === valor) || valor === 'admin@coco.com') {
    mailInput.classList.remove('invalido');
    mailInput.classList.add('valido');
  } else {
    mailInput.classList.remove('valido');
    mailInput.classList.add('invalido');
  }
});


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const mail = mailInput.value;
  const clave = claveInput.value;
  const usuario = arrayUsuarios.find(usuario => usuario.mailUsu === mail);
  
  if (mail.toLowerCase() === "admin@coco.com" && clave === "AdminCoco") {
    const admin = {
      id: "000",
      nombreApellido: "Coco",
      username: "admin",
      mailUsu: "admin@coco.com",
      claveUsu: "AdminCoco",
    };
      localStorage.setItem('usuarioActual', JSON.stringify(admin));
      form.reset();
      Swal.fire({
        title: 'Ingresaste como administrador',
        icon: 'success',
        heightAuto: 'false',
        background: '#33241b',
        color: '#eddcc6',
        confirmButtonColor: '#281c16',
      }
        ).then((result) => {
          window.location.href = '../index.html';
          
      });
    } else if (usuario && usuario.claveUsu === clave) {
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));
      console.log('Inicio de sesión exitoso');
      
      Swal.fire({
        title: 'Inicio de sesión exitoso!',
        text: 'Bienvenid@ '+ usuario.nombreApellido +'!',
        icon: 'success',
        heightAuto: 'false',
        background: '#33241b',
        color: '#eddcc6',
        confirmButtonColor: '#281c16'}
        ).then((result) => {
          window.location.href = '../index.html';
          
      });
    } else {
    // Credenciales inválidas
    usuarioInvalido.style.display = "block";
    console.log('Credenciales inválidas');
  }
});
const inputs = document.querySelectorAll('.formItem input');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.length > 0) {
      input.classList.add('hasValue');
    } else {
      input.classList.remove('hasValue');
      input.classList.remove('invalido');
      input.classList.remove('valido');
      usuarioInvalido.style.display = "none";
    }
  });
}); 


const btnLogin = document.getElementById('btn-login');
let usuarioActivo = localStorage.getItem('usuarioActual');
if (usuarioActivo !== null && usuarioActivo !== undefined) {
  let usuario = JSON.parse(usuarioActivo);
  console.log("Hay un usuario actual:", usuario);
  iconLogin.classList.remove('fa-user');
  iconLogin.classList.add('fa-right-from-bracket');
  
  btnLogin.addEventListener('click', logout);

} else {
  iconLogin.classList.add('fa-user');
  iconLogin.classList.remove('fa-right-from-bracket');
  console.log("No hay ningún usuario actual.");
}

function logout() {
  localStorage.removeItem('usuarioActual');
  window.location.href = '../index.html';
}

document.addEventListener('DOMContentLoaded', function() {
  const adminLink = document.getElementById('admin-link');
  const cuentaActiva = JSON.parse(localStorage.getItem('usuarioActual'));

  if (cuentaActiva && cuentaActiva.username === 'admin') {
    adminLink.classList.remove('hidden');
  }
});
let iconContrasenia = document.getElementById('icon-contrasenia');
iconContrasenia.addEventListener('click', function(){
  if (claveInput.type === 'password') {
    claveInput.type = 'text';
    iconContrasenia.classList.remove('fa-eye-slash');
    iconContrasenia.classList.add('fa-eye');
  } else {
    claveInput.type = 'password';
    iconContrasenia.classList.remove('fa-eye');
    iconContrasenia.classList.add('fa-eye-slash');
  }
});