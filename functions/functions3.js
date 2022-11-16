 function honda(moto1, moto2, moto3) {
    return 'Motos honda: ' + moto1 + moto2 + moto3
}

const moto = honda('Titan ', ' Biz ', ' Xre')

    console.log(moto) 

//-------------------------------------------------------------//

/*arrow function
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Samuel')*/

//-------------------------------------------------------------//

/* callback function                   callback=ChamarDeVolta
function sayMyName(name) {
    console.log('Antes de executar uma callback')

    name()

    console.log('Depois de executar uma callback')

}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
) */

//-------------------------------------------------------------//