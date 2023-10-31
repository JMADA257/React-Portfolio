import React, { useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import EarthMap from "../../assets/textures/earth.jpg";

function Earth(props) {
  // Load the Earth texture using the TextureLoader from three.js
  const earth = useLoader(TextureLoader, EarthMap);

  // Create a reference to the mesh element
  const meshRef = useRef();

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Canvas>
        {/* Add an ambient light to the scene */}
        <ambientLight intensity={1} />

        {/* Add a directional light to the scene */}
        <directionalLight position={[0, 0, 5]} />

        {/* Create a mesh element representing the sphere */}
        <mesh ref={meshRef} scale={[2.5, 2.5, 2.5]}>
          {/* Define the geometry of the sphere */}
          <sphereGeometry args={[1, 32, 32]} />

          {/* Apply the Earth texture to the sphere */}
          <meshStandardMaterial map={earth} />
        </mesh>

        {/* Add the GlobeRotation component to rotate the sphere */}
        <GlobeRotation meshRef={meshRef} />
      </Canvas>
    </div>
  );
}

function GlobeRotation({ meshRef }) {
  // Use the useFrame hook from @react-three/fiber to perform actions on each frame update
  useFrame(() => {
    if (meshRef.current) {
      // Rotate the sphere on the y-axis to make it spin
      meshRef.current.rotation.y += 0.002; // Adjust the rotation speed here

      // Angle the sphere on the x-axis to tilt it down
      meshRef.current.rotation.x = Math.PI / 8; // Adjust the angle here
    }
  });

  return null;
}

export default Earth;
