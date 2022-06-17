function fire() {
    const arrayMenor = [
        { id: 1, name: "um", amount: 2 },
        { id: 4, name: "quatro", amount: 21 }
    ];
    const arrayMaior = [
        { id: 1, name: "um", amount: 2 },
        { id: 2, name: "dois", amount: 20 },
        { id: 3, name: "três", amount: 22 },
        { id: 4, name: "quatro", amount: 21 }

    ];

    console.log("array maior: " + arrayMaior)
    console.log("---------------------------")
    console.log("---------------------------")
    console.log("array menor: " + arrayMenor)
    console.log("---------------------------")
    console.log("---------------------------")

    const resultado = [];

    for (let i = 0; i < arrayMaior.length; i++) {
        if (arrayMenor.some(album => album.id === arrayMaior[i].id)) {
            resultado.push(arrayMaior[i])
            console.log(`${JSON.stringify(arrayMaior[i])} existe no array Array Menor`)
        } else { console.log(`${JSON.stringify(arrayMaior[i])} *** NÃO *** existe no array Array Menor`) }
    }

    console.log("---------------------------")
    console.log("---------------------------")
    console.log(resultado)
}

fire()