import SectionHeader from "@/components/SectionHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getStaff } from '@/api';

const StaffSection = () => {
    const [staff, setStaff] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const res = await getStaff();
                setStaff(res.data);
                setError(null);
            } catch (err) {
                console.error('Error fetching staff:', err);
                setError('Failed to load staff members. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };
        fetchStaff();
    }, []);

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
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg bg-white shadow-xl">
                                <Skeleton className="aspect-[4/5] w-full rounded-t-lg" />
                                <div className="px-8 py-7">
                                    <Skeleton className="h-6 w-3/4 mb-3" />
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-[2.5px] bg-[#21906b]/20 rounded-full"></div>
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : error ? (
                        <div className="col-span-full py-10 text-center">
                            <p className="text-destructive font-bold text-lg">{error}</p>
                        </div>
                    ) : staff.length === 0 ? (
                        <div className="col-span-full py-10 text-center">
                            <p className="text-muted-foreground text-lg">No staff found.</p>
                        </div>
                    ) : (
                        staff.slice(0, 4).map((member) => (
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
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default StaffSection;
