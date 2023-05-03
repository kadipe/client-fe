export async function makeLogin(userName, password) {

  const response = await fetch(`${process.env.REACT_APP_BE_URL}/user/api/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-KDP-TZ': Intl.DateTimeFormat().resolvedOptions().timeZone
    },
    body: JSON.stringify({
      'userName': userName,
      'password': password
    })
  })

  return await response.json()
}