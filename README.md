# Fixyland - MERN Stack Assessment

This project is a MERN Stack implementation of the Fixyland hotel booking landing pages.

## Technologies Used
- **Frontend**: React (Vite), Tailwind CSS, Shadcn UI, Lucide Icons, Axios, React Router.
- **Backend**: Express.js, MongoDB (Mongoose), Node.js.
- **Tools**: Postman (for API testing), Nodemon.

## Features
- **About Us Page**: Dynamic expert staff fetching, responsive design.
- **Booking Page**: Real-time room listings and appointment booking form.
- **404 Page**: Custom designed error page.
- **API Endpoints**:
  - `GET /api/staff`: Fetch hotel staff details.
  - `GET /api/hotels`: Fetch available room listings.
  - `POST /api/appointments`: Submit booking requests.

## Setup Instructions

### Quick Start (All-in-one)
1. Install all dependencies: `npm run install-all`.
2. Seed the database (optional): `npm run seed`.
3. Start both frontend and backend together: `npm start`.

### Individual Setup
#### Backend
1. Navigate to `/server`.
2. Install dependencies: `npm install`.
3. Create a `.env` file with `MONGODB_URI` and `PORT`.
4. Seed the database: `node seed.js`.
5. Start the server: `npm run dev`.

#### Frontend
1. Navigate to `/client`.
2. Install dependencies: `npm install`.
3. Start the dev server: `npm run dev`.

## Author
Developed as part of a MERN Stack assessment.
