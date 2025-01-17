import React, { useRef, useEffect } from "react";
import { Car } from "./Car";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { Vector3 } from "three";

const Experience = () => {
  const carRef = useRef();
  const sceneRef = useRef();
  const originalCameraPosition = new Vector3(0, 1, 10);
  const focusPoint = new Vector3(0, 1, 0);
  const { scrollYProgress } = useScroll();

  // Add touch event handling
  useEffect(() => {
    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => document.removeEventListener("touchmove", handleTouchMove);
  }, []);

  useFrame((state) => {
    // Ensure we have a valid reference
    if (!carRef.current) return;

    const progress = scrollYProgress.get();

    // Clamp progress value between 0 and 1
    const clampedProgress = Math.max(0, Math.min(1, progress));

    const yRotationEnd = 0.5;
    const zoomStart = 0.9;
    const maxRotationY = Math.PI / 1;
    const maxRotationX = Math.PI * 4;
    const maxZoom = 10.5;

    // Add performance optimization for mobile
    const lerpFactor = state.device.mobile ? 0.05 : 0.1; // Slower interpolation on mobile

    // Handle Y-axis rotation first
    if (clampedProgress <= yRotationEnd) {
      const yProgress = clampedProgress / yRotationEnd;
      carRef.current.rotation.y = -Math.PI / 1 + yProgress * Math.PI * 1.5;
    } else {
      carRef.current.rotation.x = maxRotationY;
      carRef.current.rotation.z = maxRotationY;

      // Handle X-axis rotation with smoother interpolation
      const xRotationProgress = Math.min(
        ((clampedProgress - yRotationEnd) / (zoomStart - yRotationEnd)) *
          maxRotationX,
        maxRotationX
      );
      carRef.current.rotation.y = THREE.MathUtils.lerp(
        carRef.current.rotation.y,
        xRotationProgress,
        lerpFactor
      );

      // Zoom and focus with optimized calculations
      if (clampedProgress >= zoomStart) {
        const zoomProgress = (clampedProgress - zoomStart) / (1 - zoomStart);
        const zoomScale = 1 + zoomProgress * maxZoom;

        // Smooth scale transition
        carRef.current.scale.lerp(
          new Vector3(zoomScale, zoomScale, zoomScale),
          lerpFactor
        );

        // Smooth camera movement
        const zoomCameraPosition = new Vector3(0, 1, 2);
        state.camera.position.lerp(zoomCameraPosition, lerpFactor);
        state.camera.lookAt(focusPoint);
      } else {
        state.camera.position.lerp(originalCameraPosition, lerpFactor);
        state.camera.lookAt(focusPoint);
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
