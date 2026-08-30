import React, { useRef, useMemo, Component, ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface HeroThreeSceneProps {
  mousePos: { normalizedX: number; normalizedY: number };
}

// React Error Boundary to guarantee WebGL runtime safety
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('WebGL Canvas fallback triggered:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#b8ff2c]/5 via-transparent to-[#476800]/5 blur-xl" />
      );
    }
    return this.props.children;
  }
}

// 1. Camera Controller with Ultra-Smooth, Subtle Parallax (Max ~3° Tilt)
function CameraRig({ mousePos }: HeroThreeSceneProps) {
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;

    // Ultra-calm parallax: max ~3 degrees tilt
    const targetCamX = mousePos.normalizedX * 0.3;
    const targetCamY = -mousePos.normalizedY * 0.22;

    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetCamX, 1.8, delta);
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, targetCamY, 1.8, delta);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

// Helper hook to adapt 3D object positioning based on aspect ratio
function useResponsiveScale() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 6.5;
  const spreadX = isMobile ? viewport.width * 0.42 : 1.0;
  return { isMobile, spreadX };
}

// Premium White Glass & Crystal Materials
const whiteGlassMaterialProps = {
  color: '#ffffff',
  transmission: 0.9,
  transparent: true,
  opacity: 0.9,
  roughness: 0.06,
  metalness: 0.04,
  ior: 1.48,
  thickness: 0.8,
  clearcoat: 1.0,
  clearcoatRoughness: 0.04,
  reflectivity: 0.92,
};

const frostedGlassMaterialProps = {
  color: '#f4f7ee',
  transmission: 0.85,
  transparent: true,
  opacity: 0.85,
  roughness: 0.16,
  metalness: 0.06,
  ior: 1.42,
  thickness: 0.9,
  clearcoat: 0.85,
  clearcoatRoughness: 0.08,
};

// 2. Top-Left: Small Diamond (~80px, well out of text bounds)
function TopLeftDiamond({ mousePos }: HeroThreeSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  const { spreadX } = useResponsiveScale();

  const baseX = -5.1 * spreadX;
  const baseY = 2.7;
  const baseZ = -0.2;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    timeRef.current += delta;
    const t = timeRef.current;

    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.z += delta * 0.08;

    const floatY = Math.sin(t * 0.35) * 0.08;
    const parallaxX = mousePos.normalizedX * 0.12;
    const parallaxY = -mousePos.normalizedY * 0.1;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, baseX + parallaxX, delta * 2);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY + floatY + parallaxY, delta * 2);
  });

  return (
    <mesh ref={meshRef} position={[baseX, baseY, baseZ]} scale={[0.22, 0.32, 0.22]} castShadow>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial {...whiteGlassMaterialProps} />
    </mesh>
  );
}

// 3. Top-Right: Small Transparent Crystal (~100px)
function TopRightCrystal({ mousePos }: HeroThreeSceneProps) {
  const crystalRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  const { spreadX } = useResponsiveScale();

  const baseX = 4.8 * spreadX;
  const baseY = 2.6;
  const baseZ = -0.4;

  useFrame((_, delta) => {
    if (!crystalRef.current) return;
    timeRef.current += delta;
    const t = timeRef.current;

    crystalRef.current.rotation.y -= delta * 0.1;
    crystalRef.current.rotation.x += delta * 0.08;

    const floatY = Math.sin(t * 0.32) * 0.08;
    const parallaxX = mousePos.normalizedX * 0.1;
    const parallaxY = -mousePos.normalizedY * 0.08;

    crystalRef.current.position.x = THREE.MathUtils.lerp(crystalRef.current.position.x, baseX + parallaxX, delta * 2);
    crystalRef.current.position.y = THREE.MathUtils.lerp(crystalRef.current.position.y, baseY + floatY + parallaxY, delta * 2);
  });

  return (
    <mesh ref={crystalRef} position={[baseX, baseY, baseZ]} scale={[0.32, 0.32, 0.32]} castShadow>
      <icosahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial {...whiteGlassMaterialProps} ior={1.5} roughness={0.05} />
    </mesh>
  );
}

// 4. Behind Portrait: One Medium Glass Crystal (~210px, Z: -1.2 for deep background layering)
function BehindPortraitCrystal({ mousePos }: HeroThreeSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  const { spreadX } = useResponsiveScale();

  const baseX = 2.8 * spreadX;
  const baseY = -0.1;
  const baseZ = -1.2;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    timeRef.current += delta;
    const t = timeRef.current;

    // Ultra-slow majestic rotation (~35s loop)
    meshRef.current.rotation.y += delta * 0.06;
    meshRef.current.rotation.z += delta * 0.03;

    const floatY = Math.sin(t * 0.25) * 0.07;
    const parallaxX = mousePos.normalizedX * 0.06;
    const parallaxY = -mousePos.normalizedY * 0.05;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, baseX + parallaxX, delta * 1.8);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY + floatY + parallaxY, delta * 1.8);
  });

  return (
    <mesh ref={meshRef} position={[baseX, baseY, baseZ]} scale={[0.68, 0.68, 0.68]} castShadow receiveShadow>
      <dodecahedronGeometry args={[1.3, 0]} />
      <meshPhysicalMaterial {...frostedGlassMaterialProps} thickness={1.2} roughness={0.12} />
    </mesh>
  );
}

// 5. Bottom-Left: Small Polyhedron (~90px)
function BottomLeftPolyhedron({ mousePos }: HeroThreeSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  const { spreadX } = useResponsiveScale();

  const baseX = -4.9 * spreadX;
  const baseY = -2.6;
  const baseZ = -0.3;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    timeRef.current += delta;
    const t = timeRef.current;

    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x += delta * 0.08;

    const floatY = Math.cos(t * 0.38) * 0.08;
    const parallaxX = mousePos.normalizedX * 0.12;
    const parallaxY = -mousePos.normalizedY * 0.09;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, baseX + parallaxX, delta * 2);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY + floatY + parallaxY, delta * 2);
  });

  return (
    <mesh ref={meshRef} position={[baseX, baseY, baseZ]} scale={[0.28, 0.28, 0.28]} castShadow>
      <tetrahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial {...whiteGlassMaterialProps} />
    </mesh>
  );
}

// 6. Bottom-Right: Small Diamond (~80px)
function BottomRightDiamond({ mousePos }: HeroThreeSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  const { spreadX } = useResponsiveScale();

  const baseX = 4.4 * spreadX;
  const baseY = -2.5;
  const baseZ = -0.5;

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    timeRef.current += delta;
    const t = timeRef.current;

    meshRef.current.rotation.x += delta * 0.09;
    meshRef.current.rotation.y -= delta * 0.11;

    const floatY = Math.sin(t * 0.3) * 0.07;
    const parallaxX = mousePos.normalizedX * 0.09;
    const parallaxY = -mousePos.normalizedY * 0.07;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, baseX + parallaxX, delta * 1.8);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, baseY + floatY + parallaxY, delta * 1.8);
  });

  return (
    <mesh ref={meshRef} position={[baseX, baseY, baseZ]} scale={[0.26, 0.26, 0.26]} castShadow>
      <octahedronGeometry args={[1, 0]} />
      <meshPhysicalMaterial {...frostedGlassMaterialProps} thickness={0.9} />
    </mesh>
  );
}

// 7. Sparse Ambient Particles
function SubtleAmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesCount = 22;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#e2e8f0"
        transparent
        opacity={0.5}
        blending={THREE.NormalBlending}
      />
    </points>
  );
}

// Minimal Enterprise 3D Scene Composition
function SceneContent({ mousePos }: HeroThreeSceneProps) {
  return (
    <>
      <ambientLight intensity={0.95} color="#f8fafc" />
      <directionalLight position={[-6, 8, 6]} intensity={1.8} color="#ffffff" castShadow />
      <directionalLight position={[6, 5, 3]} intensity={1.0} color="#d9f99d" />
      <directionalLight position={[-4, -5, -2]} intensity={0.7} color="#e2e8f0" />

      <CameraRig mousePos={mousePos} />
      <TopLeftDiamond mousePos={mousePos} />
      <TopRightCrystal mousePos={mousePos} />
      <BehindPortraitCrystal mousePos={mousePos} />
      <BottomLeftPolyhedron mousePos={mousePos} />
      <BottomRightDiamond mousePos={mousePos} />
      <SubtleAmbientParticles />
    </>
  );
}

export const HeroThreeScene: React.FC<HeroThreeSceneProps> = ({ mousePos }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 w-full h-full overflow-hidden">
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <SceneContent mousePos={mousePos} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};
