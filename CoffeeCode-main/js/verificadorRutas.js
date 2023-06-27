function verificarRutaYRedireccionar(rutaActual, paginaError) {
    fetch(rutaActual)
      .then(response => {
        if (!response.ok) {
          // Ruta no existe, redireccionar a la página de error
          window.location.href = paginaError;
        }
      })
      .catch(error => {
        console.error('Error al verificar la ruta:', error);
      });
  }
  
  // Obtener todos los enlaces de la página
  const enlaces = document.querySelectorAll('a');
  
  // Agregar el evento click a cada enlace
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function(event) {
      event.preventDefault(); // Detener la acción predeterminada del enlace
      const rutaActual = enlace.href; // Obtener la ruta del enlace
      verificarRutaYRedireccionar(rutaActual, 'html/error404.html');
    });
  });
  