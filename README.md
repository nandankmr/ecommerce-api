# E-Commerce App

This repository hosts a simple e-commerce app built using modern web development technologies like Node.js, Express (with TypeScript), Sequelize, PostgreSQL, and React.

## Features
- **View Orders**: Display all placed orders in a table format.
- **Filter Orders**: Search and filter orders based on criteria.
- **Order Details**: View detailed information about specific orders.
- **Add Orders**: Create and add new orders.
- **Delete Orders**: Remove existing orders.
- **Update Orders**: Modify details of existing orders.

## Technologies Used
- **Backend**:
  - Node.js
  - TypeScript
  - Express
  - Sequelize ORM
  - PostgreSQL Database
- **Frontend**:
  - React
  - React-Bootstrap (UI Components)

## Live Demo
The app is deployed on Render.com. You can access it using the link below:

[Live Demo: E-Commerce App](https://ecommerce-api-e5u1.onrender.com/)

> **Note**: The site may take a minute to load if it has been inactive (In Idle mode).

## Build Process

For simplicity, both backend and frontend code are kept in the same repository. To build and run the project, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/nandankmr/ecommerce-api
cd ecommerce-api
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and provide your database connection details in the following format:

```
DATABASE_URL='postgres://[username]:[password]@[host]:[port]/[database]'
# Port number to run the server on (Default: 3000)
PORT=3022
```

### 3. Run Database Migrations
Ensure the required database tables are created. If not, manually run the commands available in the `db-migrations` directory on your database.

### 4. Prepare the Frontend
Compile and build the frontend assets.
```bash
npm run prepare-frontend
```

### 5. Install Dependencies
Install all necessary dependencies for both backend and frontend.
```bash
npm install
```

### 6. Build the Project
Build the project for production.
```bash
npm run build
```

### 7. Start the Server
Run the server to start the application.
```bash
npm run start
```

### 8. Open the site in the browser
Open the site in the browser by visiting http://localhost:{PORT} where {PORT} is the port number specified in the .env file.
