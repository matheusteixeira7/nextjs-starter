'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring, useScroll, useTransform, MotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { Mesh } from 'three'

export function AnimatedCube() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start center', 'end center'],
  })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
  const smoothProgress = useSpring(progress, { damping: 20 })

  return (
    <div ref={container} className="h-screen w-full">
      <div className="sticky top-0 h-screen">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={3} />
          <directionalLight position={[1, 1, 1]} />
          <Cube progress={smoothProgress} />
        </Canvas>
      </div>
    </div>
  )
}

type CubeProps = {
  progress: MotionValue<number>
}

function Cube({ progress }: CubeProps) {
  const mesh = useRef<Mesh>(null)

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001
      mesh.current.rotation.x += 0.001
    }
  })

  return (
    // @ts-expect-error motion mesh
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00e5ff" attach="material-0" />
      <meshStandardMaterial color="#00e5ff" attach="material-1" />
      <meshStandardMaterial color="#f14187" attach="material-2" />
      <meshStandardMaterial color="#f14187" attach="material-3" />
      <meshStandardMaterial color="#ffd900" attach="material-4" />
      <meshStandardMaterial color="#ffd900" attach="material-5" />
    </motion.mesh>
  )
}

// 00e5ff azul
// ffd900 amarelo
// f14187 rosa
