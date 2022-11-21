function transformarGrau (grau) {
    const celsiusExiste = grau.toUpperCase().includes('C')
    const fahrenheitExiste = grau.toUpperCase().includes('F')

    if (!fahrenheitExiste && !celsiusExiste)
        throw new Error ('Grau incorreto')

    let grauAtualizado = Number (grau.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let sinalDeGrau = 'C'

    if (celsiusExiste) {
        grauAtualizado = Number (grau.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        sinalDeGrau = 'F'
    }

    return formula (grauAtualizado) + sinalDeGrau
}

try {
    console.log(transformarGrau('10C'))
    console.log(transformarGrau('50F'))
    transformarGrau('50X')
} catch (error){
    console.log(error.message)
}
