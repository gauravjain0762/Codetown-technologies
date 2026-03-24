import Hero from "../component/Hero";
import Methodology from "../component/Methodology";
import Services from "../component/Services";
import TechStack from "../component/TechStack";
import CTA from "../component/CTA";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <TechStack />
      <Methodology />
      <CTA />
      <Footer />
    </>
  );
}