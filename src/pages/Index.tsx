import Hero from "@/components/Hero";
import SafariPackages from "@/components/SafariPackages";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SafariPackages />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;