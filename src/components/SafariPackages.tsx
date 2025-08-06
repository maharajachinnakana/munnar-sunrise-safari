import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star } from "lucide-react";
import jeepImage from "@/assets/jeep-safari.jpg";
import chathurangaImage from "@/assets/chathuranga-para.jpg";
import annakulamImage from "@/assets/annakulam.jpg";

const SafariPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Kolukkumalai Sunrise Safari",
      description: "Witness the magical sunrise from the world's highest tea plantation at 7,900 feet above sea level.",
      image: jeepImage,
      price: "₹3,000",
      duration: "4-5 hours",
      capacity: "6 persons",
      highlights: ["Highest tea plantation", "360° mountain views", "Tea tasting", "Photo opportunities"],
      popular: true,
      startTime: "3:30 AM"
    },
    {
      id: 2,
      title: "Chathuranga Para Safari",
      description: "Explore the stunning viewpoints and dramatic cliffs with panoramic valley views.",
      image: chathurangaImage,
      price: "₹2,500",
      duration: "3-4 hours",
      capacity: "6 persons",
      highlights: ["Scenic viewpoints", "Valley panoramas", "Wildlife spotting", "Adventure trails"],
      popular: false,
      startTime: "9:00 AM"
    },
    {
      id: 3,
      title: "Annakulam Safari",
      description: "Journey through pristine tea estates and serene mountain landscapes.",
      image: annakulamImage,
      price: "₹2,200",
      duration: "3 hours",
      capacity: "6 persons",
      highlights: ["Tea estate tour", "Mountain trails", "Local culture", "Nature walks"],
      popular: false,
      startTime: "10:00 AM"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Safari <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated offroad adventures in the heart of Munnar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`group overflow-hidden shadow-card hover:shadow-premium transition-smooth transform hover:-translate-y-2 animate-slide-up ${pkg.popular ? 'ring-2 ring-primary' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Starts {pkg.startTime}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {pkg.capacity}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Highlights:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button 
                  variant={pkg.popular ? "hero" : "default"} 
                  className="w-full font-semibold"
                  size="lg"
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafariPackages;