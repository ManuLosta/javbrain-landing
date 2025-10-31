import { useState } from "react"
import { Button } from "@/components/ui/button"
import StepForm from "./step-form"
import { InlineWidget } from "react-calendly"

type Step = "form" | "calendly"

interface StepFormData {
  sector: string
  hasERP: string
  employees: string
  role: string
}

export default function ContactFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>("form")
  const [_, setFormData] = useState<StepFormData | null>(null)

  const handleFormComplete = (data: StepFormData) => {
    setFormData(data)
    setStep("calendly")
  }

  const handleClose = () => {
    setStep("form")
    setFormData(null)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="h-full w-full flex flex-col">
        <div className="relative flex-1 overflow-auto">

          <div className="w-full max-w-screen-xl mx-auto px-4 py-8 h-full min-h-0 flex flex-col">
            {step === "form" ? (
              <StepForm onComplete={handleFormComplete} />
            ) : (
              <CalendlyPlaceholder onClose={handleClose} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendlyPlaceholder({ onClose }: { onClose: () => void }) {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL 
  return (
    <div className="flex flex-col gap-6 w-full h-full min-h-0">
      <h3 className="text-3xl sm:text-4xl font-semibold text-center">Agenda tu reunión</h3>
      <div className="flex-1 min-h-0">
        <InlineWidget url={calendlyUrl} styles={{ height: "100%", width: "100%", minWidth: "320px" }} />
      </div>
      <div className="flex items-center justify-end">
        <Button onClick={onClose} className="px-6">Cerrar</Button>
      </div>
    </div>
  )
}


