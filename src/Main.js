import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Main2 from './Main2'



export const Main = () => {

  return (
    <div>

      <Header name='main' onClick='goSignup'/>
      <Main2/>


    </div>
  )
}

export default Main
