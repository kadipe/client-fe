import React, { useState } from 'react'
import { makeLogin } from '../service/user-service'

const LoginPage = (props) => {

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