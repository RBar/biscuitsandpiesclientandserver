import React from "react";

const ContactHorario = () => {
  return (
    <div className="border-solid border border-yellow-golden text-white  p-12 col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4">
      <span className="text-yellow-golden text-xl ">Horario de Entregas</span>
      <p className="mt-2">Panamá Oeste</p>
      <p>Lunes-Viernes : 9am - 5pm</p>
      <p>Sábado-Domingo : Cerrado</p>
      <div className="mt-10">
        <p>Ciudad de Panamá</p>
      </div>

      <p>Lunes-Viernes : 10am - 5pm</p>
      <p>Sábado-Domingo : Cerrado</p>
    </div>
  );
};

export default ContactHorario;
