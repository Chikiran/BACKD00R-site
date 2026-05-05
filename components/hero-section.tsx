"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Terminal } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">IntelliJ IDEA Plugin</span>
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-primary font-mono">BACKD00R</span>
            <span className="text-foreground">: Prioritized Java Refactoring</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-balance leading-relaxed">
            An intelligent decision-support system using Random Forest MoE and Weighted Multi-Criteria Analysis to manage technical debt.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2 font-medium" asChild>
              <a href="/backd00r-1.1.0-SNAPSHOT.zip" download>
                <Download className="w-5 h-5" />
                Download Plugin (.zip)
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 font-medium" asChild>
              <a href="https://www.jetbrains.com/idea/download/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
                Get IntelliJ IDEA
              </a>
            </Button>
          </div>
          
          {/* Code snippet decoration */}
          <div className="mt-16 w-full max-w-2xl">
            <div className="rounded-lg border border-border/50 bg-card/30 backdrop-blur-md p-4 font-mono text-sm text-left overflow-hidden">
              <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-2 text-xs">BACKD00R Analysis</span>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <p><span className="text-primary">$</span> backd00r analyze --project ./src</p>
                <p className="text-foreground/80">Detecting code smells...</p>
                <p className="text-primary">Found: 3 God Classes, 7 Feature Envy, 12 Long Methods</p>
                <p className="text-foreground/80">Prioritizing refactoring candidates...</p>
                <p className="text-primary">Sequencing complete. Ready for review.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
