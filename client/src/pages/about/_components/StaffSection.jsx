import SectionHeader from "@/components/SectionHeader";
import { Plus } from 'lucide-react';

const StaffSection = ({ staff }) => {
    return (
        <section className="flex items-center bg-white py-32">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center">
                <SectionHeader
                    badge="Fixyland Staff"
                    title="Expert Staff Persons"
                    align="center"
                    className="mb-12"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                    {(staff.length > 0 ? staff.slice(0, 4) : [
                        { _id: 1, name: 'Michael Dean', role: 'Chef Master', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=500&fit=crop' },
                        { _id: 2, name: 'Arnold Taylor', role: 'Room Cleane', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=500&fit=crop' },
                        { _id: 3, name: 'Michael Dean', role: 'Assistant Chef', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop' },
                        { _id: 4, name: 'Michael Dean', role: 'Supervisor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' }
                    ]).map((member) => (
                        <div key={member._id} className="relative group overflow-hidden rounded-lg bg-white shadow-xl hover:-translate-y-2 transition-all duration-500">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
                                <div className="absolute bottom-5 right-5 h-10 w-10 bg-[#21906b] rounded-lg flex items-center justify-center text-white cursor-pointer shadow-lg active:scale-95 transition-transform">
                                    <Plus size={20} strokeWidth={3} />
                                </div>
                            </div>
                            <div className="px-8 py-7 bg-white">
                                <h3 className="text-[20px] font-bold text-[#111111] mb-2">{member.name}</h3>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-[2.5px] bg-[#21906b] rounded-full"></div>
                                    <p className="text-muted-foreground font-medium text-[14px] uppercase tracking-wider">{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StaffSection;
