# Spy-Buy-Frontend

This repository contains the frontend code for the Spy-Buy e-commerce platform, built using React.js. 

Backend for this project : https://github.com/Shivang-X/Spy-Buy-Backend 

## Features

- User authentication using JWT
- Product catalog with filtering and sorting
- Responsive design for both mobile and desktop
- Integration with Stripe for secure payments
- Image upload functionality using Cloudinary

## Technology Stack

- **React.js**
- **React Router** for navigation
- **Redux** for state management
- **Axios** for API requests
- **Tailwind CSS** for styling

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Shivang-X/Spy-Buy-Frontend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Spy-Buy-Frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file with the following variables:

    ```bash
    REACT_APP_API_URL=<Backend API URL>
    REACT_APP_STRIPE_PUBLIC_KEY=<Your Stripe Public Key>
    REACT_APP_CLOUDINARY_URL=<Your Cloudinary URL>
    ```

## Running the Application

To start the development server:

```bash
npm start
```

The application will run at http://localhost:3000.

## Contributing

Feel free to fork the repository and submit pull requests.
