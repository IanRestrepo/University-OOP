var saldoInicial = 1000000

document.addEventListener('DOMContentLoaded', () => {
    const userNameToShowElement = document.getElementById('TitularName');
    const loggedInUserName = localStorage.getItem('loggedInUser');

    if (loggedInUserName) {

        userNameToShowElement.innerHTML = `<span class="Blue">${loggedInUserName}</span>`;
        ATM_VALUE.textContent = saldoInicial
    }
});

const ATM_VALUE = document.getElementById('ATMValue');

    const btnDepositar = document.getElementById('Depositar');
    const btnRetirar = document.getElementById('Retirar');


    function depositar() {
        let monto = parseFloat(prompt('Ingrese el monto de retiro: '));
        if (monto > 0) {
            let saldoActual = saldoInicial += monto;

            ATM_VALUE.textContent = saldoActual
            console.log(`Se depositaron ${monto} unidades. Saldo actual: ${saldoActual}`);
        } else {
            console.log("El monto del depósito debe ser mayor que cero.");
        }
    }

    function retirar() {
        let monto = parseFloat(prompt('Ingrese el monto de retiro: '));

        if (monto > 0 && monto <= saldoInicial) {
            let saldoActual = saldoInicial -= monto;
            ATM_VALUE.textContent = saldoActual
            console.log(`Se retiraron ${monto} unidades. Saldo actual: ${saldoActual}`);
        } else {
            console.log("Monto inválido o saldo insuficiente para el retiro.");
        }
    }
