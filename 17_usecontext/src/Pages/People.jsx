import React  , {useContext}from 'react'
import MoneyContext from '../context/MoneyContext'

const People = () => {
  // console.log(useContext(MoneyContext));
  const data = useContext(MoneyContext)
  return (
   <>
   <h1>this is People</h1>
   <h3>money = {data.money}</h3>
   
   </>
  )
}

export default People