import { Button } from "@/components/ui/button"
import { Download, ExternalLink, CheckCircle2 } from "lucide-react"

const prerequisites = [
  "IntelliJ IDEA 2025.3 or later",
  "Minimum 4GB RAM recommended",
]

export function ResourceSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/10 rounded-xl rotate-12" />
      <div className="absolute bottom-1/4 right-20 w-40 h-40 bg-primary/5 rounded-2xl -rotate-6" />
      <div className="absolute top-10 right-1/3 w-24 h-24 border border-primary/5 rounded-lg -rotate-12" />
      
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Resource Center</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to get started with BACKD00R.
          </p>
        </div>
        
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Prerequisites card */}
          <div className="relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-md">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent" />
            
            <div className="relative">
              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <p className="text-muted-foreground mb-6">
                Before installing BACKD00R, ensure your development environment meets these requirements:
              </p>
              
              <ul className="space-y-3">
                {prerequisites.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Download card */}
          <div className="relative p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-md">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent" />
            
            <div className="relative">
              <h3 className="text-xl font-semibold mb-4">Downloads</h3>
              <p className="text-muted-foreground mb-6">
                Get the BACKD00R plugin and the latest version of IntelliJ IDEA to start refactoring smarter.
              </p>
              
              <div className="space-y-3">
                <Button className="w-full gap-2 justify-center" size="lg" asChild>
                  <a href="https://github.com/Chikiran/BACKD00R-site/releases/latest/download/backd00r-1.0-SNAPSHOT.zip" download>
                    <Download className="w-5 h-5" />
                    Download BACKD00R Plugin
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full gap-2 justify-center" size="lg" asChild>
                  <a href="https://www.jetbrains.com/idea/download/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" />
                    Download IntelliJ IDEA
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
