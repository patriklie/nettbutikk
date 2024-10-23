# E-Commerce Store

This project is an example of an e-commerce solution where users can browse, add, and remove products from their shopping cart. With features for user registration and login, as well as real-time updates to the shopping cart, this application provides a seamless shopping experience. The store is built with a modern tech stack that includes React for the frontend and Express with MongoDB for the backend.

## Functionality

- **Product Viewing:** Explore products.
- **Shopping Cart:** Add and remove products from your cart, with automatic total updates.
- **User Registration and Login**
- **Backend Connection:** The backend service handles data storage and authentication via MongoDB.

## Technologies

### Frontend
- **React:** For building the user interface.
- **Redux Toolkit:** For efficient state management.
- **React Router:** For navigating between different pages.
- **Styled Components:** For styling components.
- **Axios:** For API calls to the backend.

### Backend
- **Express:** Web application framework for Node.js.
- **Mongoose:** For managing database connections and models.
- **JWT:** For secure authentication and authorization.
- **Bcrypt:** For securely storing passwords.
- **Dotenv:** For managing environment variables.

## Environment Variables

To run your backend service, you need to create a `.env`file with the following content in the backend folder:
PORT=5000
DB_URI = your MongoDB database URI
JWT_SECRET_KEY = your secret key for JWT signing

## Screenshots of the App
![Product Example](images/Nettbutikk1.png)
![Shopping Cart Example](images/Nettbutikk2.png)
