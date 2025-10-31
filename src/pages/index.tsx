import { useState } from "react"
import Hero from "@/sections/hero";
import DiscoverCall from "@/sections/discover-call";
import ProblemsToSolve from "@/sections/problems-to-solve";
import ProcessSteps from "@/sections/process-steps";
import ContactFlow from "@/components/contact-flow";

export default function Index() {
  const [showForm, setShowForm] = useState(false)

  // Renderizado condicional: mostrar formulario o landing
  if (showForm) {
    return <ContactFlow onClose={() => setShowForm(false)} />
  }

  return (
    <main>
      <Hero onContact={() => setShowForm(true)} />
      <DiscoverCall />
      <ProblemsToSolve />
      <ProcessSteps onContact={() => setShowForm(true)} />
    </main>
  )
}