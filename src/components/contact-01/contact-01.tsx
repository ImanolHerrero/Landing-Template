import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactoPage = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <b className="text-muted-foreground">Contáctanos</b>
      <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight">
        Ponte en contacto
      </h2>
      <p className="mt-4 text-base sm:text-lg">
        Nuestro equipo siempre estará disponible para ayudarte.
      </p>
      <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MailIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Correo electrónico</h3>
          <p className="mt-2 text-muted-foreground">
            Nuestro equipo está listo para ayudarte.
          </p>
          <a
            className="mt-4 font-medium text-primary"
            href="mailto:ejemplo@gmail.com"
          >
            ejemplo@gmail.com
          </a>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MapPinIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Oficina</h3>
          <p className="mt-2 text-muted-foreground">
            Ven a visitarnos en nuestra sede.
          </p>
          <a
            className="mt-4 font-medium text-primary"
            href="https://map.google.com"
            target="_blank"
          >
            Calle Ejemplo 123, Ciudad <br /> CP 00000, País
          </a>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <PhoneIcon />
          </div>
          <h3 className="mt-6 font-semibold text-xl">Teléfono</h3>
          <p className="mt-2 text-muted-foreground">
            Lunes a viernes de 8 a.m. a 5 p.m.
          </p>
          <a className="mt-4 font-medium text-primary" href="tel:+15550000000">
            +1 (555) 000-0000
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ContactoPage;
