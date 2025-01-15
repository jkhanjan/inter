import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function Car(props) {
  const texture = useTexture("./img1.webp");
  const { nodes, materials } = useGLTF("/iphone15.glb");
  let scale = 1;

  if (window.innerWidth < 768) {
    scale = 13;
  } else {
    scale = 20;
  }
  return (
    <group {...props} scale={scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["metal.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.metal}
        position={[0.038, 0.042, -0.002]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["PaletteMaterial002.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["metal.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["metal.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rqgRAGHOwnuBypi.geometry}
        material={materials["HGhEhpqSBZRnjHC.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TakBsdEjEytCAMK001.geometry}
        material={materials["PaletteMaterial003.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TakBsdEjEytCAMK.geometry}
        material={materials["PaletteMaterial003.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IkoiNqATMVoZFKD.geometry}
        material={materials["hiVunnLeAHkwGEo.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
        material={materials["bCgzXjHOanGdTFV.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CdalkzDVnwgdEhS.geometry}
        material={materials["jlzuBkUzuJqgiAK.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ttmRoLdJipiIOmf001.geometry}
        material={materials["hUlRcbieVuIiOXG.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wLfSXtbwRlBrwof.geometry}
        material={materials["oZRkkORNzkufnGD.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IykfmVvLplTsTEW.geometry}
        material={materials["PaletteMaterial004.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials["PaletteMaterial002.001"]}
        position={[-0.024, 0.066, 0.003]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WJwwVjsahIXbJpU.geometry}
        material={materials["yhcAXNGcJWCqtIS.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DCLCbjzqejuvsqH.geometry}
        material={materials["vhaEJjZoqGtyLdo.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.SCREEN}
        scale={0.01}
      >
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
        material={materials["TBLSREBUyLMVtJa.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vELORlCJixqPHsZ.geometry}
        material={materials["zFdeDaGNRwzccye.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjsDkGiopeiEJZK002.geometry}
        material={materials["PaletteMaterial001.001"]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.ring}
        position={[-0.018, -0.01, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjdhycfQYjKMDyn001.geometry}
        material={materials["ujsvqBWRMnqdwPx.001"]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/iphone15.glb");
