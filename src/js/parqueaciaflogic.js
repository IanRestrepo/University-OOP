class Parqueacia {
    constructor() {
        this.cars = [];
        this.input = document.getElementById("PlacaAutoMovil");
        this.depositButton = document.getElementById("Depositar");
        this.withdrawButton = document.getElementById("Retirar");
        this.listOfCars = document.querySelector(".ListOfCars");
        
        this.depositButton.addEventListener("click", this.deposit.bind(this));
        this.withdrawButton.addEventListener("click", this.withdraw.bind(this));
    }

    validatePlaca(placa) {
        const placaRegex = /^[A-Z]{3}-\d{3}$/;
        return placaRegex.test(placa);
    }

    deposit() {
        const placa = this.input.value.toUpperCase();
        
        if (this.validatePlaca(placa)) {
            this.cars.push(placa);
            this.input.value = "";
            this.updateList();
        } else {
            alert("Placa no válida. El formato debe ser ABC-123.");
        }
    }

    withdraw() {
        const placaToWithdraw = this.input.value.toUpperCase();
        
        if (this.cars.includes(placaToWithdraw)) {
            this.cars = this.cars.filter(placa => placa !== placaToWithdraw);
            this.input.value = "";
            this.updateList();
        } else {
            alert("El auto con esta placa no está registrado.");
        }
    }

    updateList() {
        this.listOfCars.innerHTML = "";
        this.cars.forEach(placa => {
            const carItem = document.createElement("div");
            carItem.textContent = placa;
            this.listOfCars.appendChild(carItem);
        });
    }
}

const parqueacia = new Parqueacia();
