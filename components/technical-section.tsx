import { Cpu, Network, Layers, Gauge } from "lucide-react"

const specs = [
  {
    icon: Network,
    label: "Architecture",
    value: "Mixture of Experts (MoE)",
  },
  {
    icon: Layers,
    label: "ML Model",
    value: "Random Forest Classifier",
  },
  {
    icon: Gauge,
    label: "Confidence",
    value: "Probability-Based Estimation",
  },
  {
    icon: Cpu,
    label: "Processing",
    value: "Real-Time Analysis",
  },
]

export function TechnicalSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      {/* Decorative rectangles */}
      <div className="absolute top-20 right-1/4 w-36 h-36 border border-primary/10 rounded-2xl -rotate-12" />
      <div className="absolute bottom-10 left-20 w-28 h-28 bg-primary/5 rounded-xl rotate-6" />
      <div className="absolute top-1/3 right-10 w-20 h-20 border border-primary/5 rounded-lg rotate-45" />
      
      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Technical Specifications</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              BACKD00R leverages a sophisticated <span className="text-primary font-medium">Mixture of Experts (MoE)</span> architecture 
              combined with <span className="text-primary font-medium">Random Forest</span> confidence estimation to provide 
              accurate and reliable code smell detection and refactoring prioritization.
            </p>
            
            {/* Specs list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/30 backdrop-blur-md"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary">
                    <spec.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</p>
                    <p className="font-medium">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Architecture diagram */}
          <div className="relative">
            <div className="rounded-xl border border-border/50 bg-card/30 backdrop-blur-md p-6">
              <h3 className="font-mono text-sm text-muted-foreground mb-4">MoE Architecture Flow</h3>
              
              <div className="space-y-4">
                {/* Input layer */}
                <div className="flex items-center gap-4">
                  <div className="w-full p-3 rounded-lg bg-secondary/50 border border-border/50 text-center">
                    <span className="text-sm font-mono">Java Source Code</span>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-primary/50" />
                </div>
                
                {/* Expert classifiers */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-center">
                    <span className="text-xs font-mono text-primary">God Class Expert</span>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-center">
                    <span className="text-xs font-mono text-primary">Feature Envy Expert</span>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-center">
                    <span className="text-xs font-mono text-primary">Long Method Expert</span>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-primary/50" />
                </div>
                
                {/* Gating network */}
                <div className="p-3 rounded-lg bg-secondary/50 border border-border/50 text-center">
                  <span className="text-sm font-mono">Random Forest Gating Network</span>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-6 bg-primary/50" />
                </div>
                
                {/* Output */}
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/40 text-center">
                  <span className="text-sm font-mono text-primary">Prioritized Refactoring Queue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
