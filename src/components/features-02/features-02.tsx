import img2 from "@/assets/img2.webp";
import img3 from "@/assets/img3.webp";
import img4 from "@/assets/img4.webp";

const features = [
  {
    title: "Asesoría en Cuidado de Plantas",
    description:
      "Obtén recomendaciones personalizadas para el cuidado y mantenimiento de tus plantas, asegurando su crecimiento saludable.",
    image: img2,
  },
  {
    title: "Diseño de Jardines y Espacios Verdes",
    description:
      "Transformamos tu hogar o negocio con diseños de jardines únicos y adaptados a tu estilo y espacio disponible.",
    image: img3,
  },
  {
    title: "Entrega de Plantas a Domicilio",
    description:
      "Recibe plantas de alta calidad en la puerta de tu casa, listas para decorar y mejorar tu entorno con un toque natural.",
    image: img4,
  },
];

const Features02Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="w-full">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center text-emerald-800">
          Servicios que ofrecemos
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-md sm:max-w-screen-md lg:max-w-screen-lg w-full mx-auto px-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col text-start">
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-5 sm:mb-6 w-full aspect-[4/5] object-cover rounded-xl"
              />
              <span className="text-2xl font-semibold tracking-tight text-emerald-800">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
