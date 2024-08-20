console.log('Inicio del temporizador')

const logout = () => {
  console.log('cerrando sesión..')
  // window.location.href('/logout')
}

let timeOutID = setTimeout(logout, 15 * 60 * 1000) // 15 minutos

const restablecerTemporizador = () => {
  clearTimeout(timeOutID)
  timeOutID = setTimeout(logout, 15 * 60 * 1000) // 15 minutos
}

console.log('Final del programa')

window.onload(() => {
  // Cada vez que haya movimiento de mouse o algun tecleo
  document.addEventListener('mousemove', restablecerTemporizador)
  document.addEventListener('keydown', restablecerTemporizador)
})
