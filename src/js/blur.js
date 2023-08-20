function applyBlurTemporarily() {
    document.body.classList.add('blur-effect');
  

    setTimeout(() => {
      document.body.classList.remove('blur-effect');
    }, 1000);
  }
  
  applyBlurTemporarily();