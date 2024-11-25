import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navigate = () => {
  const navigate = useNavigate()

  const goToHome = ()=>{
    navigate('/');
  }
  const goBack = () =>{
    navigate(-1)
  }
  return (
    <div>
      <button onClick={goToHome}>Go To Home</button>
      <button onClick={goBack}>Go To Back</button>
    </div>
  )
}

export default Navigate