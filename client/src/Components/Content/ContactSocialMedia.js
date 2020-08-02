import React from "react";

const ContactSocialMedia = () => {
  return (
    <div className="border-solid border border-yellow-golden text-white  p-12 col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4">
      <span className="text-yellow-golden text-xl">Contacto</span>
      <br />
      <p>
        WhatsApp:
        <a
          href="https://wa.me/50762638028"
          target="blank"
          className="ml-1 mt-2 underline text-yellow-golden"
        >
          +507-6263-8028
        </a>
      </p>

      <p>
        Instagram:
        <a
          href="https://www.instagram.com/biscuitsandpiespty/"
          target="blank"
          className="ml-1 mt-2 underline text-yellow-golden"
        >
          @biscuitsandpies
        </a>
      </p>
    </div>
  );
};

export default ContactSocialMedia;
