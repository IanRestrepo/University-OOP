// Función para aplicar temporalmente el desenfoque al body
function applyBlurTemporarily() {
    document.body.classList.add('blur-effect');
  
    // Después de un tiempo determinado, quitar la clase de desenfoque
    setTimeout(() => {
      document.body.classList.remove('blur-effect');
    }, 1000); // Desenfoque durante 2 segundos
  }
  
  // Llamar a la función cuando sea necesario
  applyBlurTemporarily();