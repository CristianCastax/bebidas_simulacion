// JavaScript
var seleccionUsuario = {
    tamano: '',
    sabor: '',
    hielo: ''
  };
  
  function seleccionar(categoria, valor) {
    seleccionUsuario[categoria] = valor;
    // Mostrar la siguiente sección basada en la categoría
    // ...
    
    // Al finalizar, mostrar resumen
    if (categoria === 'hielo') {
      document.getElementById('resumen').innerText = 
        `Tamaño: ${seleccionUsuario.tamano}, Sabor: ${seleccionUsuario.sabor}, Hielo: ${seleccionUsuario.hielo}`;
      document.getElementById('resumen-seleccion').style.display = 'block';
    }
  }
  
  function volver() {
    // Permitir al usuario editar su selección
    // ...
  }
  