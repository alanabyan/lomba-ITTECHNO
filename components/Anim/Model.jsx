import { useGLTF } from "@react-three/drei";
import React from "react";

export default function Model() {

    const { nodes } = useGLTF("/mesh/Robot.glb")

    return(
        <group>
            <mesh {...nodes.high_poly}>

            </mesh>
        </group>
    )
}