import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bath, Bed, Users } from 'lucide-react';

const HotelListing = ({ hotels }) => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 text-center">
                <div className="bg-background inline-block px-4 py-1.5 rounded-sm mb-4 border border-border">
                    <span className="text-primary font-extrabold uppercase tracking-widest text-[12px]">Our Best Rooms</span>
                </div>
                <h2 className="text-[44px] font-extrabold text-foreground mt-4 mb-16">Luxury Rooms and Resort</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {hotels.map((hotel) => (
                        <Card key={hotel._id} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white text-left">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-6 left-6">
                                    <div className="bg-primary text-primary-foreground text-lg font-bold px-4 py-1 shadow-xl rounded-md">
                                        ${hotel.price} / Night
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-8">
                                <h3 className="text-[24px] font-black text-foreground mb-4">{hotel.name}</h3>
                                <div className="flex gap-6 mb-6 text-muted-foreground font-bold text-[14px]">
                                    <span className="flex items-center gap-2 font-black"><Users className="h-4 w-4 text-primary" /> {hotel.guests} Guests</span>
                                    <span className="flex items-center gap-2 font-black"><Bed className="h-4 w-4 text-primary" /> {hotel.beds} Beds</span>
                                    <span className="flex items-center gap-2 font-black"><Bath className="h-4 w-4 text-primary" /> {hotel.baths} Bath</span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                                    {hotel.description}
                                </p>
                                <Button className="w-full h-12 bg-transparent border-2 border-border text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all font-black rounded-md">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotelListing;
