'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W(), H());

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.055);

    const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 200);
    camera.position.set(0, 2.2, 14);

    const mouse = { x: 0, y: 0 };

    // Starfield
    const starGeo = new THREE.BufferGeometry();
    const sCount = 2600;
    const pos = new Float32Array(sCount * 3);
    for (let i = 0; i < sCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 120;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 120 - 20;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.11, transparent: true, opacity: 0.85, sizeAttenuation: true })
    );
    scene.add(stars);

    // Wireframe sphere
    const sphereGroup = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(4.4, 32, 24);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(sphereGeo),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.22 })
    );
    sphereGroup.add(wire);

    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(6.4, 0.008, 12, 160),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.28 })
    );
    orbit.rotation.x = Math.PI / 2.4;
    sphereGroup.add(orbit);
    sphereGroup.position.set(0, 1.6, -2);
    scene.add(sphereGroup);

    // Grid floor
    const grid = new THREE.GridHelper(120, 60, 0x1a1a1a, 0x141414);
    grid.position.y = -6;
    const mats = Array.isArray(grid.material) ? grid.material : [grid.material];
    mats.forEach((m) => {
      m.transparent = true;
      (m as THREE.LineBasicMaterial).opacity = 0.6;
    });
    scene.add(grid);

    const onResize = () => {
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      renderer.setSize(W(), H());
    };
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove);

    let t = 0;
    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.005;
      stars.rotation.y = t * 0.06;
      stars.rotation.x = Math.sin(t * 0.3) * 0.04;
      wire.rotation.y += 0.0014;
      wire.rotation.x = Math.sin(t * 0.15) * 0.12;
      orbit.rotation.z += 0.0022;
      grid.position.z = ((t * 4) % 4) - 2;
      camera.position.x += (mouse.x * 2.2 - camera.position.x) * 0.04;
      camera.position.y += (2.2 - mouse.y * 1.6 - camera.position.y) * 0.04;
      camera.lookAt(0, 1.2, -2);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
