import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

function Moon() {

    // Load in Moon texture
    const moonSkin = useLoader(THREE.TextureLoader, 'moon.jpg')

    // moonRotationTool defined to make the moons orbit
    const moonRotationTool = React.useRef();

    useFrame( () => {
        moonRotationTool.current.rotation.y += 0.001;
    })

    return (
        <group ref={moonRotationTool} position={[0,0,0]}>
            <mesh position={[-16.5,1,0]}>
                <sphereGeometry args={[1.62,32,32]} />
                <meshPhongMaterial
                    map={moonSkin}
                    shininess={0.9}
                />
            </mesh>
        </group>      
    )
}

export default Moon;