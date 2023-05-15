import React, { useState } from 'react'
import { makeCheckin } from '../service/user-service'

const CheckinPage = () => {

  const [code, setCode] = useState('')

  const handleChange = (evt) => {
    setCode(evt.target.value)
  }

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    makeCheckin(code)
    .then((response) => {
      console.log(response);
    })
  }

  return (
    <>
      <input name="code" autoFocus type="text" id="code" value={code} onChange={handleChange} onKeyDown={handleEnter} />
      <button type="submit" onClick={handleSubmit} onKeyDown={handleEnter}>
        <span>Checkin</span>
      </button>
    </>
  )
}
export default CheckinPage;