import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-sunrise.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Munnar
            <span className="block text-sunrise">Sunrise Safari</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the ultimate adventure packages in Munnar, designed for thrill-seekers and nature lovers!
            From exciting off-road jeep safaris to serene mountain viewpoints, waterfalls, and tea garden trails, every trip promises unforgettable moments.
            Enjoy the beauty of Kolukkumalai, Meeshapulimala, Aanakulam, and Chaturangapara with our expert local guides who ensure a safe, scenic, and fun-filled experience.
            Whether you're planning a short weekend trip or a full family vacation, our Munnar adventure packages include transport, accommodation, and sightseeing — all in one perfect plan! 🌿🚙☀️
          </p>
          
          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90 animate-slide-up">
              <MapPin className="w-5 h-5 text-sunrise" />
              <span className="font-medium">Kolukkumalai Peak</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 animate-slide-up">
              <Clock className="w-5 h-5 text-sunrise" />
              <span className="font-medium">Pre-Dawn Adventure</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 animate-slide-up">
              <Users className="w-5 h-5 text-sunrise" />
              <span className="font-medium">Up to 6 Persons</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => window.open('https://wa.me/919446909285?text=Hi! I want to book a safari adventure. Please help me with the booking.', '_blank')}
            >
              Book Your Safari - ₹500/head
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => document.querySelector('#packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Packages
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Icons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        </div>
      </div>
    </div>
  );
};

export default Hero;