import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import axios from 'axios';
import { ArrowRight, Check, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/staff');
                setStaff(res.data);
            } catch (err) {
                console.error('Error fetching staff:', err);
            }
        };
        fetchStaff();
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative h-[400px] flex items-center justify-center text-white text-center bg-black/60">
                <div
                    className="absolute inset-0 z-[-1] bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920')" }}
                />
                <div className="container px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
                    <div className="flex justify-center items-center gap-2 text-sm md:text-base">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <span className="opacity-50">/</span>
                        <span className="text-primary font-medium">About Us</span>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <Badge className="bg-primary hover:bg-primary/90 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                                Luxury Hotel
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                We Provide Outdoor Activities To All Visitors
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                These are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: "🏊", title: "The Best Swiming Pool" },
                                    { icon: "🚴", title: "The Best Stationary Bike" }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                                            {item.icon}
                                        </div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                {[
                                    "It is a long fact that a reader will be distracted by the readable",
                                    "Lorem Ipsum is simply dummy of the printing and industry",
                                    "There are many variations of Lorem Ipsum majority"
                                ].map((text, i) => (
                                    <div key={i} className="flex gap-3 items-center text-muted-foreground">
                                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-14 rounded-md">
                                Discover More <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className="relative pt-8 pb-12 pr-12">
                            <div className="rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
                                <img
                                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
                                    alt="Hotel activity"
                                    className="w-full h-auto"
                                />
                            </div>
                            <Card className="absolute bottom-0 right-0 max-w-[280px] shadow-2xl border-none">
                                <CardContent className="p-6">
                                    <div className="flex gap-4 items-center">
                                        <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center text-3xl">
                                            🍳
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl">Restaurants</h4>
                                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                                Dolor in quie the velit patien keeps well. Donee of velit are you asurent done.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { value: "305+", label: "Luxury Rooms" },
                        { value: "650+", label: "Regular Guests" },
                        { value: "80+", label: "Team Member" },
                        { value: "75+", label: "Beaches" }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <h2 className="text-4xl md:text-5xl font-bold">{stat.value}</h2>
                            <p className="text-white/70 text-sm md:text-base font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative group">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800"
                                    alt="Why choose us"
                                    className="w-full transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-primary border-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
                                    Our Skills
                                </Badge>
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why Choose for us?</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { label: "Services", value: 95 },
                                    { label: "Chef Master", value: 88 },
                                    { label: "Design", value: 60 },
                                    { label: "B Solution", value: 99 }
                                ].map((skill, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between font-bold text-sm">
                                            <span>{skill.label}</span>
                                            <span>{skill.value}%</span>
                                        </div>
                                        <Progress value={skill.value} className="h-2 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="relative py-40 overflow-hidden group">
                <div
                    className="absolute inset-0 z-[-1] bg-cover bg-center bg-fixed transition-transform duration-1000 group-hover:scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920')" }}
                />
                <div className="absolute inset-0 bg-primary/80 z-[-1]" />
                <div className="container mx-auto px-4 text-center text-white space-y-8">
                    <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">
                        Amazing Experience
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-bold">Relax And Enjoy With Our Hotel & Resort</h2>
                    <Button size="icon" className="h-24 w-24 rounded-full bg-white text-primary hover:bg-white/90 transform hover:scale-110 transition-all shadow-2xl">
                        <Play className="h-10 w-10 fill-primary" />
                    </Button>
                </div>
            </section>

            {/* Staff Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-4 mb-16">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                            Fixyland Staff
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold">Expert Staff Persons</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {staff.map((member) => (
                            <Card key={member._id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white">
                                <div className="relative overflow-hidden aspect-[4/5]">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 py-6 bg-white/95 backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl font-bold text-center">{member.name}</h3>
                                        <p className="text-primary text-sm font-medium text-center mt-1">{member.role}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
