import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './pages/Header.jsx'
import Home from './pages/Home.jsx'
import Funcionamento from './pages/Funcionamento.jsx'
import Integrantes from './pages/Integrantes.jsx'
import Bibliografia from './pages/Bibliografia.jsx'
import Materiais from './pages/Materiais.jsx'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body className='bg-offwhite'>
      
    
    <Header />
    <Home/>
    <Funcionamento/>
    <Materiais />
    <Bibliografia />
    <Integrantes />
    

    </body>
    </>
  )
}

export default App
