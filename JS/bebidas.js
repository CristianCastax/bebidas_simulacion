
window.onload = function() {
  // Recuperar datos seleccionados del almacenamiento local
  const tamanoSeleccionado = localStorage.getItem('tamanoSeleccionado') || 'No se seleccionó tamaño';
  const saborSeleccionado = localStorage.getItem('saborSeleccionado') || 'No se seleccionó sabor';
  const hieloSeleccionado = localStorage.getItem('hieloSeleccionado') === '1' ? 'Quiero hielos en mi bebida' : 'No quiero hielos en mi bebida';

  // Mostrar los datos seleccionados en la página
  document.getElementById('tamanoSeleccionado').innerText = tamanoSeleccionado;
  document.getElementById('saborSeleccionado').innerText = saborSeleccionado;
  document.getElementById('hieloSeleccionado').innerText = hieloSeleccionado;

  // Actualizar la imagen de la bebida
  actualizarImagen();
}

function abrirVentanaDespedida() {
  // Abrir la ventana de despedida
  window.open('fin.html', '_blank');
  window.location.href = 'index.html';
}

function volverAtras() {
  // Acción para volver atrás
  window.history.back();
}

function calcularImagen(tamano, sabor, hielo) {
  if (tamano === 'Grande' && sabor === 'Café' && hielo === 'conHielo') {
    return 'https://www.starbucks.com.pe/media/Grande-Cafe-Cold-Brew.png';
  }
  // Aquí puedes escribir la lógica para calcular la URL de la imagen basada en los parámetros
  // Por ejemplo, podrías tener una convención de nomenclatura para las imágenes y construir la URL en base a eso
  // También podrías tener un objeto que mapee combinaciones de parámetros a URLs de imágenes
  // Por ahora, vamos a devolver una imagen de marcador de posición como ejemplo
  return "https://via.placeholder.com/150";
}

function actualizarImagen() {
  // Recupera los parámetros seleccionados por el usuario
  const tamanoSeleccionado = localStorage.getItem('tamanoSeleccionado') || 'No se seleccionó tamaño';
  const saborSeleccionado = localStorage.getItem('saborSeleccionado') || 'No se seleccionó sabor';
  const hieloSeleccionado = localStorage.getItem('hieloSeleccionado') === '1' ? 'conHielo' : 'sinHielo';

  // Calcula la URL de la imagen basada en los parámetros seleccionados
  const urlImagen = calcularImagen(tamanoSeleccionado, saborSeleccionado, hieloSeleccionado);

  // Actualiza la imagen dentro del contenedor drinkImage
  const imagen = document.querySelector('#drinkImage img');
  imagen.src = urlImagen;

  // Mostrar el contenedor de la imagen
  document.getElementById('drinkImage').style.display = 'block';
}