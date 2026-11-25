import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import WorkshopAgenda from "@/components/WorkshopAgenda";
import Speakers from "@/components/Speakers";
import ToolsSetup from "@/components/ToolsSetup";
import WorkshopDetails from "@/components/WorkshopDetails";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WorkshopInteractions from "@/components/WorkshopInteractions";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <Features />
        <WorkshopAgenda />
        <Speakers />
        <ToolsSetup />
        <WorkshopDetails />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WorkshopInteractions />
    </>
  );
}
