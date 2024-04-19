import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Configurator from './components/Configurator'
import './App.css'
import { CustomizationProvider } from './contexts/Customization'

const App = () => {
  return (
    <CustomizationProvider>
      <div className="main">
        <Canvas>
          <color attach="background" args={['#cecece']} />
          <fog attach="fog" args={['#cecece', 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  )
}

export default App