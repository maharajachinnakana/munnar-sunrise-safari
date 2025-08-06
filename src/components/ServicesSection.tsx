import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Bed, Utensils, Camera, MapPin, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Transport Fleet",
      description: "Multiple vehicle options for comfortable travel",
      features: ["Sedan Cars", "XUV & SUVs", "Etios", "Innova", "Traveler", "Pickup & Drop Service"]
    },
    {
      icon: <Bed className="w-8 h-8 text-primary" />,
      title: "Accommodation",
      description: "Comfortable stay options in nature",
      features: ["Deluxe Rooms", "Tent Stay Experience", "Mountain Views", "24/7 Service", "Clean & Hygienic", "Local Hospitality"]
    },
    {
      icon: <Utensils className="w-8 h-8 text-primary" />,
      title: "Food & Dining",
      description: "Authentic Kerala cuisine and more",
      features: ["Traditional Kerala Meals", "North Indian Cuisine", "Continental Options", "Fresh Local Ingredients", "Vegetarian & Non-Veg", "Packed Meals for Safari"]
    },
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Munnar Sightseeing",
      description: "Complete exploration of Munnar's beauty",
      features: ["Tea Gardens Tour", "Mattupetty Dam", "Echo Point", "Top Station", "Eravikulam National Park", "Photo Point Visits"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Tourism <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end tourism solutions including accommodation, transport, dining, and sightseeing for the perfect Munnar experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group shadow-card hover:shadow-premium transition-smooth transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-mountain p-8 text-white border-0">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Munnar Adventure?</h3>
              <p className="text-lg mb-6 text-white/90">
                Contact us for customized packages combining safaris, accommodation, transport, and sightseeing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2 hover:bg-white/30">
                  <Users className="w-4 h-4 mr-2" />
                  Groups Welcome
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2 hover:bg-white/30">
                  <MapPin className="w-4 h-4 mr-2" />
                  All Munnar Locations
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;