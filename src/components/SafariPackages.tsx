import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star } from "lucide-react";
import kolukkumalaiImage from "@/assets/kolukkumalai-original.jpg";
import chathurangaImage from "@/assets/chathuranga-original.jpg";
import annakulamImage from "@/assets/annakulam-original.jpg";

const SafariPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Kolukkumalai Sunrise Safari",
      description: "Witness the magical sunrise from the world's highest tea plantation. Visit famous Lion Rock (shaped like a lion's head), Bose Peak trekking, and organic tea factory.",
      image: kolukkumalaiImage,
      price: "₹500",
      pricePerJeep: "₹3,000",
      duration: "4-5 hours",
      capacity: "6 persons",
      highlights: ["Famous Lion Rock viewpoint", "Bose Peak trekking (+₹700)", "Organic tea factory visit", "World Highest tea plantation", "360° mountain views", "Tea tasting"],
      popular: true,
      startTime: "3:30 AM"
    },
    {
      id: 2,
      title: "Chathuranga Para Safari",
      description: "Explore the stunning viewpoints and dramatic cliffs with panoramic valley views.",
      image: chathurangaImage,
      price: "₹583",
      pricePerJeep: "₹3,500",
      duration: "3-4 hours",
      capacity: "6 persons",
      highlights: ["Hidden Waterfalls","Scenic viewpoints", "Valley panoramas", "Wildlife spotting", "Adventure trails"],
      popular: false,
      startTime: "9:00 AM"
    },
    {
      id: 3,
      title: "Annakulam Safari",
      description: "Journey through pristine tea estates and serene mountain landscapes with wildlife spotting.",
      image: annakulamImage,
      price: "₹1,000",
      pricePerJeep: "₹6,000",
      duration: "3 hours",
      capacity: "6 persons",
      highlights: ["Elephant crossing area", "Viripara waterfall", "Tea plantations", "Wildlife spotting", "Mountain trails", "Nature walks"],
      popular: false,
      startTime: "10:00 AM"
    },
    {
      id: 4,
      title: "Complete Munnar Package",
      description: "3D/2N complete package with accommodation, breakfast & dinner, campfire, stay & safari adventures.",
      image: kolukkumalaiImage,
      price: "₹3,250",
      totalForSix: "₹19,500",
      duration: "3 Days / 2 Nights",
      capacity: "6 persons",
      priceBreakdown: {
        accommodation: { price: "₹750", description: "Stay + Breakfast + Dinner + Camp fire (Per day Per head) = 2250 for total 3D/2N" },
        kolukkumalai: { price: "₹500", description: "Kolukkumalai Safari" },
        chathuranga: { price: "₹583", description: "Chathuranga Para Safari" },
        annakulam: { price: "₹1,000", description: "Annakulam Safari" },
        subtotal: "₹2,833","(Per head for 3D/2N)"}
      },
      highlights: ["Stay in Rooms/Tents", "Breakfast & Dinner included", "3 Types of Safari", "Camp Fire", "Professional coordination"],
      extraActivities: ["Pickup & Drop (varies by location)", "Munnar sightseeing (varies by points)", "Additional vehicle options available"],
      popular: true,
      startTime: "Flexible",
      packageType: "complete"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Adventure <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete tourism solutions with offroad safaris, accommodation, transport & sightseeing in Munnar
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
                  
                  {pkg.priceBreakdown && (
                    <div className="text-xs mt-3 p-3 bg-muted/50 rounded space-y-2">
                      <div className="font-semibold text-primary">Detailed Price Breakdown (Per Person):</div>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>{pkg.priceBreakdown.accommodation.description}</span>
                          <span className="font-medium">{pkg.priceBreakdown.accommodation.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{pkg.priceBreakdown.campfire.description}</span>
                          <span className="font-medium">{pkg.priceBreakdown.campfire.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{pkg.priceBreakdown.kolukkumalai.description}</span>
                          <span className="font-medium">{pkg.priceBreakdown.kolukkumalai.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{pkg.priceBreakdown.chathuranga.description}</span>
                          <span className="font-medium">{pkg.priceBreakdown.chathuranga.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{pkg.priceBreakdown.annakulam.description}</span>
                          <span className="font-medium">{pkg.priceBreakdown.annakulam.price}</span>
                        </div>
                        <div className="border-t pt-1 flex justify-between text-primary font-semibold">
                          <span>Subtotal</span>
                          <span>{pkg.priceBreakdown.subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{pkg.priceBreakdown.extraCharges.description}</span>
                          <span className="font-medium">{pkg.priceBreakdown.extraCharges.price}</span>
                        </div>
                        <div className="border-t pt-1 flex justify-between text-primary font-bold text-sm">
                          <span>Total per person</span>
                          <span>{pkg.price}</span>
                        </div>
                        <div className="flex justify-between text-primary font-bold">
                          <span>Total for 6 persons</span>
                          <span>{pkg.totalForSix}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {pkg.extraActivities && (
                    <div className="text-xs mt-2 p-2 bg-accent/20 rounded">
                      <div className="font-semibold text-accent-foreground mb-1">Extra Activities (Variable Pricing):</div>
                      <ul className="space-y-1">
                        {pkg.extraActivities.map((activity, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-accent rounded-full" />
                            <span className="text-accent-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {pkg.pricePerJeep && (
                    <div className="text-xs text-muted-foreground mt-2 p-2 bg-muted/50 rounded">
                      <strong>Pricing:</strong> {pkg.pricePerJeep} per jeep (up to 6 persons) = {pkg.price} per person
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex gap-2 w-full">
                  <Button 
                    variant={pkg.popular ? "hero" : "default"} 
                    className="flex-1 font-semibold"
                    size="lg"
                    onClick={() => window.open(`https://wa.me/919446909285?text=Hi! I'm interested in ${pkg.title}. Please share more details.`, '_blank')}
                  >
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 font-semibold"
                    size="lg"
                    onClick={() => window.open('tel:+919446909285')}
                  >
                    Call
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafariPackages;