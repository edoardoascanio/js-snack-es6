const biciclette = [

    { nome: "flash", peso: 10 },
    { nome: "light", peso: 12 },
    { nome: "speed", peso: 15 },
    { nome: "crash", peso: 18 },
];



const trovaPesoMinore = (listaArray) => {
    let pesoMinore;

    for (let i = 0; i < biciclette.length; i++) {
        const { nome, peso } = listaArray[i];


        if (!pesoMinore || peso < pesoMinore.peso) {
            pesoMinore = { nome, peso }
        }
    }

    return pesoMinore;
}

const pesoMinoreTrovato = trovaPesoMinore(biciclette);
console.log(pesoMinoreTrovato)