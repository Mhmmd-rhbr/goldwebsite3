import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Coin3D() {
  const coinGroupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // 1. Interactive Mouse-Tracking (Smoothed lookup angle)
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    
    if (coinGroupRef.current) {
      // Y-axis: mouse horizontal movement + base rotation
      const targetRotY = mouseX * 0.6 + t * 0.25; 
      coinGroupRef.current.rotation.y += (targetRotY - coinGroupRef.current.rotation.y) * 0.08;
      
      // X-axis: mouse vertical movement
      const targetRotX = -mouseY * 0.5;
      coinGroupRef.current.rotation.x += (targetRotX - coinGroupRef.current.rotation.x) * 0.08;
      
      // Gentle wobble rotation for beautiful gold shimmer
      coinGroupRef.current.rotation.z = Math.sin(t * 0.4) * 0.08;
      
      // Smooth vertical floating motion (sin wave)
      coinGroupRef.current.position.y = Math.sin(t * 1.0) * 0.2;
    }
  });

  return (
    <>
      {/* 
        ========================================================
        SCALED GROUP: Set to 0.9 to prevent clipping on screens
        ======================================================== 
      */}
      <group ref={coinGroupRef} scale={0.9}>

        {/* 
          ========================================================
          COIN BASE AND CORE RELIEFS (MINTED DESIGN SYSTEM)
          ======================================================== 
        */}

        {/* 1. Main Gold Disk Base */}
        <Cylinder args={[3.0, 3.0, 0.35, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial 
            color="#E6C200" 
            emissive="#0d0800"
            metalness={1.0} 
            roughness={0.35} // Increased roughness to diffuse light beautifully instead of blinding reflections
            clearcoat={0.3}
            clearcoatRoughness={0.2}
            envMapIntensity={1.8}
          />
        </Cylinder>

        {/* 2. Outer Rim Raised Border (Front face border) */}
        <Cylinder args={[3.01, 3.01, 0.38, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial 
            color="#FFDF00" 
            metalness={1.0} 
            roughness={0.25}
            clearcoat={0.4}
            envMapIntensity={2.0}
          />
        </Cylinder>

        {/* 3. Inset Satin Plate (Creates depth inside the coin rim) */}
        <Cylinder args={[2.82, 2.82, 0.4, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial 
            color="#D4AF37" 
            metalness={1.0} 
            roughness={0.4} // Satin finish for soft look
            envMapIntensity={1.5}
          />
        </Cylinder>

        {/* 4. Concentric circular groove (Engraved line) */}
        <Cylinder args={[2.0, 2.0, 0.41, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial 
            color="#9E8000" // Darker gold to simulate groove depth
            metalness={1.0} 
            roughness={0.6}
            envMapIntensity={1.0}
          />
        </Cylinder>

        {/* 5. Center Core Raised Plate */}
        <Cylinder args={[1.3, 1.3, 0.42, 64]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial 
            color="#FFDF00" 
            metalness={1.0} 
            roughness={0.3}
            envMapIntensity={2.2}
          />
        </Cylinder>

        {/* 
          ========================================================
          COIN ENGRAVINGS (حکاکی‌ها) - FRONT AND BACK FACES
          ======================================================== 
        */}

        {/* --- FRONT FACE ENGRAVINGS (z = 0.20) --- */}
        <group position={[0, 0, 0.02]}>
          {/* Raised circular track */}
          <Cylinder args={[1.1, 1.1, 0.4, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <meshPhysicalMaterial color="#B89600" metalness={1.0} roughness={0.4} />
          </Cylinder>

          {/* Detailed Raised Star (Central Engraving Motif) */}
          {Array.from({ length: 4 }).map((_, i) => {
            const angle = (i / 4) * Math.PI;
            return (
              <mesh key={`f-star-${i}`} rotation={[0, 0, angle]} position={[0, 0, 0.21]}>
                <boxGeometry args={[0.2, 1.4, 0.04]} />
                <meshPhysicalMaterial 
                  color="#FFF3C2" 
                  metalness={1.0} 
                  roughness={0.2} 
                  envMapIntensity={2.5}
                />
              </mesh>
            );
          })}
          
          {/* Inner core diamond */}
          <mesh rotation={[0, 0, Math.PI / 4]} position={[0, 0, 0.23]}>
            <boxGeometry args={[0.4, 0.4, 0.04]} />
            <meshPhysicalMaterial color="#FFFFFF" metalness={1.0} roughness={0.1} />
          </mesh>

          {/* Minted Border Teeth (دندانه‌های حکاکی شده دور سکه - جلو) */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i / 36) * Math.PI * 2;
            const x = Math.cos(angle) * 2.5;
            const y = Math.sin(angle) * 2.5;
            return (
              <mesh key={`f-teeth-${i}`} position={[x, y, 0.19]} rotation={[0, 0, angle]}>
                <boxGeometry args={[0.08, 0.2, 0.03]} />
                <meshPhysicalMaterial 
                  color="#FFDF00" 
                  metalness={1.0} 
                  roughness={0.3} 
                  envMapIntensity={2.0}
                />
              </mesh>
            );
          })}
        </group>

        {/* --- BACK FACE ENGRAVINGS (z = -0.02) --- */}
        <group position={[0, 0, -0.02]}>
          {/* Raised circular track */}
          <Cylinder args={[1.1, 1.1, 0.4, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <meshPhysicalMaterial color="#B89600" metalness={1.0} roughness={0.4} />
          </Cylinder>

          {/* Detailed Raised Star (Central Engraving Motif) */}
          {Array.from({ length: 4 }).map((_, i) => {
            const angle = (i / 4) * Math.PI + Math.PI / 8; // Offset star on the back for variance
            return (
              <mesh key={`b-star-${i}`} rotation={[0, 0, angle]} position={[0, 0, -0.21]}>
                <boxGeometry args={[0.2, 1.4, 0.04]} />
                <meshPhysicalMaterial 
                  color="#FFF3C2" 
                  metalness={1.0} 
                  roughness={0.2} 
                  envMapIntensity={2.5}
                />
              </mesh>
            );
          })}
          
          {/* Inner core diamond */}
          <mesh rotation={[0, 0, Math.PI / 4]} position={[0, 0, -0.23]}>
            <boxGeometry args={[0.4, 0.4, 0.04]} />
            <meshPhysicalMaterial color="#FFFFFF" metalness={1.0} roughness={0.1} />
          </mesh>

          {/* Minted Border Teeth (دندانه‌های حکاکی شده دور سکه - عقب) */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i / 36) * Math.PI * 2;
            const x = Math.cos(angle) * 2.5;
            const y = Math.sin(angle) * 2.5;
            return (
              <mesh key={`b-teeth-${i}`} position={[x, y, -0.19]} rotation={[0, 0, angle]}>
                <boxGeometry args={[0.08, 0.2, 0.03]} />
                <meshPhysicalMaterial 
                  color="#FFDF00" 
                  metalness={1.0} 
                  roughness={0.3} 
                  envMapIntensity={2.0}
                />
              </mesh>
            );
          })}
        </group>

        {/* 
          ========================================================
          COIN OUTER RIDGE DECORATION (MINTED GEAR LOOK ON SIDES)
          ======================================================== 
        */}
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * Math.PI * 2;
          const x = Math.cos(angle) * 2.99;
          const y = Math.sin(angle) * 2.99;
          return (
            <mesh 
              key={`side-ridge-${i}`} 
              position={[x, y, 0]} 
              rotation={[0, 0, angle]}
            >
              <boxGeometry args={[0.04, 0.15, 0.36]} />
              <meshPhysicalMaterial 
                color="#C5A000" 
                metalness={1.0} 
                roughness={0.2} 
                envMapIntensity={1.8}
              />
            </mesh>
          );
        })}

      </group>

      {/* 
        ========================================================
        BALANCED LIGHTING SYSTEM: Significantly reduced intensities 
        to solve overexposure and white blinding glares
        ======================================================== 
      */}
      <Environment preset="studio" />
      <ambientLight intensity={0.5} />
      
      {/* Soft key light */}
      <directionalLight position={[5, 10, 6]} intensity={1.8} color="#FFF8E0" />
      
      {/* Subtle fill light */}
      <directionalLight position={[-8, -5, 2]} intensity={0.8} color="#FFB050" />
      
      {/* Weak point light near the center for gentle specular shininess */}
      <pointLight position={[0, 0, 5]} intensity={1.8} color="#FFDF00" distance={15} decay={2.0} />

      {/* 
        ========================================================
        SUBTLE BLOOM EFFECT: Reduced intensity to let 3D details 
        and Farsi engravings be clearly visible
        ======================================================== 
      */}
      <EffectComposer>
        <Bloom 
          luminanceThreshold={0.55} // Only brightest edges will glow softly
          luminanceSmoothing={0.7} 
          height={300} 
          intensity={0.65} // Reduced from 2.2 for sophisticated look
        />
      </EffectComposer>
    </>
  );
}
