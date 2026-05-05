"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Terminal } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      
      {/* Decorative rectangles */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-primary/10 rounded-lg -rotate-6" />
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary/5 rounded-lg rotate-45" />
      
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
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-balance leading-relaxed">
            An intelligent decision-support system using Random Forest MoE and Weighted Multi-Criteria Analysis for Java projects.
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
        </div>
      </div>
    </section>
  )
}
