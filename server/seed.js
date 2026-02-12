import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Hotel from './models/Hotel.js';
import Staff from './models/Staff.js';

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        // Clear existing data
        await Staff.deleteMany({});
        await Hotel.deleteMany({});

        // Seed Staff
        const staffMembers = [
            {
                name: 'Michael Dean',
                role: 'Executive Chef',
                image: 'https://images.unsplash.com/photo-1577214282282-e33e94ad99ee?auto=format&fit=crop&q=80&w=400'
            },
            {
                name: 'Arnold Taylor',
                role: 'Interior Designer',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
            },
            {
                name: 'Sarah Jenkins',
                role: 'Hospitality Manager',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
            },
            {
                name: 'David Wilson',
                role: 'Events Coordinator',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400'
            },
        ];
        await Staff.insertMany(staffMembers);
        console.log('Staff seeded successfully!');

        // Seed Hotels
        const hotels = [
            {
                name: 'Royal Heritage Suite',
                price: 1200,
                description: 'Experience absolute royalty in our heritage suites, featuring gold-leaf ceilings and authentic Victorian furniture. Perfect for those who seek timeless elegance and unparalleled comfort.',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
                guests: 2,
                beds: 1,
                baths: 2,
            },
            {
                name: 'Ocean View Penthouse',
                price: 850,
                description: 'Panoramic views of the Pacific Ocean with floor-to-ceiling windows. This modern penthouse offers a private balcony and a state-of-the-art entertainment system for the ultimate get-away.',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=600',
                guests: 4,
                beds: 2,
                baths: 2,
            },
            {
                name: 'Zen Garden Villa',
                price: 650,
                description: 'A peaceful retreat nestled within a private botanical garden. Features an outdoor stone bath, meditation space, and minimalist Japanese-inspired architecture for total relaxation.',
                image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600',
                guests: 2,
                beds: 1,
                baths: 1,
            },
            {
                name: 'Skyline Executive Loft',
                price: 550,
                description: 'Modern urban living at its finest. This loft features industrial chic design, high-speed fiber internet, and a dedicated workspace, ideal for business travelers and digital nomads.',
                image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600',
                guests: 2,
                beds: 1,
                baths: 1,
            }
        ];
        await Hotel.insertMany(hotels);
        console.log('Hotels seeded successfully!');

        process.exit();
    } catch (err) {
        console.error('Error seeding data:', err);
        process.exit(1);
    }
};

seedData();
