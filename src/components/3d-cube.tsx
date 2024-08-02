'use client'

import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useSpring, useScroll, useTransform, MotionValue } from 'framer-motion'
import { motion } from 'framer-motion-3d'

export function AnimatedCube() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })
  const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
  const smoothProgress = useSpring(progress, { damping: 20 })

  return (
    <div ref={container} className="h-screen w-full">
      <div className="sticky top-0 h-screen">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
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
  const mesh = useRef(null)

  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial color="red" attach="material-0" />
      <meshStandardMaterial color="green" attach="material-1" />
      <meshStandardMaterial color="blue" attach="material-2" />
      <meshStandardMaterial color="yellow" attach="material-3" />
      <meshStandardMaterial color="purple" attach="material-4" />
      <meshStandardMaterial color="orange" attach="material-5" />
    </motion.mesh>
  )
}
