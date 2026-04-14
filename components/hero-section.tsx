import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7720462409664-jCZjneB2nU8KD3oun7NIt3IOfqfAYu.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl text-5xl font-bold uppercase tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Train Like a{" "}
          <span className="text-primary">HYROX</span>{" "}
          Athlete
        </h1>
        
        <p className="mt-6 max-w-xl text-lg font-light tracking-wide text-muted-foreground md:text-xl">
          Build strength, endurance, and real performance
        </p>

        <Button
          asChild
          size="lg"
          className="mt-10 px-10 py-6 text-lg font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
        >
          <Link href="https://fitness-app-azure-eight.vercel.app">
            Start Training →
          </Link>
        </Button>
      </div>
    </section>
  )
}
