window.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el contenedor donde se cargará el Pedazo HTML
    var contenedor = document.getElementById('mapa_properati');

    // Crear un objeto XMLHttpRequest para cargar el Pedazo de  HTML
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Cargar el contenido HTML en el contenedor
                contenedor.innerHTML = xhr.responseText;
            } else {
                console.error('Error al cargar el archivo.');
            }
        }
    };

    // Obtener el  pedazo de  HTML
    xhr.open('GET', '../art_p1_properati_mapa.html', true);
    xhr.send();
});
