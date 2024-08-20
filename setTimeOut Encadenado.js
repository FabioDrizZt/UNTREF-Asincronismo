console.log('Inicio del temporizador')

// 1s + 2s + 3s = 6s
setTimeout(function () {
  console.log('Primera Tarea: 1 seg de retraso')
  setTimeout(() => {
    console.log('Segunda Tarea: 2 seg de retraso')
    setTimeout(() => {
      console.log('Tercera Tarea: 3 seg de retraso')
    }, 3000)
  }, 2000)
}, 1000)

// 3 segundos
// setTimeout(() => {
//   console.log('Primera Tarea: 1 seg de retraso')
// }, 1000)
// setTimeout(() => {
//   console.log('Segunda Tarea: 2 seg de retraso')
// }, 2000)
// setTimeout(() => {
//   console.log('Tercera Tarea: 3 seg de retraso')
// }, 3000)

console.log('Final del programa')
