import Hero from "@/components/Hero";
import SafariPackages from "@/components/SafariPackages";
import ServicesSection from "@/components/ServicesSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SafariPackages />
      <ServicesSection />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;