import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import StepForm from "./step-form"
import { InlineWidget } from "react-calendly"
import { isQualifiedLead, track } from "@/lib/pixel"

type Step = "form" | "calendly"

interface StepFormData {
  sector: string
  hasERP: string
  employees: string
  role: string
}

export default function ContactFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>("form")
  const [, setFormData] = useState<StepFormData | null>(null)
  const [qualified, setQualified] = useState<boolean>(false)

  const handleFormComplete = (data: StepFormData) => {
    setFormData(data)
    const q = isQualifiedLead({ employees: data.employees, role: data.role })
    setQualified(q)
    if (q) {
      track("LeadCualificado", {
        employees: data.employees,
        role: data.role,
        sector: data.sector,
        hasERP: data.hasERP,
      })
    }
    setStep("calendly")
  }

  const handleClose = () => {
    setStep("form")
    setFormData(null)
    setQualified(false)
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
              <CalendlyPlaceholder onClose={handleClose} onScheduled={() => {
                if (qualified) {
                  track("AgendaCualificada")
                }
              }} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function CalendlyPlaceholder({ onClose, onScheduled }: { onClose: () => void; onScheduled: () => void }) {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL 
  useEffect(() => {
    function listener(e: MessageEvent) {
      const data = e.data
      if (data?.event === "calendly.event_scheduled") {
        onScheduled()
      }
    }
    window.addEventListener("message", listener)
    return () => window.removeEventListener("message", listener)
  }, [onScheduled])
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


