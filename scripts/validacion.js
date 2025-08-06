// Navegación dinámica
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

// Validación y envío del formulario de contacto por AJAX
document.addEventListener('DOMContentLoaded', function() {
  showSection('inicio');

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();
      const msgBox = document.getElementById('form-msg');

      // Validación simple
      if (!nombre || !email || !mensaje) {
        msgBox.textContent = 'Por favor, completa todos los campos.';
        msgBox.style.color = 'red';
        return;
      }

      // Enviar por AJAX a contacto.php
      const formData = new FormData(form);
      fetch('contacto.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        msgBox.textContent = data;
        msgBox.style.color = data.toLowerCase().includes('gracias') || data.toLowerCase().includes('éxito') ? 'limegreen' : 'red';
        if (msgBox.style.color === 'limegreen') form.reset();
      })
      .catch(() => {
        msgBox.textContent = 'Error al enviar el mensaje. Intenta de nuevo.';
        msgBox.style.color = 'red';
      });
    });
  }
});