// La función dividirNumeros toma dos argumentos a y b, y trata de dividir a por b.
// Dentro del bloque try, verificamos si b es igual a cero. Si es así, lanzamos una excepción personalizada utilizando throw. De lo contrario, realizamos la división y mostramos el resultado.
// En el bloque catch, manejamos la excepción en caso de que se haya lanzado (cuando b es igual a cero) y mostramos un mensaje de error.
// En el bloque finally, mostramos un mensaje para indicar que la operación de división ha finalizado, ya sea con éxito o con un error.

const dividirNumeros = (a, b) => {
  try {
    if (b === 0) {
      throw new Error('No se puede dividir por cero')
    }
    const resultado = a / b
    console.log(`El resultado de la división es: ${resultado}`)
  } catch (error) {
    console.log('Error : ' + error.message)
  } finally {
    console.log('La operación de división ha finalizado')
  }
}

dividirNumeros(10, 2)
dividirNumeros(10, 0)
