  /*
  Auto-generated by: https://github.com/pmndrs/gltfjsx
  Command: npx gltfjsx@6.2.16 public/models/benz.glb 
  */

  import React, { useRef, useEffect } from 'react'
  import { useGLTF, useTexture } from '@react-three/drei'
  import { useThree } from '@react-three/fiber'
  import { useCustomization } from '../contexts/Customization'

  const Benz = (props) => {
    const { nodes, materials } = useGLTF('./models/benz.glb')
    const carPos = useRef()
    const carBody = useRef()
    const wheelPos = useRef()
    const wheelBrakePos = useRef()
    // const { camera } = useThree()
    const {carColor} = useCustomization();

    useEffect(() => {
      // Ensure that group.current is defined before accessing its properties
      if (carPos.current) {
        carPos.current.position.set(3, -1.9, -0.7) // Set the desired x, y, z position
        carPos.current.rotation.set(0, -1, 0) // Set the desired x, y, z position
        // wheelPos.current.rotation.set(0, -0.6, 0) // Set the desired x, y, z position
        // wheelBrakePos.current.rotation.set(-1.5, 0, -0.5) // Set the desired x, y, z position
        
        if(carBody.current) {
          carBody.current.traverse((child) => {
            if (child.isMesh && child.material && child.material.name === 'carpaint_metalic_white') {
              // Assuming 'carpaint_metalic_white' is the name of the material assigned to the body mesh
              child.material.color.set(carColor.color);
            }
          });
        }

      }
    }, [carColor])

    return (
      <group {...props} dispose={null} ref={carPos} position={[0,-1.9,0.7]}>
        <group position={[0, 0.212, -0.034]} rotation={[-1.571, 0, 0]}>
          <mesh geometry={nodes.body.geometry} material={materials.carpaint_metalic_white} position={[0, 1.493, -0.211]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={0.001} ref={carBody}>
            <mesh geometry={nodes.black.geometry} material={materials.plastic_shiny_black} />
            <mesh geometry={nodes.black_interior.geometry} material={materials.leather_black} />
            <mesh geometry={nodes.black_plastic.geometry} material={materials.plastic_shiny_black}  />
            <mesh geometry={nodes.black2.geometry} material={materials.plastic_rough_black_plus2}  />
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
            <mesh geometry={nodes.palte.geometry} material={materials.plate}  />
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
        <group position={[-0.817, 0.353, 1.627]} rotation={[0.377, 0, 0]} ref={wheelPos}>
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
        <group position={[-0.817, 0.353, 1.627]} rotation={[-1.571, 0, 0]} ref={wheelBrakePos}>
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
