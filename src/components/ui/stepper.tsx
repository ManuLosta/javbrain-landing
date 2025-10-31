import { cn } from "@/lib/utils"

interface StepperProps {
  currentStep: number
  totalSteps: number
  className?: string
}

export function Stepper({ currentStep, totalSteps, className }: StepperProps) {
  return (
    <div className={cn("flex items-center justify-between mb-8", className)}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isCompleted = stepNumber < currentStep
        
        return (
          <div
            key={stepNumber}
            className={stepNumber < totalSteps ? "flex items-center flex-1" : "flex items-center"}
          >
            <div className="flex flex-col items-center gap-2 shrink-0">
              {/* Step Circle */}
              <div
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300",
                  isCompleted
                    ? "bg-primary border-primary text-primary-foreground"
                    : isActive
                    ? "border-primary text-primary"
                    : "border-muted text-muted-foreground"
                )}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>
            </div>
            {/* Line connector */}
            {stepNumber < totalSteps && (
              <div
                className={cn(
                  "h-0.5 flex-1 transition-all duration-300",
                  stepNumber < currentStep ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

