
# Napparel Backend

This is the backend for the Napparel project, built using Node.js, Express, MongoDB, and Swagger for API documentation.

## Features

- API endpoints for user authentication, product management, and order processing.
- Swagger documentation to explore and test the API at `/api-docs`.
- Nodemon for automatic server restarts during development.

## Installation

Follow these steps to get your local copy of the project up and running.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/napparel-backend.git
```

### 2. Install dependencies

Navigate to the project folder and install the necessary packages.

```bash
cd napparel-backend
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and add the following:

```plaintext
MONGO_URI=your-mongo-db-uri
PORT=your-preferred-port
JWT_SECRET=your-jwt-secret
```

### 4. Running the app

#### Development

To start the server with `nodemon` for automatic reloading during development:

```bash
npm run server
```

This will start the server and will watch for changes in your code.

#### Production

To start the server in production mode (without auto-reloading):

```bash
npm start
```

This will run the app using `node server.js`.

### 5. Access Swagger API Docs

Once the server is running, you can access the Swagger documentation by visiting:

```
http://localhost:your-port/api-docs
```

It provides an interactive interface to explore and test the available API endpoints.

## API Endpoints

- **POST** `/api/users/login` - Login a user.
- **POST** `/api/users/register` - Register a new user.
- **GET** `/api/products` - Get a list of products.
- **GET** `/api/products/:id` - Get a product by ID.
- **GET** `/api/orders` - Get a list of orders.
- **GET** `/api/orders/:id` - Get an order by ID.

For a full list of API routes and their documentation, visit `/api-docs`.
