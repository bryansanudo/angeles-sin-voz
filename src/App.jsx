import { useState } from "react";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Adoption from "@/components/Adoption";
import Temporal from "@/components/Temporal";

import Contact from "@/components/Contact";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <HeroSection isMenuShown={isMenuShown} />
      <Adoption />
      <Temporal />
      
      <Contact />
    </>
  );
}

export default App;
