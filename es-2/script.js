const squadre = [
    {
        nome: "Roma",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Lazio",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0,
    }
]

for (var i = 0; i < squadre.length; i++) {
    squadre[i].punti = Math.floor(Math.random() * 50);
    squadre[i].falliSubiti = Math.floor(Math.random() * 50);
}

console.log(squadre)

const arrayFiltrato = [
    {
        nome: "Roma",
        falliSubiti: 0,
    },

    {
        nome: "Lazio",
        falliSubiti: 0,
    },

    {
        nome: "Milan",
        falliSubiti: 0,
    },

    {
        nome: "Inter",
        falliSubiti: 0,
    }
]

for (var i = 0; i < squadre.length; i++) {
    var {nome, falliSubiti} = squadre[i];

    console.log(nome, falliSubiti);
}

console.log(arrayFiltrato);