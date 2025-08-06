// Buscador interno básico
function buscarContenido() {
  const input = document.getElementById('buscador').value.toLowerCase();
  const secciones = document.querySelectorAll('.section');
  let encontrado = false;
  secciones.forEach(sec => {
    if (sec.innerText.toLowerCase().includes(input) && input.length > 0) {
      secciones.forEach(s => s.style.display = 'none');
      sec.style.display = 'block';
      encontrado = true;
    }
  });
  if (!encontrado && input.length > 0) {
    secciones.forEach(s => s.style.display = 'none');
  }
  if (input.length === 0) {
    showSection('inicio');
  }
}