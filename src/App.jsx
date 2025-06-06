import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User } from './page/users'
import { UserModel } from './component/userModal'

function App() {
  

  return (
    <>
      <UserModel/>
            

      <User/>
    </>
  )
}

export default App
