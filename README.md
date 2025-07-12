# QuickBlog – Full Stack Blog Application

QuickBlog is a full-stack blog platform where users can securely register, log in, create, and view blog posts with image uploads. It is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and features JWT-based authentication and cloud image upload integration.

---

## Features

- User registration and login with authentication
- Create and view blog posts with image uploads
- JWT-based protected routes
- Responsive React frontend with routing and form validation
- Image upload using ImageKit or Cloudinary with Multer
- MongoDB-based storage using Mongoose
- Modular folder structure separating frontend and backend

---

## Tech Stack

| Category   | Tools / Libraries                        |
|------------|-------------------------------------------|
| Frontend   | React.js, axios, react-router-dom         |
| Backend    | Node.js, Express.js                       |
| Database   | MongoDB, Mongoose                         |
| Auth       | JWT, bcrypt                               |
| File Upload| Multer, ImageKit or Cloudinary            |
| Utilities  | dotenv, cors, express-validator, body-parser |

---

## Project Structure

QuickBlog/
│
├── client/ # React frontend
│ ├── src/
│ ├── components/ # Navbar, BlogCard, ProtectedRoute
│ ├── pages/ # Login, Register, Home, CreateBlog
│ ├── App.js # Main app with routes
│ └── index.js # Entry point
│
├── server/ # Node.js backend
│ ├── controllers/ # Route logic (auth, blog)
│ ├── routes/ # API routes
│ ├── models/ # Mongoose schemas (User, Blog)
│ ├── middleware/ # JWT auth, Multer upload, error handler
│ ├── config/ # ImageKit and database configuration
│ └── server.js # Main server file
│
└── README.md # Project documentation

## Setup Instructions
 ## Clone the Repository
     git clone https://github.com/<your-username>/QuickBlog.git
     cd QuickBlog

     
##  Backend Setup (Node.js + Express)
  ## Navigate to the server folder and install dependencies:
      cd server
      npm install
  ## Create a .env file in the server/ directory:
    PORT=4000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
    IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
    IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id
  ## Start the backend server:
    npm start

    
## Frontend Setup (React)
     cd ../client
     npm install
  ## Start the React development server:
     npm start
     






