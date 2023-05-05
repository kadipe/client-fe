import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { generateToken } from '../service/user-service';

const LoginOAuthPage = () => {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get('code')) {
      navigate('/login')
    }
    generateToken(searchParams.get('code'), searchParams.get('state'))
    .then((response) => {
      console.log(response);
    })

  }, [])

  return (
    <>
    </>
  )
}
export default LoginOAuthPage;