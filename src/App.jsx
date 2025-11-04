import { useState } from 'react'
import './App.css'
import Todo from './Todo'
import Toggle from './Toggle'

import { motion, useScroll, useTransform } from "motion/react"

function App() {

  return (
    <>
      <Toggle />
      <Todo />
    </>
  )
}

export default App

//   < div >
//   <p>bullshit1</p>
// </div >

//   <div>
//     <P />
//   </div>

// function P() {
//   return (
//     <p>bullshit2</p>
//   )
// }