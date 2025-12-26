import { Hero } from "@/components/sections/Hero";
import { CleanupProcess } from "@/components/sections/CleanupProcess";
import { BusinessOwners } from "@/components/sections/BusinessOwners";
import { CPAs } from "@/components/sections/CPAs";
import { ConsultationExpectations } from "@/components/sections/ConsultationExpectations";
import { IntakeForms } from "@/components/sections/IntakeForms";
import { Footer } from "@/components/sections/Footer";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <CleanupProcess />
        <BusinessOwners />
        <CPAs />
        <Testimonials />
        <ConsultationExpectations />
        <IntakeForms />
      </main>
      <Footer />
    </div>
  );
}
