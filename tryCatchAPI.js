async function getUserData (userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    if (error.name === 'TypeError') {
      console.log('TypeError: ', error.message)
    } else {
      console.log('Error: ', error.message)
    }
  } finally {
    console.log('Finally block executed')
  }
}

getUserData(1)
getUserData(200)
