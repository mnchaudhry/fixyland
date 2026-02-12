const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Staff = require('./models/Staff');
const Hotel = require('./models/Hotel');

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
            { name: 'Michael Dean', role: 'Chef Master', image: 'https://images.unsplash.com/photo-1577214282282-e33e94ad99ee?auto=format&fit=crop&q=80&w=400' },
            { name: 'Arnold Taylor', role: 'Room Colors', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
            { name: 'Michael Dean', role: 'Assistant Chef', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=400' },
            { name: 'Michael Dean', role: 'Supervisor', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
        ];
        await Staff.insertMany(staffMembers);
        console.log('Staff seeded successfully!');

        // Seed Hotels
        const hotels = [
            {
                name: 'Deluxe Rooms',
                price: 800,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
                guests: 2,
                beds: 2,
                baths: 1,
            },
            {
                name: 'Junior Rooms',
                price: 400,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=600',
                guests: 2,
                beds: 2,
                baths: 1,
            },
            {
                name: 'Family Rooms',
                price: 600,
                description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=600',
                guests: 2,
                beds: 2,
                baths: 1,
            },
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
