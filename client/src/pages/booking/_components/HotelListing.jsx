import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bath, Bed, Users } from 'lucide-react';

const HotelListing = ({ hotels }) => {
    // Dummy data fallback matching the screenshot
    const defaultHotels = [
        {
            _id: '1',
            name: 'Deluxe Rooms',
            price: '300',
            image: '/assets/images/room-1.jpg', // Placeholder, using a valid path if possible or absolute URL
            guests: 2,
            beds: 2,
            baths: 1,
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
        },
        {
            _id: '2',
            name: 'Junior Rooms',
            price: '400',
            image: '/assets/images/room-2.jpg',
            guests: 2,
            beds: 2,
            baths: 1,
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
        },
        {
            _id: '3',
            name: 'Family Rooms',
            price: '600',
            image: '/assets/images/room-3.jpg',
            guests: 2,
            beds: 2,
            baths: 1,
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'
        }
    ];

    // Use passed hotels or fallback to defaultHotels
    const displayHotels = (hotels && hotels.length > 0) ? hotels : defaultHotels;

    return (
        <section className="py-24 bg-primary font-sans">
            <div className="container mx-auto px-4 text-center">

                <SectionHeader
                    title="Luxury Rooms and Resort"
                    description=""
                    badge='Our Best Rooms'
                    titleClassName="text-white"
                    className="mb-10"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayHotels.map((hotel, index) => (
                        <Card key={hotel._id || index} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white text-left flex flex-col h-full">
                            <div className="relative h-[250px] overflow-hidden">
                                <img
                                    src={hotel.image.startsWith('/') ? `https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800` : hotel.image}
                                    alt={hotel.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="bg-primary text-white text-sm font-bold px-3 py-1.5 rounded-md shadow-lg">
                                        ${hotel.price} / Night
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-8 flex flex-col flex-grow">
                                <h3 className="text-[24px] font-black text-foreground mb-4">{hotel.name}</h3>

                                <div className="flex items-center gap-6 mb-6 text-muted-foreground text-[14px] font-bold border-b border-border pb-6">
                                    <div className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-primary" />
                                        <span>{hotel.guests} Guests</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bed className="h-5 w-5 text-primary" />
                                        <span>{hotel.beds} Beds</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="h-5 w-5 text-primary" />
                                        <span>{hotel.baths} Bath</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-8 line-clamp-3 text-[15px]">
                                    {hotel.description}
                                </p>

                                <div className="mt-auto">
                                    <Button className="w-fit bg-primary hover:bg-primary/90 text-white font-bold h-12 px-8 rounded-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HotelListing;
