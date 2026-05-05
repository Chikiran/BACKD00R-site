import { Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono font-semibold text-primary">BACKD00R</span>
          </div>
          
          {/* Attribution */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Developed at <span className="text-foreground">FEU Institute of Technology</span>
            </p>
            <p className="text-sm text-muted-foreground">
              by Cando, Herrera, Idago, and Zapanta (2026)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
