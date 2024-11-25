// provider component
import React from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const money = 1000
    const dollar = 100 
  return (
    <>
    <MoneyContext.Provider value = {{money , dollar}}>{props.children}</MoneyContext.Provider>
    </>
  )
}

export default MoneyState