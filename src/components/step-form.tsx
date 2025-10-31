import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Stepper } from "@/components/ui/stepper"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { ArrowRightIcon } from "lucide-react"

interface StepFormData {
  sector: string
  hasERP: string
  employees: string
  role: string
}

interface StepFormProps {
  onComplete: (data: StepFormData) => void
}

export default function StepForm({ onComplete }: StepFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<StepFormData>({
    sector: "",
    hasERP: "",
    employees: "",
    role: "",
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalSteps = 4

  const sectorOptions = [
    "Legal",
    "Real Estate",
    "Gestorias",
    "Financiero",
    "Otro",
  ]

  const erpOptions = ["Si", "No", "Utilizamos Excel"]

  const employeesOptions = [
    "Menos de 5",
    "Entre 10 y 50",
    "Más de 50",
  ]

  const roleOptions = [
    "Propietario",
    "Ejecutivo",
    "Directivo",
    "Gerente",
    "Otro",
  ]

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1)
      } else {
        onComplete(formData)
      }
      setIsTransitioning(false)
    }, 300)
  }

  const handleBack = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentStep(currentStep - 1)
      setIsTransitioning(false)
    }, 300)
  }


  const setField = (field: keyof StepFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.sector !== ""
      case 2:
        return formData.hasERP !== ""
      case 3:
        return formData.employees !== ""
      case 4:
        return formData.role !== ""
      default:
        return true
    }
  }

  const renderQuestion = () => {
    return (
      <div
        className={cn(
          "w-full transition-all duration-300",
          isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
        )}
      >
        {currentStep === 1 && (
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold text-center">
              ¿En qué sector se desempeña tu empresa?
            </h3>
            <RadioGroup
              value={formData.sector}
              onValueChange={(value) => setField("sector", value)}
              className="grid gap-4 w-full"
            >
              {sectorOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "w-full p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-md flex items-center gap-3",
                    formData.sector === option
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  <RadioGroupItem value={option} />
                  <span className="text-lg flex-1">{option}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold text-center">
              ¿Cuentan actualmente con un ERP?
            </h3>
            <RadioGroup
              value={formData.hasERP}
              onValueChange={(value) => setField("hasERP", value)}
              className="grid gap-4 w-full"
            >
              {erpOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "w-full p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-md flex items-center gap-3",
                    formData.hasERP === option
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  <RadioGroupItem value={option} />
                  <span className="text-lg flex-1">{option}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold text-center">
              Cantidad de empleados en la empresa
            </h3>
            <RadioGroup
              value={formData.employees}
              onValueChange={(value) => setField("employees", value)}
              className="grid gap-4 w-full"
            >
              {employeesOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "w-full p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-md flex items-center gap-3",
                    formData.employees === option
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  <RadioGroupItem value={option} />
                  <span className="text-lg flex-1">{option}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-6 w-full">
            <h3 className="text-2xl font-semibold text-center">
              ¿Cuál es tu rol en la empresa?
            </h3>
            <RadioGroup
              value={formData.role}
              onValueChange={(value) => setField("role", value)}
              className="grid gap-4 w-full"
            >
              {roleOptions.map((option) => (
                <label
                  key={option}
                  className={cn(
                    "w-full p-3 sm:p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:border-primary/50 hover:shadow-md flex items-center gap-3",
                    formData.role === option
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  )}
                >
                  <RadioGroupItem value={option} />
                  <span className="text-lg flex-1">{option}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto w-full pb-24 md:pb-0">
      <Stepper currentStep={currentStep} totalSteps={totalSteps} />
      
      <div className="min-h-[400px] flex items-center justify-center">
        {renderQuestion()}
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-4 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:static md:px-0 md:py-0 md:bg-transparent md:backdrop-blur-0 z-40 overflow-visible">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div>
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                size="lg"
                className="h-12 px-8 text-base"
              >
                Atrás
              </Button>
            )}
          </div>
          <Button
            type="button"
            onClick={handleNext}
            disabled={!canProceed()}
            size="lg"
            className="h-12 px-8 text-base"
          >
            <span>{currentStep === totalSteps ? "Finalizar" : "Siguiente"}</span>
            <ArrowRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

