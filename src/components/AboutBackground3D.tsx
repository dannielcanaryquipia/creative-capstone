import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../hooks/useTheme";

function Molecule({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.05;
    ref.current.rotation.y += delta * 0.07;
  });

  const atoms = useMemo(() => [
    { pos: [0, 0, 0] as [number, number, number], s: 0.6 },
    { pos: [1.0, 0.3, 0.5] as [number, number, number], s: 0.35 },
    { pos: [-0.8, 0.5, -0.6] as [number, number, number], s: 0.3 },
    { pos: [0.4, -0.7, 0.8] as [number, number, number], s: 0.25 },
    { pos: [-0.3, -0.6, -0.9] as [number, number, number], s: 0.3 },
  ], []);

  const bondsList = useMemo(() => [
    [0, 1], [0, 2], [0, 3], [0, 4],
  ], []);

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.8}>
      <group ref={ref}>
        {bondsList.map(([i, j], idx) => {
          const a = new THREE.Vector3(...atoms[i].pos);
          const b = new THREE.Vector3(...atoms[j].pos);
          const mid = a.clone().add(b).multiplyScalar(0.5);
          const len = a.distanceTo(b);
          return (
            <mesh key={idx} position={mid.toArray()}>
              <cylinderGeometry args={[0.04, 0.04, len, 6]} />
              <meshPhysicalMaterial color={color} transparent opacity={0.35} roughness={0.3} metalness={0.1} />
            </mesh>
          );
        })}
        {atoms.map((b, i) => (
          <mesh key={i} position={b.pos}>
            <Sphere args={[b.s, 24, 24]}>
              <MeshDistortMaterial color={color} speed={1.2} distort={0.15} radius={1} roughness={0.2} metalness={0.4} />
            </Sphere>
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function Book({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.04;
  });

  const pages = useMemo(() => [0, 1, 2, 3, 4], []);

  return (
    <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.6}>
      <group ref={ref}>
        {pages.map((_, i) => (
          <mesh key={i} position={[0, 0.05 + i * 0.045, 0]}>
            <boxGeometry args={[1.2 - i * 0.04, 0.03, 0.85 - i * 0.04]} />
            <meshPhysicalMaterial
              color={i % 2 === 0 ? "#f5f0e8" : "#ede5d8"}
              roughness={0.7}
              metalness={0.1}
              transparent
              opacity={0.95}
            />
          </mesh>
        ))}
        <mesh position={[0, 0.28, 0]}>
          <boxGeometry args={[1.25, 0.06, 0.9]} />
          <meshPhysicalMaterial color={color} roughness={0.3} metalness={0.5} />
        </mesh>
        <mesh position={[0, -0.02, 0]}>
          <boxGeometry args={[1.25, 0.06, 0.9]} />
          <meshPhysicalMaterial color={color} roughness={0.4} metalness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}

function Atom({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.06;
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <Float speed={0.7} rotationIntensity={0.1} floatIntensity={0.5}>
      <group ref={ref}>
        <Torus args={[1.1, 0.03, 16, 48]}>
          <meshPhysicalMaterial color={color} transparent opacity={0.3} roughness={0.2} metalness={0.1} />
        </Torus>
        <Torus args={[1.1, 0.03, 16, 48]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial color={color} transparent opacity={0.25} roughness={0.2} metalness={0.1} />
        </Torus>
        <Torus args={[1.1, 0.03, 16, 48]} rotation={[0, Math.PI / 2, Math.PI / 2]}>
          <meshPhysicalMaterial color={color} transparent opacity={0.2} roughness={0.2} metalness={0.1} />
        </Torus>
        {[0, 1, 2].map((_, i) => {
          const angle = (i / 3) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(angle) * 1.1, Math.sin(angle) * 1.1, 0]}>
              <Sphere args={[0.1, 12, 12]}>
                <meshPhysicalMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.2} metalness={0.1} />
              </Sphere>
            </mesh>
          );
        })}
        <Sphere args={[0.22, 20, 20]}>
          <MeshDistortMaterial color={color} speed={1.5} distort={0.08} radius={0.5} roughness={0.3} metalness={0.6} />
        </Sphere>
      </group>
    </Float>
  );
}

function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.2,
        0.05
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function AboutBackground3D() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const shapes = useMemo(
    () => [
      { color: isDark ? "#4cc77a" : "#1F4B43", type: "molecule" as const },
      { color: isDark ? "#ffb5a0" : "#9E4126", type: "book" as const },
      { color: isDark ? "#dea845" : "#F5BD58", type: "atom" as const },
    ],
    [isDark]
  );

  const prefersReduced = useMemo(() => {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return false;
    }
  }, []);

  if (prefersReduced) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: "100vw", height: "100dvh", opacity: 0.5 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={0.9} />
        <Suspense fallback={null}>
          <ParallaxGroup>
            <group position={[-2.5, 1.2, 0]}><Molecule color={shapes[0].color} /></group>
            <group position={[2.2, -0.6, -1]}><Book color={shapes[1].color} /></group>
            <group position={[0, 1.6, -2]}><Atom color={shapes[2].color} /></group>
          </ParallaxGroup>
        </Suspense>
      </Canvas>
    </div>
  );
}