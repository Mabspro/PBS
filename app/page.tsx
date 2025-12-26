import { HeroSplit } from "@/components/sections/HeroSplit";
import { CleanupProcess } from "@/components/sections/CleanupProcess";
import { BusinessOwners } from "@/components/sections/BusinessOwners";
import { CPAs } from "@/components/sections/CPAs";
import { ConsultationExpectations } from "@/components/sections/ConsultationExpectations";
import { IntakeForms } from "@/components/sections/IntakeForms";
import { Footer } from "@/components/sections/Footer";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSplit />
        <CleanupProcess />
        <BusinessOwners />
        <CPAs />
        <About />
        <Testimonials />
        <ConsultationExpectations />
        <IntakeForms />
      </main>
      <Footer />
    </div>
  );
}
