import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import heroImage from "@/assets/img1.jpg";

const Hero02 = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-emerald-50">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] text-emerald-800">
            Título llamativo de tu negocio, emprendiemiento o marca personal
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Descubre una solución diseñada para potenciar tu negocio, atraer más
            clientes y destacar en el mundo digital con un diseño profesional,
            moderno y funcional.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Empezar <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Ver video
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video bg-accent rounded-xl ">
          <img
            src={heroImage}
            alt="Hero Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero02;
