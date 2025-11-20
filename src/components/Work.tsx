import { ArrowUpRight } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard'; // <--- Make sure path is correct

// --- TYPES ---

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  bgClass: string; 
  accentColor: string; 
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neon FinTech",
    category: "App Development",
    description: "Redefining the banking experience with WebGL data visualization and zero-latency transaction streams.",
    bgClass: "bg-gradient-to-br from-zinc-800/50 to-transparent", // Made slightly transparent to blend with SpotlightCard
    accentColor: "text-blue-400"
  },
  {
    id: 2,
    title: "Aero Systems",
    category: "3D Branding",
    description: "A complete visual overhaul for the world's leading aerospace manufacturer, focusing on speed and precision.",
    bgClass: "bg-gradient-to-br from-orange-900/50 to-transparent",
    accentColor: "text-orange-500"
  },
  {
    id: 3,
    title: "Ether Minds",
    category: "AI Interface",
    description: "Generative AI dashboard design for a Fortune 500 research lab. Focusing on human-computer symbiosis.",
    bgClass: "bg-gradient-to-br from-emerald-900/50 to-transparent",
    accentColor: "text-emerald-400"
  }
];

// --- COMPONENTS ---

const ProjectCard = ({ project, index, total }: { project: Project; index: number; total: number }) => {
  const topOffset = 100 + index * 40; 
  
  return (
    <SpotlightCard 
      className="sticky flex flex-col shadow-2xl transition-transform duration-500" // SpotlightCard handles rounded-3xl, overflow, etc.
      style={{ 
        top: `${topOffset}px`, 
        height: '500px', 
        marginBottom: `${total * 20}px`, 
        zIndex: index
      }}
    >
      <div className={`flex h-full w-full flex-col md:flex-row ${project.bgClass}`}>
        
        {/* Left Content */}
        <div className="flex flex-1 flex-col justify-between p-8 md:p-12 z-10 relative">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs font-mono text-white/60">
                0{project.id}
              </span>
              <span className={`text-xs font-bold uppercase tracking-widest ${project.accentColor}`}>
                {project.category}
              </span>
            </div>
            <h3 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {project.title}
            </h3>
          </div>
          
          <div className="mt-8 md:mt-0">
            <p className="max-w-md text-lg text-zinc-400">
              {project.description}
            </p>
            <button className="group mt-6 flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-orange-500">
              View Case Study 
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-64 w-full overflow-hidden bg-black/20 md:h-full md:w-1/2">
          <div className={`absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl ${project.accentColor.replace('text-', 'bg-')}`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="h-32 w-32 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-transform duration-700 hover:scale-110"></div>
             <div className="absolute h-48 w-48 rounded-full border border-white/5 bg-transparent"></div>
          </div>
          
          {/* Noise Overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        </div>

      </div>
    </SpotlightCard>
  );
};

export default function WorkSection() {
  return (
    <section className="relative bg-zinc-950 px-6 py-24 text-white lg:px-12 lg:py-40" id="work">
      
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-5xl font-bold tracking-tighter md:text-7xl">
              Selected <br />
              <span className="text-zinc-600">Works.</span>
            </h2>
          </div>
          <p className="max-w-sm text-zinc-400">
            We partner with brands that aren't afraid to break the status quo. 
            Here are a few of our favorites.
          </p>
        </div>

        {/* The Stack Container */}
        <div className="relative flex flex-col gap-12 pb-24">
           {projects.map((project, index) => (
             <ProjectCard 
               key={project.id} 
               project={project} 
               index={index} 
               total={projects.length} 
             />
           ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="flex items-center justify-center pt-12">
           <a href="#" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-black transition-transform hover:scale-105">
              <span className="font-bold">View Full Archive</span>
              <ArrowUpRight className="h-5 w-5" />
           </a>
        </div>

      </div>
    </section>
  );
}