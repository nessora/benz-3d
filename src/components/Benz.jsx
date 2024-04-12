/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/benz.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const Benz = (props) => {
  const { nodes, materials } = useGLTF('./models/benz.glb')
  const roughPlastic = useTexture({
    map: '../textures/rough-plastic/Plastic_Rough_001_basecolor.jpg',
    normalMap: '../textures/rough-plastic/Plastic_Rough_001_normal.jpg',
    roughnessMap: '../textures/rough-plastic/Plastic_Rough_001_roughness.jpg',
    aoMap:'../textures/rough-plastic/Plastic_Rough_001_ambientOcclusion.jpg'
  })



  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.212, -0.034]} rotation={[-1.571, 0, 0]}>
        <mesh geometry={nodes.body.geometry} material={materials.carpaint_metalic_white} position={[0, 1.493, -0.211]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001}>
          {/* <meshStandardMaterial {...roughPlastic}/> */}
          <mesh geometry={nodes.black.geometry} material={materials.plastic_shiny_black} />
          <mesh geometry={nodes.black_interior.geometry} material={materials.leather_black} />
          <mesh geometry={nodes.black_plastic.geometry} material={materials.plastic_shiny_black} />
          <mesh geometry={nodes.black2.geometry} material={materials.plastic_rough_black_plus2} />
          <mesh geometry={nodes.chrome.geometry} material={materials.chrome} />
          <mesh geometry={nodes.chrome001.geometry} material={materials.chrome} />
          <mesh geometry={nodes.glass.geometry} material={materials.glass_clear} />
          <mesh geometry={nodes.glass_phare.geometry} material={materials.glass_clear} />
          <mesh geometry={nodes.glass001.geometry} material={materials.glass_dark} />
          <mesh geometry={nodes.glass002.geometry} material={materials.glass_clear} position={[0, 0, 0]} />
          <mesh geometry={nodes.glass003.geometry} material={materials.light_white} />
          <mesh geometry={nodes.glassred.geometry} material={materials.glass_red} />
          <mesh geometry={nodes.led.geometry} material={materials.orange_chrome} />
          <mesh geometry={nodes.led001.geometry} material={materials.red} />
          <mesh geometry={nodes.object.geometry} material={materials.mercemblem} position={[0, 0, 0]} />
          <mesh geometry={nodes.palte.geometry} material={materials.plate} />
        </mesh>
      </group>
      <group position={[0.803, 0.353, 1.627]} rotation={[0.377, 0, 0]}>
        <mesh geometry={nodes.wheelFtL.geometry} material={materials.tire} position={[-0.803, 3.153, -0.352]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001}>
          <mesh geometry={nodes.disk002.geometry} material={materials.metal_brush_cirular} position={[0.001, 0, 0]} />
          <mesh geometry={nodes.logo002.geometry} material={materials.chrome} position={[0.001, 0, 0]} />
          <mesh geometry={nodes.palstic.geometry} material={materials.plastic_shiny_black} position={[0.001, 0, 0]} />
          <mesh geometry={nodes.wheel002.geometry} material={materials.metal_rough_plus_rim} position={[0.001, 0, 0]} />
        </mesh>
      </group>
      <group position={[-0.817, 0.353, 1.627]} rotation={[0.377, 0, 0]}>
        <mesh geometry={nodes.wheelFtR.geometry} material={materials.tire} position={[0.817, 3.153, -0.352]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={-0.001}>
          <mesh geometry={nodes.disk001.geometry} material={materials.metal_brush_cirular} position={[0.001, 0, 0]} />
          <mesh geometry={nodes.logo001.geometry} material={materials.chrome} position={[0.001, 0, 0]} />
          <mesh geometry={nodes.plastic001.geometry} material={materials.plastic_shiny_black} position={[0.001, 0, 0]} />
          <mesh geometry={nodes.wheel001.geometry} material={materials.metal_rough_plus_rim} position={[0.001, 0, 0]} />
        </mesh>
      </group>
      <group position={[0.803, 0.352, -1.526]} rotation={[0.377, 0, 0]}>
        <mesh geometry={nodes.wheelBkL.geometry} material={materials.tire} position={[-0.803, 0, -0.352]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001}>
          <mesh geometry={nodes.disk003.geometry} material={materials.metal_brush_cirular} />
          <mesh geometry={nodes.logo003.geometry} material={materials.chrome} />
          <mesh geometry={nodes.plastic002.geometry} material={materials.plastic_shiny_black} />
          <mesh geometry={nodes.wheel003.geometry} material={materials.metal_rough_plus_rim} />
        </mesh>
      </group>
      <group position={[-0.817, 0.352, -1.526]} rotation={[0.377, 0, 0]}>
        <mesh geometry={nodes.wheelBkR.geometry} material={materials.tire} position={[0.817, 0, -0.352]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={-0.001}>
          <mesh geometry={nodes.disk.geometry} material={materials.metal_brush_cirular} />
          <mesh geometry={nodes.logo.geometry} material={materials.chrome} />
          <mesh geometry={nodes.plastic.geometry} material={materials.plastic_shiny_black} />
          <mesh geometry={nodes.wheel.geometry} material={materials.metal_rough_plus_rim} />
        </mesh>
      </group>
      <group position={[0.803, 0.353, 1.627]} rotation={[-1.571, 0, 0]}>
        <mesh geometry={nodes.wheelbrakeFtL.geometry} material={materials.paint_brake} position={[-0.803, 3.153, -0.352]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      </group>
      <group position={[-0.817, 0.353, 1.627]} rotation={[-1.571, 0, 0]}>
        <mesh geometry={nodes.wheelbrakeFtR.geometry} material={materials.paint_brake} position={[0.817, 3.153, -0.352]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={-0.001} />
      </group>
      <group position={[0.803, 0.352, -1.526]} rotation={[-1.571, 0, 0]}>
        <mesh geometry={nodes.wheelbrakeBkL.geometry} material={materials.paint_brake} position={[-0.803, 0, -0.352]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} />
      </group>
      <group position={[-0.817, 0.352, -1.526]} rotation={[-1.571, 0, 0]}>
        <mesh geometry={nodes.wheelbrakeBkR.geometry} material={materials.paint_brake} position={[0.817, 0, -0.352]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={-0.001} />
      </group>
    </group>
  )
}
export default Benz
useGLTF.preload('./models/benz.glb')
