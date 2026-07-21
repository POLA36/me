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
    scene.fog = new THREE.FogExp2(0x000000, 0.045);

    const camera = new THREE.PerspectiveCamera(60, W() / H(), 0.1, 200);
    camera.position.set(0, 2.2, 14);

    const mouse = { x: 0, y: 0 };
    const rand = (min: number, max: number) => min + Math.random() * (max - min);

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

    // Centerpiece wireframe globe
    const sphereGroup = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(4.4, 32, 24);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(sphereGeo),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 })
    );
    sphereGroup.add(wire);

    const orbit = new THREE.Mesh(
      new THREE.TorusGeometry(6.4, 0.008, 12, 160),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.26 })
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

    // ---- Motif field: lab flasks, music notes, film reels, small globes (3D) + tesseracts (4D) ----
    const lineMat = (opacity: number) =>
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity });

    type Floater = {
      group: THREE.Group;
      baseY: number;
      amp: number;
      speed: number;
      phase: number;
      rotSpeed: THREE.Vector3;
    };
    const floaters: Floater[] = [];

    const addFloater = (
      group: THREE.Group,
      x: number,
      y: number,
      z: number,
      opts: { amp?: number; speed?: number; rotSpeed?: [number, number, number] } = {}
    ) => {
      group.position.set(x, y, z);
      scene.add(group);
      floaters.push({
        group,
        baseY: y,
        amp: opts.amp ?? rand(0.3, 0.6),
        speed: opts.speed ?? rand(0.25, 0.55),
        phase: Math.random() * Math.PI * 2,
        rotSpeed: new THREE.Vector3(...(opts.rotSpeed ?? [0, rand(-0.004, 0.004), 0])),
      });
    };

    // Bounds for scattering the field across the whole visible volume
    const rx = () => rand(-34, 34);
    const ry = () => rand(-16, 16);
    const rz = () => rand(-55, 9);

    const makeFlask = () => {
      const group = new THREE.Group();
      const profile = [
        new THREE.Vector2(0, 0),
        new THREE.Vector2(0.85, 0),
        new THREE.Vector2(0.92, 0.16),
        new THREE.Vector2(0.5, 0.98),
        new THREE.Vector2(0.24, 1.32),
        new THREE.Vector2(0.24, 1.8),
        new THREE.Vector2(0.34, 1.86),
      ];
      const geo = new THREE.LatheGeometry(profile, 14);
      group.add(new THREE.LineSegments(new THREE.WireframeGeometry(geo), lineMat(rand(0.16, 0.32))));
      const liquidLine = new THREE.Mesh(
        new THREE.TorusGeometry(0.46, 0.006, 8, 28),
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 })
      );
      liquidLine.rotation.x = Math.PI / 2;
      liquidLine.position.y = 0.62;
      group.add(liquidLine);
      return group;
    };

    const makeNote = () => {
      const group = new THREE.Group();
      const notehead = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.SphereGeometry(0.34, 10, 8)),
        lineMat(rand(0.16, 0.32))
      );
      notehead.scale.set(1, 0.72, 0.55);
      notehead.rotation.z = -0.3;
      group.add(notehead);
      const stem = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0.32, -0.1, 0),
          new THREE.Vector3(0.32, 1.55, 0),
        ]),
        lineMat(0.28)
      );
      group.add(stem);
      const flagCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.32, 1.55, 0),
        new THREE.Vector3(0.85, 1.3, 0),
        new THREE.Vector3(0.4, 1.0, 0),
        new THREE.Vector3(0.7, 0.78, 0),
      ]);
      const flag = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(flagCurve.getPoints(18)),
        lineMat(0.28)
      );
      group.add(flag);
      return group;
    };

    const makeReel = () => {
      const group = new THREE.Group();
      const op = rand(0.16, 0.32);
      group.add(
        new THREE.Mesh(
          new THREE.TorusGeometry(0.85, 0.025, 8, 40),
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: op })
        )
      );
      group.add(
        new THREE.Mesh(
          new THREE.TorusGeometry(0.16, 0.02, 8, 20),
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: op })
        )
      );
      const holeCount = 6;
      for (let i = 0; i < holeCount; i++) {
        const angle = (i / holeCount) * Math.PI * 2;
        const hx = Math.cos(angle) * 0.55;
        const hy = Math.sin(angle) * 0.55;
        const hole = new THREE.Mesh(
          new THREE.TorusGeometry(0.11, 0.015, 6, 14),
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: op })
        );
        hole.position.set(hx, hy, 0);
        group.add(hole);
        const spoke = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(Math.cos(angle) * 0.16, Math.sin(angle) * 0.16, 0),
            new THREE.Vector3(hx, hy, 0),
          ]),
          lineMat(op * 0.8)
        );
        group.add(spoke);
      }
      return group;
    };

    const makeGlobe = (radius: number) => {
      const group = new THREE.Group();
      group.add(
        new THREE.LineSegments(
          new THREE.WireframeGeometry(new THREE.SphereGeometry(radius, 14, 10)),
          lineMat(rand(0.14, 0.26))
        )
      );
      if (Math.random() > 0.4) {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(radius * 1.4, 0.006, 8, 64),
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 })
        );
        ring.rotation.x = Math.PI / 2.4;
        group.add(ring);
      }
      return group;
    };

    const FLASK_COUNT = 7;
    const NOTE_COUNT = 7;
    const REEL_COUNT = 7;
    const GLOBE_COUNT = 9;
    const TESS_COUNT = 4;

    for (let i = 0; i < FLASK_COUNT; i++) {
      const s = rand(0.7, 1.4);
      const g = makeFlask();
      g.scale.setScalar(s);
      addFloater(g, rx(), ry(), rz());
    }
    for (let i = 0; i < NOTE_COUNT; i++) {
      const s = rand(0.8, 1.6);
      const g = makeNote();
      g.scale.setScalar(s);
      addFloater(g, rx(), ry(), rz());
    }
    for (let i = 0; i < REEL_COUNT; i++) {
      const s = rand(0.8, 1.6);
      const g = makeReel();
      g.scale.setScalar(s);
      addFloater(g, rx(), ry(), rz());
    }
    for (let i = 0; i < GLOBE_COUNT; i++) {
      const radius = rand(0.4, 1.7);
      const g = makeGlobe(radius);
      addFloater(g, rx(), ry(), rz(), { rotSpeed: [rand(-0.002, 0.002), rand(-0.003, 0.003), 0] });
    }

    // Tesseracts: genuine 4D hypercubes, rotated in 4D and perspective-projected to 3D every frame
    const verts4D: number[][] = [];
    for (let i = 0; i < 16; i++) {
      verts4D.push([i & 1 ? 1 : -1, i & 2 ? 1 : -1, i & 4 ? 1 : -1, i & 8 ? 1 : -1]);
    }
    const tessEdges: [number, number][] = [];
    for (let i = 0; i < 16; i++) {
      for (let j = i + 1; j < 16; j++) {
        let diff = 0;
        for (let k = 0; k < 4; k++) if (verts4D[i][k] !== verts4D[j][k]) diff++;
        if (diff === 1) tessEdges.push([i, j]);
      }
    }
    const tessInstances: { attr: THREE.BufferAttribute; phase: number; rate: number }[] = [];
    for (let i = 0; i < TESS_COUNT; i++) {
      const positions = new Float32Array(tessEdges.length * 2 * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const lines = new THREE.LineSegments(geo, lineMat(rand(0.18, 0.34)));
      const group = new THREE.Group();
      group.add(lines);
      group.scale.setScalar(rand(0.8, 1.3));
      addFloater(group, rx(), ry(), rz(), { rotSpeed: [0, rand(-0.0015, 0.0015), 0] });
      tessInstances.push({
        attr: geo.attributes.position as THREE.BufferAttribute,
        phase: Math.random() * 10,
        rate: rand(0.85, 1.2),
      });
    }
    const updateTesseract = (attr: THREE.BufferAttribute, time: number) => {
      const a = time * 0.35;
      const b = time * 0.22;
      const cosA = Math.cos(a), sinA = Math.sin(a);
      const cosB = Math.cos(b), sinB = Math.sin(b);
      let p = 0;
      for (const [i0, i1] of tessEdges) {
        for (const idx of [i0, i1]) {
          let [x, y, z, w] = verts4D[idx];
          const x1 = x * cosA - w * sinA;
          const w1 = x * sinA + w * cosA;
          x = x1; w = w1;
          const y1 = y * cosB - z * sinB;
          const z1 = y * sinB + z * cosB;
          y = y1; z = z1;
          const distance = 2.4;
          const wScale = 1 / (distance - w);
          attr.array[p++] = x * wScale * 1.6;
          attr.array[p++] = y * wScale * 1.6;
          attr.array[p++] = z * wScale * 1.6;
        }
      }
      attr.needsUpdate = true;
    };

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

      floaters.forEach(({ group, baseY, amp, speed, phase, rotSpeed }) => {
        group.position.y = baseY + Math.sin(t * speed + phase) * amp;
        group.rotation.x += rotSpeed.x;
        group.rotation.y += rotSpeed.y;
        group.rotation.z += rotSpeed.z;
      });
      tessInstances.forEach(({ attr, phase, rate }) => updateTesseract(attr, t * rate + phase));

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
