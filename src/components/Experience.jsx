import { PresentationControls, Stage } from '@react-three/drei'
import { MeshReflectorMaterial } from '@react-three/drei'
import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { Suspense } from 'react'
import { Html } from '@react-three/drei'

const Experience = () => {

    const gltf = useLoader(GLTFLoader, './models/benz.glb');

    return (

        <PresentationControls
            speed={1.5}
            global
            polar={[-0.1, Math.PI / 4]}
        // rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
            <Stage environment="city" intensity={0.6} castShadow={false}>
                <Suspense fallback={<Html><div>Loading..</div></Html>}>
                    <primitive object={gltf.scene} />
                </Suspense>                         
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                />
            </mesh>
        </PresentationControls>

    )
}

export default Experience