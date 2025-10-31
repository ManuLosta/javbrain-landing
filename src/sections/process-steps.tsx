import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

type Step = {
  number: string;
  title: string;
  description: string;
  cta?: string;
};

function StepCard({ step, onContact }: { step: Step; onContact?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded-xl bg-foreground/10 p-4 md:p-6 flex gap-4 items-start"
    >
      <div className="shrink-0 rounded-xl bg-gradient-to-br from-[#0C4A6E] to-[#0B2A4A] text-white w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-4xl md:text-5xl font-extrabold shadow-inner">
        {step.number}
      </div>
      <div className="flex-1">
        <h4 className="text-lg md:text-xl font-semibold">{step.title}</h4>
        <div className="h-1 w-10 bg-foreground/60 rounded mt-1 mb-3" />
        <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
          {step.description}
        </p>
        {step.cta && (
          <div className="mt-3">
            <Button size="sm" className="bg-primary text-background hover:opacity-90" onClick={onContact}>
              {step.cta}
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProcessSteps({ onContact }: { onContact: () => void }) {
  const steps: Step[] = [
    {
      number: "1",
      title: "Formulario",
      description:
        "Rellena el formulario o haz click en \"conocer más\"",
      cta: "Conocer más",
    },
    {
      number: "2",
      title: "Contacto",
      description:
        "Nos pondremos en contacto para revisar los procesos y hacer una propuesta formal",
    },
    {
      number: "3",
      title: "Inicio de proyecto",
      description:
        "Con una inversión mínima, empezaremos a aplicar nuestros sistemas en tu negocio, dando soporte humano en todas las etapas",
    },
  ];

  return (
    <section className="w-full text-foreground py-10 md:py-16">
      <div className="mx-auto max-w-3xl px-6 space-y-6">
        {steps.map((s) => (
          <StepCard key={s.number} step={s} onContact={onContact} />
        ))}

        <div className="pt-4 flex justify-center">
          <Button size="lg" className="bg-primary text-background hover:opacity-90" onClick={onContact}>
            Contáctanos
            <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}


