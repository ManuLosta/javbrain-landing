import Hero from "@/sections/hero";
import DiscoverCall from "@/sections/discover-call";
import ProblemsToSolve from "@/sections/problems-to-solve";
import ProcessSteps from "@/sections/process-steps";

export default function Index() {
  return (
    <main>
      <Hero />
      <DiscoverCall />
      <ProblemsToSolve />
      <ProcessSteps />
    </main>
  )
}