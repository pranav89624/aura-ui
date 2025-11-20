import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { ArrowUpRight, Zap, Globe, Box, ShieldCheck, MousePointer2 } from 'lucide-react';
import { CipherText } from './CipherText';
import { TiltCard } from './TiltCard';

const DistortedBlob = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <Sphere visible args={[1, 100, 200]} scale={2} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <MeshDistortMaterial color={hovered ? "#f97316" : "#1f2937"} attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.8} />
    </Sphere>
  );
};

const LogoMarquee = () => {
  const logos = ["Acme Corp", "Quantum", "Echo Valley", "Nebula", "Vertex", "Horizon", "Acme Corp", "Quantum", "Echo Valley", "Nebula", "Vertex", "Horizon"];
  return (
    <div className="w-full overflow-hidden border-y border-gray-100 bg-white py-10">
      <div className="relative flex w-full overflow-hidden">
        {/* Fixed Gradient Syntax */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
        <div className="flex animate-scroll whitespace-nowrap">
          {logos.map((logo, i) => (
            <span key={i} className="mx-12 text-xl font-bold uppercase tracking-widest text-gray-700 transition-colors hover:text-orange-500 cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32" id="features">
      <div className="mb-24">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-700">Powering the next generation</p>
        <LogoMarquee />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
            <CipherText text="Everything you need to" /> <br />
            <span className="text-orange-700"><CipherText text="dominate your niche." /></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">We don't just design websites. We build digital ecosystems that scale, convert, and impress.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-rows-2">
          
          {/* Card 1: 3D - Wrapped in TiltCard */}
          <div className="col-span-1 md:col-span-2 lg:row-span-2">
            <TiltCard className="group h-full relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm hover:shadow-xl border border-gray-100">
              <div className="absolute right-4 top-4 rounded-full bg-orange-100 p-2 text-orange-600"><Box className="h-6 w-6" /></div>
              <h3 className="text-2xl font-bold text-gray-900">Immersive 3D Assets</h3>
              <p className="mt-2 max-w-sm text-gray-500">Differentiate your brand with WebGL. We bake interactivity directly into the DOM.</p>
              <div className="mt-8 h-64 w-full rounded-2xl bg-gray-50 overflow-hidden border border-gray-100 lg:h-96 cursor-grab active:cursor-grabbing">
                 <Canvas camera={{ position: [0, 0, 4] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <DistortedBlob />
                    <OrbitControls enableZoom={false} />
                 </Canvas>
              </div>
            </TiltCard>
          </div>

          {/* Card 2: Performance */}
          <TiltCard className="group relative overflow-hidden rounded-3xl bg-black p-8 text-white shadow-sm">
            <div className="flex items-start justify-between relative z-10">
              <div>
                <Zap className="h-8 w-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="mt-2 text-gray-400 text-sm">99/100 Lighthouse scores. We optimize every byte.</p>
              </div>
            </div>
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-500 blur-3xl opacity-20" />
          </TiltCard>

          {/* Card 3: CDN */}
          <TiltCard className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 shadow-sm">
            <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight className="h-5 w-5 text-gray-400" /></div>
            <Globe className="h-8 w-8 text-gray-900 mb-4" />
            <h3 className="text-xl font-bold text-gray-900">Global CDN</h3>
            <p className="mt-2 text-sm text-gray-500">Deployed to the edge. Your site loads instantly.</p>
          </TiltCard>

          {/* Card 4: Security */}
          <TiltCard className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 shadow-sm">
             <ShieldCheck className="h-8 w-8 text-gray-900 mb-4" />
             <h3 className="text-xl font-bold text-gray-900">Enterprise Security</h3>
             <p className="mt-2 text-sm text-gray-500">SOC2 compliant infrastructure with automated backups.</p>
          </TiltCard>

          {/* Card 5: Conversion */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <TiltCard className="h-full rounded-3xl bg-orange-700 p-8 text-white shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 opacity-90">
                    <MousePointer2 className="h-5 w-5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Conversion First</span>
                  </div>
                  <h3 className="text-2xl font-bold">Ready to scale your revenue?</h3>
                  <p className="mt-2 text-orange-100">Our designs are built to sell, not just look pretty.</p>
                </div>
                <button className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-bold text-orange-600 transition-colors hover:bg-orange-50">Book a Strategy Call</button>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}