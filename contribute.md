
---

# `CONTRIBUTE.md` for **Backend (sanghathi-Backend)**

```markdown
# Contributing to Sanghathi Backend

We’re excited that you want to contribute to **Sanghathi Backend**  
This document will guide you through environment setup, workflow, and submission process.

---

## Technology Stack
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Swagger (for API docs)

---

## Getting Started

### 1. Fork & Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/sanghathi-Backend.git
cd sanghathi-Backend
git remote add upstream https://github.com/Sanghathi/sanghathi-Backend.git
### 2. Install Dependencies
npm install
### 3. Configure Environment Variables
Create a .env file in the root with the following:
### 4. Run the Development Server
npm run dev
# API will be available at: http://localhost:5000
### Branching & Workflow
# 1.Create a new branch:
git checkout -b feature/auth-api
# 2.Make changes and commit:
git commit -m "feat: add authentication API with JWT"
# 3.Push your branch:
git push origin feature/auth-api
# 4.Open a Pull Request to main.
### Before Submitting a PR
Ensure server runs without errors.
Test API endpoints with Postman/Insomnia.
Update Swagger/OpenAPI documentation if APIs change.
Add validation and error handling where needed.
### Keeping Your Fork Updated
git fetch upstream
git pull --rebase upstream main
git push --force origin feature/your-feature-name
### Code Review Process
Reviewers will check code style, error handling, and security.
Database schema and API contracts must be consistent.
Ensure commits are meaningful and follow best practices.
### Thank you for contributing to Sanghathi Backend!