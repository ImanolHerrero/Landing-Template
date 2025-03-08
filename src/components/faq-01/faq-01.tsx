import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "¿Cuál es su política de devoluciones?",
    answer:
      "Puedes devolver plantas o productos sin usar en su empaque original dentro de los 30 días para un reembolso o cambio. Contáctanos para recibir asistencia.",
  },
  {
    question: "¿Cómo puedo rastrear mi pedido?",
    answer:
      "Sigue tu pedido a través del enlace proporcionado en tu correo de confirmación o inicia sesión en tu cuenta para ver los detalles del envío.",
  },
  {
    question: "¿Realizan envíos internacionales?",
    answer:
      "Sí, realizamos envíos a nivel mundial. Los costos y tiempos de entrega varían según la ubicación, y algunos países pueden aplicar impuestos de importación.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos Visa, MasterCard, American Express, PayPal, Apple Pay y Google Pay, garantizando opciones de pago seguras para todos nuestros clientes.",
  },
  {
    question: "¿Qué hago si mi planta llega dañada?",
    answer:
      "Si tu planta llega en mal estado, contáctanos dentro de las primeras 48 horas tras la entrega con fotos del producto. Te ofreceremos un reemplazo o reembolso.",
  },
];

const FAQ01 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-emerald-900 text-emerald-50">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight">
          Preguntas frecuentes
        </h2>

        <Accordion type="single" className="mt-6" defaultValue="question-0">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ01;
