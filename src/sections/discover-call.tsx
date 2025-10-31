import { CheckCircle2 } from "lucide-react";

export default function DiscoverCall() {
  const items = [
    "Cómo reducir costes.",
    "Cómo generamos productos a medida de calidad.",
    "Cómo adaptarte a las novedades del mercado.",
    "Cómo aumentar las capacidades del equipo con herramientas de IA.",
  ];

  return (
    <section className="w-full text-foreground py-16">
      <div className="mx-auto max-w-3xl px-6 flex flex-col items-center justify-center">
        <h3 className="rounded-md bg-foreground/10 inline-flex items-center gap-2 px-4 py-2 text-foreground text-lg">
          En la llamada descubrirás:
        </h3>

        <ul className="mt-4 space-y-3">
          {items.map((text) => (
            <li key={text} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-6 text-green-400 flex-shrink-0" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


