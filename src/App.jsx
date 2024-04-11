import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import './App.css'

const App = () => {
  return (
    <div className="main">
      <Canvas>
        <color attach="background" args={['#142c14']} />\
        <fog attach="fog" args={['#142c14', 10, 20]} />
        <Experience />
      </Canvas>
    </div>
  )
}

export default App