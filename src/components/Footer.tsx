import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mountain text-mountain-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-sunrise">Munnar Safari</h3>
            <p className="text-mountain-foreground/80 leading-relaxed">
              Experience the magic of Munnar with our premium offroad jeep safaris. 
              Adventure awaits in every trail.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-mountain-foreground/60 hover:text-sunrise">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-mountain-foreground/60 hover:text-sunrise">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-mountain-foreground/60 hover:text-sunrise">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sunrise">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sunrise mt-0.5" />
                <div>
                  <p className="font-medium">+91 94474 XXXXX</p>
                  <p className="text-sm text-mountain-foreground/80">24/7 Booking Support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sunrise mt-0.5" />
                <div>
                  <p className="font-medium">info@munnarsafari.com</p>
                  <p className="text-sm text-mountain-foreground/80">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sunrise mt-0.5" />
                <div>
                  <p className="font-medium">Munnar, Kerala</p>
                  <p className="text-sm text-mountain-foreground/80">Pick-up from hotels</p>
                </div>
              </div>
            </div>
          </div>

          {/* Safari Packages */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sunrise">Our Safaris</h4>
            <div className="space-y-2">
              <div className="group cursor-pointer">
                <p className="font-medium group-hover:text-sunrise transition-colors">
                  Kolukkumalai Sunrise
                </p>
                <p className="text-sm text-mountain-foreground/80">₹3,000 per jeep</p>
              </div>
              <div className="group cursor-pointer">
                <p className="font-medium group-hover:text-sunrise transition-colors">
                  Chathuranga Para
                </p>
                <p className="text-sm text-mountain-foreground/80">₹2,500 per jeep</p>
              </div>
              <div className="group cursor-pointer">
                <p className="font-medium group-hover:text-sunrise transition-colors">
                  Annakulam Safari
                </p>
                <p className="text-sm text-mountain-foreground/80">₹2,200 per jeep</p>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-sunrise">Operating Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sunrise" />
                <div>
                  <p className="font-medium">Sunrise Safari</p>
                  <p className="text-sm text-mountain-foreground/80">3:30 AM - 8:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sunrise" />
                <div>
                  <p className="font-medium">Day Safaris</p>
                  <p className="text-sm text-mountain-foreground/80">9:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-mountain/50 rounded-lg border border-sunrise/20">
                <p className="text-sm text-sunrise font-medium">All weather operations*</p>
                <p className="text-xs text-mountain-foreground/80">*Safety conditions permitting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mountain-foreground/20 mt-12 pt-8 text-center">
          <p className="text-mountain-foreground/60">
            © 2024 Munnar Safari Adventures. All rights reserved. | 
            <span className="text-sunrise"> Premium Offroad Experiences</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;