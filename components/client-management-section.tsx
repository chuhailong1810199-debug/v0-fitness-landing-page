import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, TrendingUp, CheckCircle2 } from "lucide-react"

const clients = [
  {
    name: "Marcus Johnson",
    initials: "MJ",
    progress: 85,
    status: "Active" as const,
    workoutsCompleted: 42,
    currentProgram: "HYROX Pro",
  },
  {
    name: "Sarah Chen",
    initials: "SC",
    progress: 100,
    status: "Completed" as const,
    workoutsCompleted: 60,
    currentProgram: "8-Week Challenge",
  },
  {
    name: "Alex Rivera",
    initials: "AR",
    progress: 45,
    status: "Active" as const,
    workoutsCompleted: 18,
    currentProgram: "Foundation Build",
  },
  {
    name: "Emma Thompson",
    initials: "ET",
    progress: 72,
    status: "Active" as const,
    workoutsCompleted: 36,
    currentProgram: "Endurance Focus",
  },
  {
    name: "David Kim",
    initials: "DK",
    progress: 100,
    status: "Completed" as const,
    workoutsCompleted: 48,
    currentProgram: "Strength Series",
  },
  {
    name: "Lisa Martinez",
    initials: "LM",
    progress: 28,
    status: "Active" as const,
    workoutsCompleted: 12,
    currentProgram: "HYROX Beginner",
  },
]

export function ClientManagementSection() {
  return (
    <section className="relative bg-card py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">For Coaches</span>
            </div>
            <h2 className="text-balance text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Coach & Track <span className="text-primary">Your Clients</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              Manage and support your clients efficiently
            </p>
          </div>
          
          {/* Stats Summary */}
          <div className="mt-8 flex gap-8 lg:mt-0">
            <div className="text-center lg:text-right">
              <p className="text-3xl font-bold text-foreground">247</p>
              <p className="text-sm text-muted-foreground">Active Clients</p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-3xl font-bold text-primary">94%</p>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </div>
          </div>
        </div>

        {/* Client Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <ClientCard key={client.name} {...client} />
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-16 flex flex-col items-center justify-center gap-6 rounded-2xl border border-border bg-background p-8 text-center lg:flex-row lg:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/20">
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Streamlined Client Management</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Monitor progress, assign workouts, and communicate with your athletes all from one powerful dashboard. 
              Keep every client on track with real-time insights and automated progress tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClientCard({
  name,
  initials,
  progress,
  status,
  workoutsCompleted,
  currentProgram,
}: {
  name: string
  initials: string
  progress: number
  status: "Active" | "Completed"
  workoutsCompleted: number
  currentProgram: string
}) {
  return (
    <Card className="border-border bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border-2 border-border">
              <AvatarFallback className="bg-muted text-sm font-semibold text-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">{name}</CardTitle>
              <p className="text-xs text-muted-foreground">{currentProgram}</p>
            </div>
          </div>
          <Badge
            variant={status === "Completed" ? "default" : "secondary"}
            className={status === "Completed" ? "bg-primary/20 text-primary" : ""}
          >
            {status === "Completed" && <CheckCircle2 className="mr-1 h-3 w-3" />}
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Program Progress</span>
            <span className="font-semibold text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2">
          <span className="text-xs text-muted-foreground">Workouts Completed</span>
          <span className="text-sm font-bold text-primary">{workoutsCompleted}</span>
        </div>
      </CardContent>
    </Card>
  )
}
