async function obtenerDatos() {
    const response = await fetch('/api/datos');
    const datos = await response.json();
    mostrarDatosEnTabla(datos);
}

function mostrarDatosEnTabla(datos) {
    const tabla = document.getElementById('miTabla');
    datos.forEach(dato => {
        const fila = tabla.insertRow();
        Object.values(dato).forEach(valor => {
            const celda = fila.insertCell();
            celda.textContent = valor;
        });
    });
}

document.addEventListener('DOMContentLoaded', obtenerDatos);
