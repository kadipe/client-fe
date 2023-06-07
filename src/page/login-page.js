import React, { useState } from 'react'
import { makeLogin } from '../service/user-service'

const LoginPage = () => {

  const [data, setData] = useState({
    mail: '',
    password: ''
  })

  const handleChange = (evt) => {
    const value = evt.target.value
    setData({
      ...data,
      [evt.target.id]: value
    })
  }

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    makeLogin(data.mail, data.password)
    .then((response) => {
      console.log(response);
    })
  }

  const handleKadipe = () => {
    window.location.href = 'http://localhost:2000/login.oauth?code=61b6fc13-2656-405b-b33a-8bfe34434e52&redirect_uri=http://localhost:2001/login.oauth'
  }

  return (
    <>
      <input name="email" autoFocus type="email" id="mail" placeholder="Endereço de Email" value={data.mail} onChange={handleChange} onKeyDown={handleEnter} />
      <input name="password" type="password" autoComplete="off" placeholder="Password" id="password" value={data.password} onChange={handleChange} onKeyDown={handleEnter} />
      <button type="submit" onClick={handleSubmit} onKeyDown={handleEnter}>
        <span>Login</span>
      </button>
      <button type="submit" onClick={handleKadipe}>
        <span>Login as Kadipe</span>
      </button>
    </>
  )
}
export default LoginPage;