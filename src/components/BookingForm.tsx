import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Phone, Mail, Users, MapPin } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const BookingForm = () => {
  const [date, setDate] = useState<Date>();
  const [selectedPackage, setSelectedPackage] = useState("");
  const [guests, setGuests] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const packages = [
    { value: "kolukkumalai", label: "Kolukkumalai Sunrise Safari + Lion Rock + Tea Factory - ₹500 per head", price: 500, jeepPrice: 3000 },
    { value: "chathuranga", label: "Chathuranga Para Safari - ₹417 per head", price: 417, jeepPrice: 2500 },
    { value: "annakulam", label: "Annakulam Safari (Elephant area + Waterfall) - ₹367 per head", price: 367, jeepPrice: 2200 },
    { value: "complete", label: "Complete Munnar Package (3D/2N) - ₹12,500 per person", price: 12500 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedPackage || !guests || !formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const selectedPkg = packages.find(pkg => pkg.value === selectedPackage);
    const totalPrice = selectedPkg ? selectedPkg.price * parseInt(guests) : 0;

    // Create WhatsApp message
    const whatsappMessage = `*New Booking Request*

📅 *Date:* ${format(date, "PPP")}
🎯 *Package:* ${selectedPkg?.label}
👥 *Guests:* ${guests}
💰 *Total Amount:* ₹${totalPrice.toLocaleString()}

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

${selectedPackage === "complete" && accommodation ? `🏨 Accommodation: ${accommodation}` : ""}
${selectedPackage === "complete" && vehicle ? `🚗 Vehicle: ${vehicle}` : ""}
${formData.message ? `\n📝 *Special Requests:*\n${formData.message}` : ""}`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "919629609496"; // Replace with actual WhatsApp business number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    toast({
      title: "Opening WhatsApp!",
      description: `Your booking details are ready to send. Total: ₹${totalPrice.toLocaleString()}`,
    });

    // Reset form
    setDate(undefined);
    setSelectedPackage("");
    setGuests("");
    setAccommodation("");
    setVehicle("");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const selectedPkg = packages.find(pkg => pkg.value === selectedPackage);
  const totalPrice = selectedPkg && guests ? selectedPkg.price * parseInt(guests) : 0;

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your Munnar <span className="text-primary">Adventure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve your spot for an unforgettable offroad safari experience in Munnar
          </p>
        </div>

        <Card className="shadow-premium animate-scale-in">
          <CardHeader className="text-center">
            <h3 className="text-2xl font-bold">Safari Booking Form</h3>
            <CardDescription>
              Fill in your details and we'll confirm your adventure within 24 hours
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Package Selection */}
              <div className="space-y-2">
                <Label htmlFor="package" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Safari Package *
                </Label>
                <Select value={selectedPackage} onValueChange={setSelectedPackage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your safari adventure" />
                  </SelectTrigger>
                  <SelectContent>
                    {packages.map((pkg) => (
                      <SelectItem key={pkg.value} value={pkg.value}>
                        {pkg.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date and Guests Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date Selection */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    Preferred Date *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Number of Guests *
                  </Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger>
                      <SelectValue placeholder="How many guests?" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                />
              </div>

              {/* Accommodation & Vehicle Selection for Complete Package */}
              {selectedPackage === "complete" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="accommodation">Accommodation Type</Label>
                    <Select value={accommodation} onValueChange={setAccommodation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose accommodation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rooms">Deluxe Rooms</SelectItem>
                        <SelectItem value="tents">Tent Stay Experience</SelectItem>
                        <SelectItem value="both">Mix of Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle Preference</Label>
                    <Select value={vehicle} onValueChange={setVehicle}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">Sedan Car</SelectItem>
                        <SelectItem value="xuv">XUV / SUV</SelectItem>
                        <SelectItem value="etios">Etios</SelectItem>
                        <SelectItem value="innova">Innova</SelectItem>
                        <SelectItem value="traveler">Traveler (Large Group)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="message">Special Requests</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Any special requirements, dietary preferences, or questions?"
                  rows={3}
                />
              </div>

              {/* Price Summary */}
              {selectedPkg && guests && (
                <div className="bg-muted p-4 rounded-lg space-y-2 animate-slide-up">
                  {selectedPkg.jeepPrice && (
                    <div className="text-sm text-muted-foreground mb-2 p-2 bg-background/50 rounded border">
                      <strong>Safari Pricing:</strong> ₹{selectedPkg.jeepPrice.toLocaleString()} per jeep (up to 6 persons) = ₹{selectedPkg.price} per person
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span>Price per person:</span>
                    <span className="font-semibold">₹{selectedPkg.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Number of guests:</span>
                    <span className="font-semibold">{guests}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between items-center text-lg font-bold">
                    <span>Total Amount:</span>
                    <Badge variant="default" className="text-lg px-3 py-1">
                      ₹{totalPrice.toLocaleString()}
                    </Badge>
                  </div>
                </div>
              )}

              <Button type="submit" variant="hero" size="lg" className="w-full text-lg">
                Submit Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;