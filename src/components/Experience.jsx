import React, { useRef } from "react";
import { Car } from "./Car";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { Vector3 } from "three";

const Experience = () => {
  const carRef = useRef();
  const sceneRef = useRef();
  const originalCameraPosition = new Vector3(0, 2, 10); // Initial camera position
  const focusPoint = new Vector3(0, 1, 0); // Focus point for zoom-in
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    const progress = scrollYProgress.get();
    const yRotationEnd = 0.5;
    const zoomStart = 0.9;
    const maxRotationY = Math.PI / 1;
    const maxRotationX = Math.PI * 4;
    const maxZoom = 10.5;

    // Handle Y-axis rotation first
    if (progress <= yRotationEnd) {
      const yProgress = progress / yRotationEnd;
      carRef.current.rotation.y = -Math.PI / 1 + yProgress * Math.PI * 1.5;
    } else {
      carRef.current.rotation.x = maxRotationY;
      carRef.current.rotation.z = maxRotationY;

      // Handle X-axis rotation
      const xRotationProgress = Math.min(
        ((progress - yRotationEnd) / (zoomStart - yRotationEnd)) * maxRotationX,
        maxRotationX
      );
      carRef.current.rotation.y = xRotationProgress;

      // Zoom and focus
      if (progress >= zoomStart) {
        const zoomProgress = (progress - zoomStart) / (1 - zoomStart);
        const zoomScale = 1 + zoomProgress * maxZoom;
        carRef.current.scale.set(zoomScale, zoomScale, zoomScale);

        // Move camera towards focus point
        const zoomCameraPosition = new Vector3(0, 1, 2); // Closer position
        state.camera.position.lerp(zoomCameraPosition, 0.1); // Smooth zoom-in
        state.camera.lookAt(focusPoint); // Look at focus point
      } else {
        // Return to original position after zoom-in
        state.camera.position.lerp(originalCameraPosition, 0.1); // Smooth return
        state.camera.lookAt(focusPoint); // Ensure camera points to the focus point
      }
    }
  });

  return (
    <group ref={sceneRef}>
      <group ref={carRef} scale={1}>
        <Car />
      </group>
    </group>
  );
};

export default Experience;
