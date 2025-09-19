import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Clock, Users, Star, Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
// Using uploaded image for Kolukkumalai - changed to sunset image
const kolukkumalaiImage = "/lovable-uploads/64c01a9f-740e-49a7-8fc5-e49aff0f9e8a.png";
import chathurangaImage from "@/assets/chathuranga-original.jpg";
import annakulamImage from "@/assets/annakulam-original.jpg";

const SafariPackages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const galleryImages = [
    {
      src: "/lovable-uploads/82dbee00-8642-4223-ba66-b389597e2093.png",
      alt: "Kolukkumalai sunrise view with person silhouette - Best jeep safari in Munnar for sunrise",
      title: "Kolukkumalai Sunrise Safari",
      description: "Witness the magical sunrise from world's highest organic tea plantation"
    },
    {
      src: "/lovable-uploads/951738de-e276-4b92-a864-6d376ae013d2.png", 
      alt: "Panoramic mountain views Munnar above clouds at sunrise",
      title: "Mountain Views Above Clouds",
      description: "Breathtaking panoramic mountain views from Kolukkumalai"
    },
    {
      src: "/lovable-uploads/7d8c05c0-e1c8-4f78-9894-21ec8a2dede1.png",
      alt: "Western Ghats mountain vista with rolling hills and tea plantations",
      title: "Western Ghats Vista", 
      description: "Stunning views of Western Ghats mountain ranges"
    },
    {
      src: "/lovable-uploads/31106db0-d231-475d-b353-8c56f4a43352.png",
      alt: "Misty mountain peaks emerging from clouds - Munnar offroad jeep ride views",
      title: "Misty Mountain Peaks",
      description: "Dramatic mountain peaks emerging from morning mist"
    },
    {
      src: "/lovable-uploads/34462f34-ac31-4793-b816-d47cb8944a84.png",
      alt: "Hand holding tea leaves with Lion Rock view point Munnar in background",
      title: "Tea Plantation Experience",
      description: "Fresh tea leaves from world's highest organic tea plantation"
    },
    {
      src: "/lovable-uploads/90e46b22-3cba-4ee6-bc24-d9141f2c28bd.png",
      alt: "Expansive tea plantation landscape with mountain trails Munnar",
      title: "Tea Plantation Landscape", 
      description: "Endless tea plantation landscapes of Munnar hills"
    },
    {
      src: "/lovable-uploads/64c01a9f-740e-49a7-8fc5-e49aff0f9e8a.png",
      alt: "Kolukkumalai sunset safari view with colorful sky over mountain silhouettes",
      title: "Kolukkumalai Sunset",
      description: "Spectacular sunset views from Kolukkumalai peaks"
    },
    {
      src: "/lovable-uploads/4cc7106f-4e75-4821-9c86-e59c93238983.png",
      alt: "Mountain trail landscape view during wildlife jeep safari Munnar experience",
      title: "Mountain Trail Views",
      description: "Scenic mountain trails during safari adventures"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const packages = [
    {
      id: 1,
      title: "Kolukkumalai Sunrise Safari",
      description: "Witness the magical sunrise from the world's highest organic tea plantation. Visit famous Lion Rock View Point (shaped like a lion's head), experience Western Ghats sunrise safari, Bose Peak trekking, and organic tea factory tour.",
      image: kolukkumalaiImage,
      price: "₹500",
      pricePerJeep: "₹3,000",
      duration: "4-5 hours",
      capacity: "6 persons",
      highlights: ["Famous Lion Rock View Point Munnar", "Bose Peak trekking (+₹700)", "World's Highest Organic Tea Plantation", "Kolukkumalai Tea Estate Tour", "Panoramic Mountain Views Munnar", "Tea tasting experience"],
      popular: true,
      startTime: "3:30 AM"
    },
    {
      id: 2,
      title: "Chathuranga Para Safari",
      description: "Explore the stunning viewpoints and dramatic cliffs with panoramic valley views. Experience offroad jeep ride through Western Ghats terrain.",
      image: chathurangaImage,
      price: "₹583",
      pricePerJeep: "₹3,500",
      duration: "3-4 hours",
      capacity: "6 persons",
      highlights: ["Hidden Waterfalls","Scenic viewpoints", "Panoramic Mountain Views Munnar", "Wildlife Jeep Safari Munnar", "Adventure trails"],
      popular: false,
      startTime: "9:00 AM"
    },
    {
      id: 3,
      title: "Annakulam Safari",
      description: "Journey through pristine tea estates and serene mountain landscapes with wildlife spotting. Experience thrilling offroad jeep ride to tea plantation.",
      image: annakulamImage,
      price: "₹1,000",
      pricePerJeep: "₹6,000",
      duration: "3 hours",
      capacity: "6 persons",
      highlights: ["Elephant crossing area", "Viripara waterfall", "Tea plantations", "Wildlife Jeep Safari Munnar", "Mountain trails", "Nature walks"],
      popular: false,
      startTime: "10:00 AM"
    },
    {
      id: 4,
      title: "Complete Munnar Package",
      description: "3D/2N complete package with accommodation, breakfast & dinner, campfire, stay & safari adventures.",
      image: kolukkumalaiImage,
      price: "₹4,333",
      totalForSix: "₹25,998",
      duration: "3 Days / 2 Nights",
      capacity: "6 persons",
      priceBreakdown: {
        accommodation: {
          price: "₹750",
          description: "Stay+Breakfast+Dinner+campfire Per Day (3D/2N=2250)",
        },
        
        kolukkumalai: { price: "₹500", description: "Kolukkumalai Safari" },
        chathuranga: { price: "₹583", description: "Chathuranga Para Safari" },
        annakulam: { price: "₹1,000", description: "Annakulam Safari" },
        subtotal: "₹4,333 per head for 3D/2N",
        extraCharges: {
        },
      },
      highlights: ["Stay in Rooms/Tents", "Breakfast & Dinner included", "3 Types of Safari", "Camp Fire", "Professional coordination"],
      extraActivities: ["Pickup & Drop (price varies by location)", "Munnar sightseeing (price varies by points)", "Additional vehicle options available"],
      popular: true,
      startTime: "Flexible",
      packageType: "complete"
    }
  ];

  return (
    <section id="packages" className="py-20 px-4 bg-background">
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
                  alt={pkg.id === 1 ? "Kolukkumalai Jeep Safari Munnar sunrise view from world's highest organic tea plantation with Lion Rock viewpoint" : pkg.id === 2 ? "Chathuranga Para offroad jeep safari with panoramic mountain views in Western Ghats Munnar" : pkg.id === 3 ? "Annakulam wildlife jeep safari through tea plantation with mountain trails in Munnar" : `${pkg.title} - Best jeep safari in Munnar offroad adventure package`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Gallery Button - positioned in bottom-right corner of main photo */}
                {pkg.id === 1 && (
                  <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-smooth"
                      >
                        <Camera className="w-4 h-4 mr-1" />
                        Gallery
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
                      <div className="relative h-full bg-black">
                        <button
                          onClick={() => setIsGalleryOpen(false)}
                          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>
                        
                        <div className="relative h-full flex items-center justify-center">
                          <img
                            src={galleryImages[currentImageIndex].src}
                            alt={galleryImages[currentImageIndex].alt}
                            className="max-h-full max-w-full object-contain"
                            loading="lazy"
                          />
                          
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <div className="text-center text-white">
                            <h3 className="text-xl font-bold mb-2">{galleryImages[currentImageIndex].title}</h3>
                            <p className="text-gray-300 mb-4">{galleryImages[currentImageIndex].description}</p>
                            <div className="flex justify-center gap-2">
                              {galleryImages.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                                  }`}
                                />
                              ))}
                            </div>
                            <Badge variant="secondary" className="mt-4">
                              {currentImageIndex + 1} of {galleryImages.length}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                
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
                  <h5 className="font-semibold text-sm">Package Highlights:</h5>
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
                      <h6 className="font-semibold text-primary">Detailed Price Breakdown (Per Person):</h6>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span>{pkg.priceBreakdown.accommodation.description}</span>
                          <span className="font-medium">{pkg.priceBreakdown.accommodation.price}</span>
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
                        {(pkg as any)?.priceBreakdown?.extraCharges?.description && (pkg as any)?.priceBreakdown?.extraCharges?.price && (
                          <div className="flex justify-between">
                            <span>{(pkg as any).priceBreakdown.extraCharges.description}</span>
                            <span className="font-medium">{(pkg as any).priceBreakdown.extraCharges.price}</span>
                          </div>
                        )}
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
                      <h6 className="font-semibold text-accent-foreground mb-1">Extra Activities (Variable Pricing):</h6>
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