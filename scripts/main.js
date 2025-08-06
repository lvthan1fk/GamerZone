 // Navegación funcional
    function showSection(sectionId) {
      document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
      document.getElementById(sectionId).style.display = 'block';
      document.querySelectorAll('.nav-links button').forEach(btn => btn.classList.remove('active'));
      const buttons = document.querySelectorAll('.nav-links button');
      if (sectionId === 'inicio') buttons[0].classList.add('active');
      if (sectionId === 'noticias') buttons[1].classList.add('active');
      if (sectionId === 'reviews') buttons[2].classList.add('active');
      if (sectionId === 'contacto') buttons[3].classList.add('active');
        // Cierra menú en móvil
        document.querySelector('.nav-links').classList.remove('open');
      }
  
      // Menú responsive
      document.querySelector('.menu-toggle').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('open');
      });
  
      // Cierra menú al seleccionar opción en móvil
      document.querySelectorAll('.nav-links button').forEach(btn => {
        btn.addEventListener('click', () => {
          if (window.innerWidth <= 700) {
            document.querySelector('.nav-links').classList.remove('open');
          }
        });
      });