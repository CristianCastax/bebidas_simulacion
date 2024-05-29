
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
  window.location.href = 'https://trello.com/b/tPNZp3bW/fiss1eq7';
}

function volverAtras() {
  // Acción para volver atrás
  window.history.back();
}

function calcularImagen(tamano, sabor, hielo) {
  ///////////JAMAICA////////////
  if (tamano === 'Chico' && sabor === 'Jamaica' && hielo === 'conHielo') {
    return 'imagenes/JCC.png';
  } 
  else if(tamano === 'Chico' && sabor === 'Jamaica' && hielo === 'sinHielo') {
    return 'imagenes/JCS.png';
  } 
  else if(tamano === 'Mediano' && sabor === 'Jamaica' && hielo === 'conHielo') {
    return 'imagenes/JMC.png';
  }
  else if(tamano === 'Mediano' && sabor === 'Jamaica' && hielo === 'sinHielo') {
    return 'imagenes/JMS.png';
  }
  else if(tamano === 'Grande' && sabor === 'Jamaica' && hielo === 'conHielo') {
    return 'imagenes/JGC.png';
  } 
  else if(tamano === 'Grande' && sabor === 'Jamaica' && hielo === 'sinHielo') {
    return 'imagenes/JGS.png';
  }
  ///////////HORCHATA////////////
  else if (tamano === 'Chico' && sabor === 'Horchata' && hielo === 'conHielo') {
    return 'imagenes/HCC.png';
  } 
  else if(tamano === 'Chico' && sabor === 'Horchata' && hielo === 'sinHielo') {
    return 'imagenes/HCS.png';
  } 
  else if(tamano === 'Mediano' && sabor === 'Horchata' && hielo === 'conHielo') {
    return 'imagenes/HMC.png';
  }
  else if(tamano === 'Mediano' && sabor === 'Horchata' && hielo === 'sinHielo') {
    return 'imagenes/HMS.png';
  }
  else if(tamano === 'Grande' && sabor === 'Horchata' && hielo === 'conHielo') {
    return 'imagenes/HGC.png';
  } 
  else if(tamano === 'Grande' && sabor === 'Horchata' && hielo === 'sinHielo') {
    return 'imagenes/HGS.png';
  }
  ////////////LIMÓN//////////////
  else if (tamano === 'Chico' && sabor === 'Limón' && hielo === 'conHielo') {
    return 'imagenes/LCC.png';
  } 
  else if(tamano === 'Chico' && sabor === 'Limón' && hielo === 'sinHielo') {
    return 'imagenes/LCS.png';
  } 
  else if(tamano === 'Mediano' && sabor === 'Limón' && hielo === 'conHielo') {
    return 'imagenes/LMC.png';
  }
  else if(tamano === 'Mediano' && sabor === 'Limón' && hielo === 'sinHielo') {
    return 'imagenes/LMS.png';
  }
  else if(tamano === 'Grande' && sabor === 'Limón' && hielo === 'conHielo') {
    return 'imagenes/LGC.png';
  } 
  else if(tamano === 'Grande' && sabor === 'Limón' && hielo === 'sinHielo') {
    return 'imagenes/LGS.png';
  }
  else {
    return "https://via.placeholder.com/150";
  }
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