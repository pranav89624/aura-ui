import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Star, Menu, Play, MoveRight } from 'lucide-react';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import { CipherText } from './CipherText';

const PremiumStar = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef1 = useRef<THREE.Mesh>(null!);
  const meshRef2 = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Auto Rotate
      groupRef.current.rotation.y += delta * 0.1;
      
      // MOUSE FOLLOW PHYSICS
      // We gently lerp (interpolate) the rotation to match mouse position
      const targetX = state.pointer.y * 0.5;
      const targetY = state.pointer.x * 0.5;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -targetY, 0.1);
    }
  });

  const materialProps = {
    color: hovered ? "#ffaa40" : "#f97316",
    roughness: 0.15,
    metalness: 0.6,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    emissive: hovered ? "#ff5500" : "#000000",
    emissiveIntensity: 0.2,
  };

  return (
    <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} scale={hovered ? 1.1 : 1}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef1}>
          <octahedronGeometry args={[1.8, 0]} />
          <meshPhysicalMaterial {...materialProps} />
        </mesh>
        <mesh ref={meshRef2} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <octahedronGeometry args={[1.8, 0]} />
          <meshPhysicalMaterial {...materialProps} wireframe={hovered} wireframeLinewidth={2} />
        </mesh>
      </Float>
    </group>
  );
};

const Scene = () => (
  <>
    <PerspectiveCamera makeDefault position={[0, 0, 6]} />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} />
    <pointLight position={[-10, -10, -5]} color="#f97316" intensity={5} />
    <Environment preset="city" />
    <PremiumStar />
    <Sparkles count={40} scale={5} size={4} speed={0.4} opacity={0.5} color="#f97316" />
    
    {/* FIXED: multisampling={0} prevents the WebGL crash/Context Lost */}
    <EffectComposer enableNormalPass multisampling={0}>
      <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.6} />
      <Noise opacity={0.04} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  </>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group cursor-pointer">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-black text-white transition-all group-hover:rotate-3 group-hover:scale-105">
             <Star className="h-5 w-5 fill-orange-700 text-orange-700 transition-transform duration-500 group-hover:rotate-180" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">Aura<span className="text-orange-700">UI</span></span>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {['Features', 'Work', 'Footer'].map((item) => (
             <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="relative text-sm font-medium text-gray-600 transition-colors hover:text-black group">
              {item === 'Footer' ? 'Contact' : item}
              <span className="absolute inset-x-0 -bottom-1 h-px bg-orange-500 scale-x-0 transition-transform group-hover:scale-x-100" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => scrollTo('footer')} className="hidden rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 lg:block">Let's talk</button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-gray-900"><Menu className="h-6 w-6" /></button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 lg:hidden shadow-xl animate-fade-in-up">
           {['Features', 'Work', 'Contact'].map((item) => (
             <button key={item} onClick={() => { scrollTo(item === 'Contact' ? 'footer' : item.toLowerCase()); setIsMobileMenuOpen(false); }} className="text-left text-lg font-semibold text-gray-800">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  
  return (
    <div className="relative min-h-screen w-full bg-[#FDFDFD] text-gray-900 overflow-hidden">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-16 lg:px-12 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          
          {/* LEFT COLUMN */}
          <div className="relative z-20 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-wrap gap-3 animate-fade-in-up">
              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-sm hover:scale-105 transition-transform">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-700 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-700"></span>
                </span>
                Available for hire
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[0.95] tracking-tighter lg:text-[5.5rem]">
              <CipherText text="Design that" /> <br />
              <span className="relative whitespace-nowrap text-orange-700">
                <span className="relative z-10"><CipherText text="transcends" /></span>
                <span className="absolute -bottom-2 left-0 z-0 h-3 w-full -rotate-1 bg-orange-100/50 lg:h-6"></span>
              </span> <br />
              <CipherText text="reality." />
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-gray-500 font-medium">We build immersive digital products for forward-thinking brands. Experience the next generation of web interaction.</p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button onClick={() => scrollTo('work')} className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-black px-8 py-4 text-base font-semibold text-white transition-all hover:scale-[1.02]">
                <span className="relative z-10 flex items-center gap-2">Start Project <MoveRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                {/* Fixed Gradient */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-orange-600 to-orange-500 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              
              <button onClick={() => scrollTo('features')} className="group flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-all">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors"><Play className="h-2.5 w-2.5 fill-current" /></div>
                Showreel
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - 3D SCENE */}
          <div className="relative h-[400px] w-full lg:h-[750px] order-1 lg:order-2 z-10">
             <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/20 blur-[100px]" />
            <Canvas dpr={[1, 2]} className="w-full h-full">
              <Scene />
            </Canvas>
          </div>

        </div>
      </main>
    </div>
  );
}