import React from "react";
import { Element } from "react-scroll";
import ContactSocialMedia from "./ContactSocialMedia";
import ContactEntregas from "./ContactEntregas";
import ContactHorario from "./ContactHorario";

const Contact = () => {
  return (
    <Element id="contact" name="contact">
      <div className="grid grid-cols-12 border-solid border border-yellow-golden my-6">
        <ContactHorario />
        <ContactEntregas />
        <ContactSocialMedia />
      </div>
    </Element>
  );
};

export default Contact;
