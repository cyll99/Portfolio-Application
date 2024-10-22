# Portfolio Application

This is a **Portfolio Application** built using **Express.js**, **EJS**, and **CSS**. It allows users to browse through projects displayed on the portfolio and registered users to manage their projects (add, edit, and delete). This project demonstrates both frontend and backend development using server-side rendering with EJS.

## Features

- **Public View**: 
  - [x] Visitors can view a list of portfolio projects.
  - [x] Each project displays an image, title, category, and description.
  
- **User Registration & Authentication**: 
  - [x] Users can create an account to manage their portfolio.
  - [x] Sign in and sign out functionality.
  
- **Project Management**: 
  - [x] Logged-in users can add new projects.
  - [x] Users can edit or delete their own projects.

## Tech Stack

- **Backend**: 
  - **Express.js**: A minimal and flexible Node.js web application framework.
  - **MongoDB**: Database to store user credentials and projects.

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

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='portfolio.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
