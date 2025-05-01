# Sanghathi-Backend

This repository contains the backend code for the **Sanghathi** project, which manages student data and integrates with the frontend to provide a seamless experience for users. The backend is built using modern technologies, ensuring scalability, reliability, and ease of development.

## Tech Stack

The following technologies are used in the backend:

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM for MongoDB, providing schema validation and data modeling.
- **Axios**: For server-to-server HTTP requests (if applicable).
- **Dotenv**: For environment variable management.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (comes with Node.js) or **Yarn**
- **MongoDB** (local or cloud-based)

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/shovan-mondal/Sanghathi-Backend.git
    cd Sanghathi-Backend
    ```

2. Install dependencies:

    For **npm**:

    ```bash
    npm install
    ```

    Or, if you're using **Yarn**:

    ```bash
    yarn install
    ```

3. Create a `.env` file in the root directory and configure the following variables:

    ```env
	NODE_ENV=development
	PORT= ADD_YOUR_BACKEND_PORT
	USERNAME= YOUR_USERNAME
	DATABASE_PASSWORD= YOUR_PASSWORD
	PASSWORD_SALT=12
	JWT_SECRET= ADD_YOUR_JWT_SECRET_KEY
	JWT_EXPIRES_IN=90d
	JWT_COOKIE_EXPIRES_IN=90
	EMAIL_USER= USER_EMAIL
	EMAIL_PASS= USER_PASSWORD
	EMAIL_HOST=smtp.mailtrap.io
	EMAIL_PORT= EMAIL_PORT
	CLIENT_HOST=http://localhost:3000
	MONGODB_URI= YOUR_MONGODB_URI
	SUPABASE_PRIVATE_KEY= YOUR_SUPABASE_KEY
	SUPABASE_URL= YOUR_SUPABASE_URL
	PYTHON_API= http://localhost:8080
	GOOGLE_GEMINI_API_KEY= YOUR_GEMINI_API_KEY
    ```

4. Start the server in development mode:

    For **npm**:

    ```bash
    npm run dev
    ```

    Or, with **Yarn**:

    ```bash
    yarn dev
    ```

The server will run at `http://localhost:8000` by default.

## API Endpoints

### Authentication

- **POST** `/auth/login`: User login.

## Folder Structure

```bash
Sanghathi-Backend/
│
├── controllers/         # API route handlers
├── models/              # Mongoose schemas and models
├── routes/              # API route definitions
├── middlewares/         # Middleware functions (e.g., auth)
├── utils/               # Helper functions and utilities
├── .env                 # Environment variables
├── server.js            # Entry point for the application
└── README.md            # Documentation
```
## Contributing

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes and commit:

    ```bash
    git commit -m "Add feature-name"
    ```

4. Push your branch and create a pull request.

## License

This project is licensed under the [MIT License](LICENSE)
