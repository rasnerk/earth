import { useFrame, useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import Moon from "./moon";


function Earth() {
    
    // Load in required textures
    const skin = useLoader(THREE.TextureLoader, 'earth-skin.jpg')
    const bumpSkin = useLoader(THREE.TextureLoader, 'earth-bump.jpg')
    const specularSkin = useLoader(THREE.TextureLoader, 'earth-shine.jpg')
    const cloudSkin = useLoader(THREE.TextureLoader, 'clouds3.jpg')
    const stars = useLoader(THREE.TextureLoader, 'stars.jpg')

    // Define Earth & Cloud Mesh
    const earthMesh = React.useRef();
    const cloudMesh = React.useRef();

    // Rotate Earth and Cloud Mesh
    useFrame( () => {
        earthMesh.current.rotation.y += 0.0015;
        cloudMesh.current.rotation.y += -0.0005;
    })

    return (
        <>
            {/* Earth Mesh */}
            <mesh ref={earthMesh}>
                <sphereGeometry args={[6,32,32]} />
                <meshPhongMaterial specularMap={specularSkin} specular={{color: "grey"}} />
                <meshStandardMaterial
                    map={skin}
                    bumpMap={bumpSkin}
                    roughness={0.5} 
                    metalness={0.5}
                    
                />
            </mesh>

            {/* Clouds Mesh */}
            <mesh ref={cloudMesh}>
                <sphereGeometry args={[6.03,32,32]} />
                <meshPhongMaterial
                    map={cloudSkin}
                    side={THREE.DoubleSide}
                    opacity={0.4}
                    transparent={true}
                    depthWrite={true}
                />
            </mesh>

            {/* Galaxy Background Mesh */}
            <mesh>
                <boxGeometry args={[200,200,90]} />
                <meshPhongMaterial
                    map={stars}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Load in Moon Mesh */}
            <Moon />
        </>            
        
    )
}

export default Earth;