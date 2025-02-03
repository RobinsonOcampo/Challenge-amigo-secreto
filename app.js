// Array para almacenar amigos
let amigos = [];

// Función para agregar amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim();
    
    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        input.value = ""; // Limpiar el campo de texto
    }
}

// Función para actualizar la lista 
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de agregar los elementos

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear amigo 
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado 

    const amigosSorteados = [...amigos]; // Copiar la lista de amigos para  editarla
    let resultados = [];

    // Mezclar para asignarles un amigo secreto
    while (amigosSorteados.length > 0) {
        const amigo = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];
        const amigoSecreto = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];

        if (amigo !== amigoSecreto) {
            resultados.push(`${amigo} -> ${amigoSecreto}`);
            amigosSorteados.splice(amigosSorteados.indexOf(amigoSecreto), 1); // Eliminar el amigo secreto de la lista
        } else {
            amigosSorteados.push(amigo); // Volver a ponerlo si no encuentra una asignación válida
        }
    }

    //  resultados
    resultados.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        resultado.appendChild(li);
    });
}
