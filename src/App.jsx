import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Configurator from './components/Configurator'
import './App.css'

const App = () => {
  return (
    <div className="main">
      <Canvas>
        <color attach="background" args={['#cecece']} />\
        <fog attach="fog" args={['#cecece', 10, 20]} />
        <Experience />
      </Canvas>
      <Configurator/>
    </div>
  )
}

export default App