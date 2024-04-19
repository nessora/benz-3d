import React, { useRef } from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { MeshReflectorMaterial } from '@react-three/drei';
import { Html } from '@react-three/drei';
import Benz from './Benz';
import { Suspense } from 'react';

const Experience = () => {
    const controls = useRef();

    return (
        <>
            <OrbitControls
                ref={controls}
                autoRotateSpeed={2}
                enableDamping
                dampingFactor={0.2}
                minPolarAngle={Math.PI / 2} // Set minimum polar angle (vertical rotation) to 0 (horizontal)
                maxPolarAngle={Math.PI / 2} // Set maximum polar angle to Math.PI (vertical)
            />
            <Stage environment="city" intensity={0.6} castShadow={false}>
                <Suspense fallback={<Html><div>Loading..</div></Html>}>
                    <Benz />
                </Suspense>
            </Stage>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
                <planeGeometry args={[40, 40]} />
                <MeshReflectorMaterial
                    blur={[-5, -5]}
                    resolution={1320}
                    mixBlur={1}
                    mixStrength={10}
                    roughness={1}
                    depthScale={0.7}
                    minDepthThreshold={0.2}
                    maxDepthThreshold={0.5}
                    color="#101010"
                    metalness={0.7}
                />
            </mesh>
        </>
    );
};

export default Experience;
