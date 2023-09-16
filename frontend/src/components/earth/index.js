import React from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Load Textures
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  return (
    <>
      <ambientLight intensity={1} /> {/* Lighting */}
      {/* Sun */}
      <pointLight color="#f6f3ea" position={[2, 0, 2]} intensity={1.2} />
      {/* Stars */}
      <Stars
        radius={300}
        depth={60}
        count={2000}
        factor={7}
        saturation={0}
        fade={true}
      />
      {/* Clouds */}
      <mesh>
        <sphereGeometry args={[2.01, 32, 32]} />
        {/* Might need to change THREE.DoubleSide */}
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        {/* Render Mesh */}
        <sphereGeometry args={[2, 32, 32]} /> {/* Shape */}
        <meshPhongMaterial specularMap={specularMap} /> {/* Material */}
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enableRotate={true}
          rotationSpeed={0.4}
          autoRotate={true}
          autoRotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
