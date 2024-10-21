# Portfolio Application

This is a **Portfolio Application** built using **Express.js**, **EJS**, and **CSS**. It allows users to browse through projects displayed on the portfolio and registered users to manage their projects (add, edit, and delete). This project demonstrates both frontend and backend development using server-side rendering with EJS.

## Features

- **Public View**: 
  - Visitors can view a list of portfolio projects.
  - Each project displays an image, title, category, and description.
  
- **User Registration & Authentication**: 
  - Users can create an account to manage their portfolio.
  - Sign in and sign out functionality.
  
- **Project Management**: 
  - Logged-in users can add new projects.
  - Users can edit or delete their own projects.

## Tech Stack

- **Backend**: 
  - **Express.js**: A minimal and flexible Node.js web application framework.
  - **MongoDB (Optional)**: Database to store user credentials and projects.

- **Frontend**: 
  - **EJS (Embedded JavaScript)**: A templating engine to render dynamic content on the frontend.
  - **CSS**: For styling the application.

- **Authentication**: 
  - User session management using `mongo-store`.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (if using MongoDB for data storage)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd your-repo-name
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Create a `.env` file** to store your environment variables:

   ```bash
   touch .env
   ```

   Inside `.env`, add:

   ```
   PORT=3000
   DB_STRING=mongodb://localhost:27017/portfolio-db
   SESSION_SECRET=yourSecretKey
   ```

5. **Run the app**:

   ```bash
   npm start
   ```

   The app will run locally on [http://localhost:3000](http://localhost:3000).


---

## Usage

1. **Browse Projects**: 
   - On the homepage, visitors can see the list of all projects with an image, title, category, and description.

2. **User Registration & Login**:
   - Users can sign up by creating an account and logging in to manage their own projects.

3. **Add Projects**:
   - After logging in, users can add a new project by filling out the project form (with image, title, category, and description).

4. **Edit or Delete Projects**:
   - Users can edit or delete their own projects from their portfolio.

Here's a section to add to the README file that outlines the dependencies in your project, based on what you've listed.

---

## Dependencies

This project relies on the following Node.js packages:

- **[bcrypt](https://www.npmjs.com/package/bcrypt)** `^5.1.1`: A library to hash and compare passwords securely.
- **[body-parser](https://www.npmjs.com/package/body-parser)** `^1.20.3`: Middleware to parse incoming request bodies, particularly used for form data handling.
- **[connect-mongo](https://www.npmjs.com/package/connect-mongo)** `^5.1.0`: MongoDB-based session store for Express and Connect.
- **[cookie-parser](https://www.npmjs.com/package/cookie-parser)** `^1.4.7`: Middleware for parsing cookies attached to client requests.
- **[ejs](https://ejs.co/)** `^3.1.10`: Embedded JavaScript templating engine to generate HTML markup with plain JavaScript.
- **[express](https://expressjs.com/)** `^4.21.1`: A fast, unopinionated, minimalist web framework for Node.js.
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)** `^9.0.2`: A library to generate and verify JSON Web Tokens (JWT) for secure authentication.
- **[mongoose](https://mongoosejs.com/)** `^8.7.1`: MongoDB object modeling for Node.js that provides schema-based models.
- **[multer](https://www.npmjs.com/package/multer)** `^1.4.5-lts.1`: Middleware for handling multipart/form-data, primarily for file uploads.
- **[nodemon](https://www.npmjs.com/package/nodemon)** `^3.1.7`: A tool that automatically restarts your Node.js application when file changes are detected.

---

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='portofolio.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
