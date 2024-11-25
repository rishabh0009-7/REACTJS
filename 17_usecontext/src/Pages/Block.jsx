import React from 'react'
import Panchayat from './Panchayat'

const Block = ({money}) => {
  return (
 <>
 <h1>this is block component</h1>
 <Panchayat money = {money}/>
 </>
  )
}

export default Block