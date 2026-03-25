import PortfolioHero  from "./pages/PostfolioHero";
import Projects from "./pages/Projects";
import CTA from "./pages/CTA";
import Footer from "../component/Footer"
import Navbar from "../component/Navbar";

export default function Portfolio() {
  return (
    <>
    <Navbar />
    <PortfolioHero />
    <Projects />
    <CTA />
    <Footer />
    </>
  )
}