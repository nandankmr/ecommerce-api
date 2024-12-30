# E-Commerce App
This is a simple e-commerce app built using Node.js, Express(Typescript), Sequelize, PostgreSQL, and React.

## Features
- View Placed Orders in a table
- Filter Orders
- View Order Details
- Add New Order
- Delete Order
- Update Order

## Technologies Used
- Node.js
- Typescript
- Express
- Sequelize
- PostgreSQL
- React
- React-Bootstrap

## Demo
I have deployed the app on Render.com. You can check it out using the link below.

[https://ecommerce-api-e5u1.onrender.com/](https://ecommerce-api-e5u1.onrender.com/)

## Build Process

Ideally, backend and frontend should have separate repositories, but for simplicity in building this project, I have kept them in the same repository.
Following are the steps to build the project.
1. Clone the Repository.
```bash
    git clone https://github.com/nandankmr/ecommerce-api
    cd ecommerce-api
```
2. Create a .env file in the root directory and add the database connection details in the following format (Replace the placeholders with your own values).
```
    DATABASE_URL='postgres://[username]:[password]@[host]:[port]/[database]'
    PORT=3022 # Port number to run the server on (Default: 3000)
```
3. Run db migrations: If the database does not have required tables, copy commands from `db-migrations` files and execute them in your database.
4. Prepare the Frontend.
```bash
    npm run prepare-frontend
```
5. Install Dependencies.
```bash
    npm install
```
6. Build the Project.
```bash
    npm run build
```
7. Start the Server.
```bash
    npm run start
```

