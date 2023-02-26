import React from "react";
import adoptionImage from '@/assets/adoption.jpg'
import PageSection from "@/components/PageSection";

const Adoption = () => {
  return (
    <PageSection
      name="adopcion"
      title="¡Adopta "
      subtitle={`Al adoptar a un peludito o michi rescatado, no solo le estás dando una segunda oportunidad de vida, sino que también estás haciendo una diferencia en la comunidad. Estás ayudando a reducir la sobrepoblación de animales y fomentando la adopción responsable.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
      <div className="w-full lg:w-1/2 flex justify-center">
          <a
            href="https://www.instagram.com/p/CogCoiuuub4/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={adoptionImage}
              
              className="rounded-lg shadow-xl shadow-[#b7a8e6] h-[400px] lg:h-[500px]"
            />
          </a>
        </div>
        
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-[#b7a8e6] even:border-[#b7a8e6]">
            Requisito 1 Adopción
          </p>
          <p className="border-l-4 pl-4 odd:border-[#b7a8e6] even:border-[#b7a8e6]">
          Requisito 2 Adopción
          </p>
          <p className="border-l-4 pl-4 odd:border-[#b7a8e6] even:border-[#b7a8e6]">
          Requisito 3 Adopción
          </p>
          <p className="border-l-4 pl-4 odd:border-[#b7a8e6] even:border-[#b7a8e6]">
          Requisito 4 Adopción
          </p>
          <p className="border-l-4 pl-4 odd:border-[#b7a8e6] even:border-[#b7a8e6]">
          Requisito 5 Adopción
          </p>
          <a href="https://adopta-angeles-sin-voz.netlify.app/peluditos">

          <button className=" rounded-lg shadow-lg shadow-[#b7a8e6] p-4 mt-5 w-full hover:scale-105 duration-300">
            Adoptar
          </button>
          </a>
        </div>

        
      </div>
    </PageSection>
  );
};

export default Adoption;
