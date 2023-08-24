
class Vehicle {
    constructor(Brand, Model) {
        this._Brand = Brand;
        this._Model = Model;
        this._EngineOn = false;
    }

    Brands = {
        'Ford': [
            { modelo: 'Focus', especificaciones: 'Motor: 2.0L, 4 cilindros, Potencia: 160HP' },
            { modelo: 'Mustang', especificaciones: 'Motor: 5.0L V8, Potencia: 450HP' },
            { modelo: 'Escape', especificaciones: 'Motor: 1.5L EcoBoost, Potencia: 181HP' },
        ],
        
        'Chevrolet': [
            { modelo: 'Cruze', especificaciones: 'Motor: 1.4L Turbo, Potencia: 153HP' },
            { modelo: 'Malibu', especificaciones: 'Motor: 2.0L Turbo, Potencia: 250HP' },
            { modelo: 'Equinox', especificaciones: 'Motor: 1.5L Turbo, Potencia: 170HP' },
        ],

        'BMW': [
            { modelo: 'I8', especificaciones: 'Motor: Híbrido, Potencia: 369HP' },
            { modelo: 'CIAFERO-V8', especificaciones: 'Motor: Eléctrico, Potencia: 400HP' },
            { modelo: 'Serie M', especificaciones: 'Motor: Varios, Potencia: Varía según el modelo' },
        ],
        
        'Harley-Davidson': [
            { modelo: 'Street 750', especificaciones: 'Motor: Revolution X, Potencia: 59HP' },
            { modelo: 'Iron 883', especificaciones: 'Motor: Evolution 883, Potencia: 51HP' },
            { modelo: 'Sportster 1200', especificaciones: 'Motor: Evolution 1200, Potencia: 67HP' },
        ],
        
        'Yamaha': [
            { modelo: 'YZF-R6', especificaciones: 'Motor: 4 cilindros en línea, Potencia: 120HP' },
            { modelo: 'MT-07', especificaciones: 'Motor: 2 cilindros en línea, Potencia: 74HP' },
            { modelo: 'MT-09', especificaciones: 'Motor: 3 cilindros en línea, Potencia: 115HP' },
        ]
    }
}

const BrandName = document.getElementById('BrandName');
const TitularName = document.getElementById('TitularName');
const ATMValue = document.getElementById('ATMValue');
const Especificaciones = document.getElementById('Especificaciones');

const vehicle = new Vehicle();

function generarVehiculo(tipo) {
    const tipoVehiculo = tipo;
    let marcas, marca, modelos;

    if (tipoVehiculo === 'Auto') {
        marcas = ['Ford', 'Chevrolet', 'BMW']; // Marcas de autos
    } else if (tipoVehiculo === 'Moto') {
        marcas = ['Harley-Davidson', 'Yamaha']; // Marcas de motos
    }

    marca = marcas[Math.floor(Math.random() * marcas.length)];
    modelos = vehicle.Brands[marca];
    const modeloAleatorio = modelos[Math.floor(Math.random() * modelos.length)];
    
    TitularName.textContent = tipoVehiculo;
    BrandName.textContent = marca;
    Especificaciones.textContent = modeloAleatorio.especificaciones;
    ATMValue.textContent = modeloAleatorio.modelo;
}