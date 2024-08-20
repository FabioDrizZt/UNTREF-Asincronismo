let x = 0
const intervalID = setInterval(() => {
  console.log(`Paso ${++x} segundo/s.`)
  if (x === 5) {
    clearInterval(intervalID)
    console.log('Intervalo detenido.')
  }
}, 1000)

// setTimeout(() => {
//   clearInterval(intervalID)
// }, 10000)
