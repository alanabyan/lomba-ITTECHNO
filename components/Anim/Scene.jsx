'use client';

import React from "react";
import { Canvas } from '@react-three/fiber'
import Model from '@/components/Anim/Model'

export default function Scene() {
    return (
        <Canvas>
            <Model></Model>
        </Canvas>
    )
}