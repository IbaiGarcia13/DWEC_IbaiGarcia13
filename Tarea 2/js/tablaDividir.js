const mostrarTabla = (event) => {
    event.preventDefault();

    const campoNumero = document.getElementById("numero");
    const numero = Number(campoNumero.value);
    const resultado = document.getElementById("tabla");

    if (numero >= 0 && numero <= 10) {
        let tablaDividir = `<h2>Tabla de dividir del número ${numero}</h2><ul>`;

        for (let i = 1; i <= 10; i++) {
            tablaDividir += `<li>${numero} / ${i} = ${numero / i}</li>`;
        }

        tablaDividir += "</ul>";
        resultado.innerHTML = tablaDividir;
    } else {
        alert("El número introducido debe estar entre 0 y 10 (ambos inclusive).");
        campoNumero.value = "";
        resultado.innerHTML = "";
    }
};