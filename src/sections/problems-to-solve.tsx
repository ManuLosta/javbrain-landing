import { motion } from "motion/react";

export default function ProblemsToSolve() {
  const problems = [
    {
      title: "Tareas repetitivas",
      desc: "Las labores administrativas consumen tiempo crítico.",
    },
    {
      title: "Costes en aumento",
      desc: "La competitividad requiere inversiones crecientes en recursos.",
    },
    {
      title: "Calidad impactada",
      desc: "El elevado gasto repercute en la excelencia del producto.",
    },
    {
      title: "Agilidad restringida",
      desc: "La personalización de soluciones demora y limita la respuesta al mercado.",
    },
  ];

  return (
    <section className="w-full text-foreground py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6"
      >
        <div className="relative rounded-xl border border-foreground/40 p-6 md:p-8">
          {/* Borde interior con color primario como en la muestra */}
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-primary/60" />

          <h3 className="text-xl md:text-2xl font-semibold text-center">
            ¿Alguno de estos problemas te resulta familiar?
          </h3>

          <div className="mt-6 grid grid-cols-[80px_1fr] gap-6 md:gap-8 items-stretch">
            {/* Banda lateral amarilla a la izquierda (vertical) */}
            <div className="bg-primary text-background rounded-lg px-2 py-6 flex items-center justify-center">
              <span className="[writing-mode:vertical-rl] rotate-180 font-bold tracking-wide text-sm">
                PROBLEMAS A RESOLVER
              </span>
            </div>

            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p.title} className="text-base leading-relaxed">
                  <span className="font-semibold">{p.title}:</span>{" "}
                  <span className="text-foreground/90">{p.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


