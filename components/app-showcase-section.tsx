import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Dumbbell, Flame, Clock, TrendingUp, Target, Zap } from "lucide-react"

export function AppShowcaseSection() {
  return (
    <section className="relative bg-background py-24 lg:py-32">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Your Training Companion
          </p>
          <h2 className="text-balance text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Train Anywhere, <span className="text-primary">Track Everything</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Access workouts, track progress, and push your limits with our premium training app
          </p>
        </div>

        {/* Device Mockups */}
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
          
          {/* Mobile Mockup - Workout Screen */}
          <div className="relative">
            <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-4 border-border bg-card p-2 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-background">
                {/* Status Bar */}
                <div className="flex items-center justify-between bg-card px-4 py-2 text-xs text-muted-foreground">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="h-2 w-4 rounded-sm bg-muted-foreground" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                  </div>
                </div>
                
                {/* App Content */}
                <div className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-foreground">Today&apos;s Workout</h3>
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                  
                  <Card className="mb-4 border-border bg-card/50">
                    <CardContent className="p-4">
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">HYROX Simulation</p>
                          <p className="text-xs text-muted-foreground">8 stations • 60 min</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-3">
                    <WorkoutItem icon={<Zap className="h-4 w-4" />} name="Ski Erg" reps="1000m" />
                    <WorkoutItem icon={<Target className="h-4 w-4" />} name="Sled Push" reps="50m" />
                    <WorkoutItem icon={<Flame className="h-4 w-4" />} name="Burpee Broad Jumps" reps="80m" />
                    <WorkoutItem icon={<TrendingUp className="h-4 w-4" />} name="Rowing" reps="1000m" />
                  </div>
                  
                  <Button className="mt-6 w-full font-semibold uppercase tracking-wider">
                    Start Workout
                  </Button>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Workout Screen
            </p>
          </div>

          {/* Desktop Mockup - Progress Tracking */}
          <div className="relative w-full max-w-2xl">
            <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
              {/* Browser Chrome */}
              <div className="mb-2 flex items-center gap-2 rounded-t-lg bg-background px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-muted" />
                  <div className="h-3 w-3 rounded-full bg-muted" />
                  <div className="h-3 w-3 rounded-full bg-muted" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-muted px-4 py-1.5 text-xs text-muted-foreground">
                  app.hyroxtraining.com/dashboard
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="rounded-lg bg-background p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Progress Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Track your HYROX performance</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-2">
                    <Flame className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">12 Day Streak</span>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <StatCard label="Total Workouts" value="48" trend="+12%" />
                  <StatCard label="Avg. Duration" value="58m" trend="+5%" />
                  <StatCard label="Calories Burned" value="24.5K" trend="+18%" />
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-4">
                  <ProgressItem label="Endurance" value={78} />
                  <ProgressItem label="Strength" value={65} />
                  <ProgressItem label="Speed" value={82} />
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Progress Tracking
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="px-12 py-6 text-lg font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            Access the App
          </Button>
        </div>
      </div>
    </section>
  )
}

function WorkoutItem({ icon, name, reps }: { icon: React.ReactNode; name: string; reps: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-card/50 p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted text-muted-foreground">
          {icon}
        </div>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <span className="text-xs font-semibold text-primary">{reps}</span>
    </div>
  )
}

function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/50 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-1 flex items-end gap-2">
        <span className="text-2xl font-bold text-foreground">{value}</span>
        <span className="mb-1 text-xs font-medium text-primary">{trend}</span>
      </div>
    </div>
  )
}

function ProgressItem({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm font-semibold text-primary">{value}%</span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  )
}
