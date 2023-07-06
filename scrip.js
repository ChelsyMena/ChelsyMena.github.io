window.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el contenedor donde se cargará el Pedazo HTML
    var contenedor = document.getElementById('contenidoDinamico');

    // Crear un objeto XMLHttpRequest para cargar el Pedazo de  HTML
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Cargar el contenido HTML en el contenedor
                contenedor.innerHTML = xhr.responseText;
            } else {
                contenedor.innerHTML = xhr.responseText;
                console.error('Error al cargar el archivo.');
            }
        }
    };

    // Obtener el  pedazo de  HTML
    xhr.open('GET', 'otrohtml.html', true);
    xhr.send();
});
