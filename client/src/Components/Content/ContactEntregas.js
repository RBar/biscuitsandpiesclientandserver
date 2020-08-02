import React from "react";

const ContactEntregas = () => {
  return (
    <div className="border-solid border border-yellow-golden text-white  p-12 col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4 flex flex-col ">
      <span className="text-yellow-golden text-xl">Lugares de entrega</span>
      <p className="mt-2">Servicio a domicilio en:</p>
      <p>Panamá Oeste</p>
      <p>Ciudad de Panamá</p>
      <span className="text-yellow-golden text-sm font-poiret mt-10">
        Entrega gratis en compras mayores a 15$
      </span>
    </div>
  );
};

export default ContactEntregas;
