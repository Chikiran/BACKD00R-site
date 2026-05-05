import { Brain, BarChart3, GitBranch } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Intelligent Detection",
    description: "Identifies God Class, Feature Envy, and Long Method smells using expert-inspired rule signals.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Prioritization",
    description: "Ranks refactoring candidates using Weighted Multi-Criteria Analysis (WMCA) considering structural complexity and historical risk.",
  },
  {
    icon: GitBranch,
    title: "Safe Sequencing",
    description: "Implements Deterministic Context-Aware Sequencing (DCAS) to minimize ripple effects and ensure a coherent refactoring order.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-primary/10 rounded-2xl rotate-12" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-primary/5 rounded-xl -rotate-6" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-primary/5 rounded-lg rotate-45" />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Core Research Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Built on rigorous academic research to provide intelligent, actionable refactoring recommendations.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-md hover:bg-card/50 transition-all duration-300"
            >
              {/* Glassmorphism glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
