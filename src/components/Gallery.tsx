import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Camera, X } from "lucide-react";

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
      src: "/lovable-uploads/d22d8390-df00-49a3-b3bf-156cc8a2dede1.png",
      alt: "Mountain valley view from Kolukkumalai trekking point with dramatic lighting",
      title: "Mountain Valley Vista",
      description: "Spectacular valley views from trekking points"
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

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the breathtaking beauty of Kolukkumalai and Munnar through our safari adventures
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="font-semibold">
                <Camera className="w-5 h-5 mr-2" />
                View Photo Gallery
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
              <div className="relative h-full bg-black">
                <button
                  onClick={() => setIsOpen(false)}
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
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, 8).map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsOpen(true);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;