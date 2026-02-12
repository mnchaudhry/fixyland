import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Calendar as CalendarIcon } from 'lucide-react';

const AppointmentForm = ({ formData, handleChange, handleSelectChange, handleSubmit, status }) => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <SectionHeader
                    badge="Stay With Us"
                    title="Make An Appointment"
                    align="center"
                    className="mb-10"
                />

                <div className="grid lg:grid-cols-3 gap-12">
                    <Card className="lg:col-span-2 border-none shadow-2xl p-8 md:p-12 rounded-3xl bg-white">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="font-bold text-sm uppercase tracking-wider text-foreground">First Name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Ex. first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="h-14 border-border bg-background focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="font-bold text-sm uppercase tracking-wider text-foreground">Last Name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Ex. last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="h-14 border-border bg-background focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="font-bold text-sm uppercase tracking-wider text-foreground">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Ex. info@domain.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="h-14 border-border bg-background focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="font-bold text-sm uppercase tracking-wider text-foreground">Phone Number</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    placeholder="Ex. (+1) 987 654 3210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="h-14 border-border bg-background focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="font-bold text-sm uppercase tracking-wider text-foreground">Select Type</Label>
                                <Select value={formData.type} onValueChange={(v) => handleSelectChange('type', v)}>
                                    <SelectTrigger className="h-14 border-border bg-background">
                                        <SelectValue placeholder="Select Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Luxury">Luxury</SelectItem>
                                        <SelectItem value="Budget">Budget</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="font-bold text-sm uppercase tracking-wider text-foreground">Select Room</Label>
                                <Select value={formData.room} onValueChange={(v) => handleSelectChange('room', v)}>
                                    <SelectTrigger className="h-14 border-border bg-background">
                                        <SelectValue placeholder="Select Room" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Deluxe">Deluxe Room</SelectItem>
                                        <SelectItem value="Junior">Junior Room</SelectItem>
                                        <SelectItem value="Family">Family Room</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="checkIn" className="font-bold text-sm uppercase tracking-wider text-foreground">Check In</Label>
                                <div className="relative">
                                    <Input
                                        id="checkIn"
                                        type="text"
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = e.target.value ? "date" : "text")}
                                        name="checkIn"
                                        placeholder="Select date.."
                                        value={formData.checkIn}
                                        onChange={handleChange}
                                        required
                                        className="h-14 border-border bg-background pr-12 [&::-webkit-calendar-picker-indicator]:opacity-0"
                                    />
                                    <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="checkOut" className="font-bold text-sm uppercase tracking-wider text-foreground">Check Out</Label>
                                <div className="relative">
                                    <Input
                                        id="checkOut"
                                        type="text"
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = e.target.value ? "date" : "text")}
                                        name="checkOut"
                                        placeholder="Select date.."
                                        value={formData.checkOut}
                                        onChange={handleChange}
                                        required
                                        className="h-14 border-border bg-background pr-12 [&::-webkit-calendar-picker-indicator]:opacity-0"
                                    />
                                    <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none" />
                                </div>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <Label htmlFor="message" className="font-bold text-sm uppercase tracking-wider text-foreground">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Ex. type message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="border-border bg-background p-6 rounded-xl focus-visible:ring-primary resize-none"
                                />
                            </div>
                            <div className="md:col-span-2 pt-4">
                                <Button type="submit" disabled={status.type === 'loading'} className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-lg font-bold transition-all shadow-xl">
                                    {status.type === 'loading' ? 'Booking...' : 'Book Appointment'} <ArrowRight className="ml-3 h-5 w-5" />
                                </Button>
                            </div>
                        </form>
                    </Card>

                    <div className="space-y-8 h-full">
                        <Card className="bg-primary text-primary-foreground border-none rounded-3xl overflow-hidden shadow-2xl relative">
                            <CardContent className="p-10 space-y-8">
                                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white/20">
                                    <img
                                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400"
                                        alt="Support"
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-4 text-center">
                                    <h2 className="text-[32px] font-black leading-none">(+1) 987 654 3210</h2>
                                    <p className="opacity-80 font-medium">
                                        Mon-Fri: 7:00 am - 9:00 pm<br />
                                        24/7 Service Available
                                    </p>
                                </div>
                                <Button className="w-full h-14 bg-[#eab308] text-[#112340] hover:bg-[#d9a306] rounded-md font-black text-px shadow-xl border-none">
                                    Call Us Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;
