"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const SpaceScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Point Cloud Wave Animation
    const wavesCount = 5000;
    const wavePositions = new Float32Array(wavesCount * 3);
    const waveSizes = new Float32Array(wavesCount);
    
    for (let i = 0; i < wavesCount; i++) {
      const i3 = i * 3;
      wavePositions[i3] = (Math.random() - 0.5) * 60;     
      wavePositions[i3 + 1] = (Math.random() - 0.5) * 15; 
      wavePositions[i3 + 2] = (Math.random() - 0.5) * 60; 
      waveSizes[i] = Math.random();
    }

    const waveGeometry = new THREE.BufferGeometry();
    waveGeometry.setAttribute('position', new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute('size', new THREE.BufferAttribute(waveSizes, 1));

    const waveMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const wavePoints = new THREE.Points(waveGeometry, waveMaterial);
    mainGroup.add(wavePoints);

    // 2. High-Visibility Neon Rocket
    const rocketGroup = new THREE.Group();
    
    // Rocket Body - Dark metallic with neon edges
    const bodyGeom = new THREE.CylinderGeometry(0.8, 0.8, 4, 32);
    const bodyMat = new THREE.MeshStandardMaterial({ 
      color: 0x050505, 
      roughness: 0, 
      metalness: 1,
      emissive: 0x00ffff,
      emissiveIntensity: 0.2
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    rocketGroup.add(body);

    // Nose Cone - Pure Neon
    const noseGeom = new THREE.ConeGeometry(0.8, 2, 32);
    const noseMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const nose = new THREE.Mesh(noseGeom, noseMat);
    nose.position.y = 3;
    rocketGroup.add(nose);

    // Fins - Neon Wireframe look
    const finGeom = new THREE.BoxGeometry(2.5, 1.2, 0.1);
    const finMat = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8
    });
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(finGeom, finMat);
      fin.position.y = -1.2;
      fin.rotation.y = (Math.PI * 2 / 3) * i;
      rocketGroup.add(fin);
    }

    // Main Thruster Glow
    const engineGeom = new THREE.ConeGeometry(0.7, 1.5, 32);
    const engineMat = new THREE.MeshBasicMaterial({ 
      color: 0x00ffff, 
      transparent: true, 
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const engine = new THREE.Mesh(engineGeom, engineMat);
    engine.position.y = -2.5;
    engine.rotation.x = Math.PI;
    rocketGroup.add(engine);

    // Move rocket to foreground
    rocketGroup.position.z = 8; 
    mainGroup.add(rocketGroup);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00ffff, 10, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 20;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;

      // Update wave points
      const positions = waveGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < wavesCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];
        positions[i3 + 1] = Math.sin(x * 0.15 + time) * Math.cos(z * 0.15 + time) * 2;
      }
      waveGeometry.attributes.position.needsUpdate = true;

      // Rocket Movement
      targetX += (mouseX - targetX) * 0.1;
      targetY += (mouseY - targetY) * 0.1;

      rocketGroup.position.x = targetX * 25; 
      rocketGroup.position.y = -targetY * 15;
      rocketGroup.position.z = 8 + Math.sin(time) * 1;

      // Dynamic Rotation
      rocketGroup.rotation.z = -targetX * 1.5;
      rocketGroup.rotation.x = targetY * 1.5;
      rocketGroup.rotation.y += 0.03;

      // Pulsing Engine
      const pulse = 1 + Math.sin(time * 15) * 0.4;
      engine.scale.set(pulse, pulse, pulse);
      engine.material.opacity = 0.6 + Math.sin(time * 15) * 0.4;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div ref={containerRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-[#050505]" />
      
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
    </div>
  );
};

export default SpaceScene;