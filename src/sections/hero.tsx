import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl mx-auto px-4 flex flex-col items-center justify-center gap-4 text-center py-16"
      >
        <h1 className="text-3xl sm:text-6xl font-extrabold tracking-wide uppercase">
          Automatiza procesos con IA
        </h1>
        <p className="text-3xl sm:text-6xl font-extrabold uppercase leading-tight text-primary">
          ROI medible en 30 días
        </p>
        <div className="mx-auto mt-3 h-1 w-72 rounded bg-foreground/80 md:w-96" />
        <p className="mx-auto mt-6 max-w-3xl text-balance text-base leading-relaxed md:text-lg">
          Agenda una <span className="font-semibold text-primary">sesión gratuita</span> con
          nuestro equipo, rellenando el formulario y recibe tu
          <span className="font-semibold text-primary"> plan de acción personalizado</span>.
        </p>
        <Button size="lg" className="mt-6">
          Contáctanos
          <ArrowRight />
        </Button>
      </motion.div>
    </section>
  )
}