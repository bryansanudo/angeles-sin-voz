import React from "react";
import temporalImage from '@/assets/temporal.jpg'

import PageSection from "@/components/PageSection";

const Adoption = () => {
  return (
    <PageSection
      name="hogar temporal"
      title="¡Brinda un hogar de temporal "
      subtitle={`Si eres un amante de los animales, es posible que hayas considerado darle un hogar temporal a un animal rescatado. Ser hogar de paso para un animal es una forma maravillosa de ayudar a aquellos que necesitan amor y cuidado mientras esperan encontrar su hogar definitivo.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
      
        
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-[#c3e3e6] even:border-[#c3e3e6]">
          Requisito 1 Hogar de paso temporal 
          </p>
          <p className="border-l-4 pl-4 odd:border-[#c3e3e6] even:border-[#c3e3e6]">
          Requisito 2 Hogar de paso temporal
          </p>
          <p className="border-l-4 pl-4 odd:border-[#c3e3e6] even:border-[#c3e3e6]">
          Requisito 3 Hogar de paso temporal
          </p>
          <p className="border-l-4 pl-4 odd:border-[#c3e3e6] even:border-[#c3e3e6]">
          Requisito 4 Hogar de paso temporal
          </p>
          <p className="border-l-4 pl-4 odd:border-[#c3e3e6] even:border-[#c3e3e6]">
          Requisito 5 Hogar de paso temporal
          </p>
          
          <a href="https://adopta-angeles-sin-voz.netlify.app/apadrina">

          <button className=" rounded-lg shadow-lg shadow-[#c3e3e6] p-4 mt-5 w-full hover:scale-105 duration-300">
            Apadrina
          </button>
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <a
            href="https://www.instagram.com/p/CogCoiuuub4/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={temporalImage}
              
              className="rounded-lg shadow-xl shadow-[#c3e3e6] h-[400px] lg:h-[500px]"
            />
          </a>
        </div>

        
      </div>
    </PageSection>
  );
};

export default Adoption;
