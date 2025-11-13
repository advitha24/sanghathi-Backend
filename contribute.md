# Contributing to Sanghathi Backend

Thank you for your interest in contributing to the **Sanghathi Backend** project!  
This guide will help you set up your local environment, follow the contribution workflow, and submit your changes effectively.

---

## Tech Stack

The backend is built using the following technologies:

- **Node.js** – JavaScript runtime for building scalable backend services.  
- **Express.js** – Web framework for creating RESTful APIs.  
- **MongoDB** – NoSQL database for flexible and fast data storage.  
- **JWT Authentication** – For secure user authentication.  
- **Swagger** – For auto-generated API documentation.

---

## Setup Instructions

### 1. Fork and Clone the Repository

First, fork the repository to your GitHub account and clone it locally:

```bash
git clone https://github.com/YOUR-USERNAME/Sanghathi-Backend.git
cd Sanghathi-Backend
Then, add the upstream remote to stay synced with the main project:
git remote add upstream https://github.com/Sanghathi/Sanghathi-Backend.git
### 2. Install Dependencies
Install all the required packages:
npm install
### 3. Configure Environment Variables
Create a .env file in the root directory and add the necessary environment variables (refer to .env.example or the README for details).
Example:
PORT=5000
MONGODB_URI=YOUR_MONGO_URI
JWT_SECRET=YOUR_SECRET_KEY
### 4. Run the Development Server
Start the local development server:
npm run dev
The backend will now run at:
👉 http://localhost:5000
Branching and Workflow
To maintain clean collaboration, follow this standard Git workflow:
### 1. Create a New Branch
git checkout -b feature/your-feature-name
Examples:
feature/auth-api
bugfix/login-error
docs/update-readme
### 2. Make Your Changes
Implement your feature, bug fix, or documentation update.
### 3. Commit Your Changes
Follow meaningful commit messages:
git commit -m "feat: add authentication API with JWT"
### 4. Push Your Branch
git push origin feature/your-feature-name
### 5. Open a Pull Request (PR)
Go to your GitHub repository.
Click “Compare & pull request”.
Submit your PR to the main branch.
Before Submitting a Pull Request
Please ensure that:
The server runs without errors.
All API endpoints are tested using Postman/Insomnia.
Swagger or API documentation is updated if new routes are added.
Proper input validation and error handling are implemented.
No console logs or unnecessary debug statements remain.
Keeping Your Fork Updated
### Stay in sync with the main repository to avoid merge conflicts:
git fetch upstream
git pull --rebase upstream main
git push --force origin feature/your-feature-name
Code Review Process
Reviewers will check:
Code readability and structure.
Security and error handling practices.
Consistency in API contracts and database schema.
Commit message clarity and best practices.
Once approved, your PR will be merged into the main branch. 
Thank You 
Your contributions make Sanghathi better for everyone.
We appreciate your time and effort in helping improve the project!