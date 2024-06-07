
# User Management System

This is a user management system that allows users to create an account, log in, and edit their profile. The backend is built with Node.js and MongoDB, while the frontend is built with React and styled to be responsive.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)


## Features

- User registration
- User login
- Edit user profile
- JWT-based authentication
- Responsive design

## Installation

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Aditya-1663/login_backend.git
   cd your-repo-name
    ```
      OR use hosted backend:
      https://login-backend-zjog.onrender.com


2. Install dependencies:

    ```bash
    npm install
    ```



3. Start the backend server:

    ```bash
    node ./index.js
    ```

### Frontend Setup


1. Clone the repository:

    ```bash
    git clone https://github.com/Aditya-1663/login_frontend.git
    cd your-repo-name
    ```


2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## API Endpoints

### Authentication

- **POST** `/api/auth/createuser`
  - Creates a new user.
  - Request body:
    ```json
    {
      "name": "username",
      "email": "useremail@gmail.com",
      "password": "yourpassword",
      "mobilenumber": "1234567890",
      "gender": "male",
      "country": "Country",
      "state": "State",
      "city": "City",
      "pincode": "123456",
      "address": "123 Street Name"
    }
    ```

- **POST** `/api/auth/login`
  - Authenticates a user and returns a JWT token.
  - Request body:
    ```json
    {
      "email": "johndoe@example.com",
      "password": "yourpassword"
    }
    ```

- **POST** `/api/auth/updateprofile`
  - Updates the user's profile.
  - Requires authentication token in headers.
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "mobilenumber": "1234567890",
      "gender": "male",
      "country": "Country",
      "state": "State",
      "city": "City",
      "pincode": "123456",
      "address": "123 Street Name"
    }
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new user by clicking on the "Sign Up" link.
3. Log in with the registered user credentials.
4. Edit the user profile by navigating to the "Profile" section.
