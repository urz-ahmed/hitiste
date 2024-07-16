* * *

hitiste
========

hitiste is a community engaged social media platform designed to connect people and foster interactions. Users can sign up, log in, create profiles, and share posts with their network.

Table of Contents
-----------------

*   [Features](#features)
*   [Installation](#installation)
*   [Usage](#usage)
*   [Authentication](#authentication)
*   [Dependencies](#dependencies)
*   [Contributing](#contributing)

Features
--------

*   **User Authentication**: Sign-up and sign-in functionalities.
*   **Profile Management**: Users can create and update their profiles.
*   **Post Creation**: Users can create, view, and manage their posts.
*   **Infinite Scroll**: Efficiently load more posts as the user scrolls.

Installation
------------

1.  **Clone the repository**:
    
    Copy code
    
    `git clone https://github.com/urz-ahmed/hitiste.git cd hitiste`
    
2.  **Install dependencies**:
    
    sh
    
    Copy code
    
    `npm install`
    
3.  **Set up environment variables**:
    
    Create a `.env` file in the root directory and add the following variables:
    
    Copy code
    
    ```NEXT_PUBLIC_APPWRITE_URL=
    NEXT_PUBLIC_APPWRITE_PROJECT_ID=
    NEXT_PUBLIC_APPWRITE_DATABASEID=
    NEXT_PUBLIC_APPWRITE_STORAGEID=
    NEXT_PUBLIC_APPWRITE_POSTCOLLECTION=
    NEXT_PUBLIC_APPWRITE_USERCOLLECTION=
    NEXT_PUBLIC_APPWRITE_SAVESCOLLECTION=
    
4.  **Run the app**:
    
    `npm start`
    

Usage
-----

### Sign-Up

To sign up, navigate to the sign-up page and fill in the required details. Once registered, you will be redirected to the sign-in page.

### Sign-In

To sign in, navigate to the sign-in page, enter your email and password, and submit the form. Upon successful authentication, you will be redirected to the homepage.

### Creating Posts

After signing in, you can create new posts by clicking on the "New Post" button and filling in the necessary details.

Authentication
--------------

### Context and Hooks

hitiste uses React Context and Hooks to manage authentication states. Below is a brief explanation of how it works:

*   **AuthProvider.tsx**: This file defines the `AuthProvider` component, which wraps around the application to provide authentication context.
*   **useUserContext.ts**: Custom hook to access the authentication context.
*   **signin.tsx**: Component for handling user sign-in.
*   **signup.tsx**: Component for handling user sign-up.



Dependencies
------------

*   **Nextjs**: A JavaScript library for building user interfaces.
*   **Next Router**: Structured latest app router with latest nextjs version.
*   **React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.
*   **Zod**: A TypeScript-first schema declaration and validation library.
*   **Appwrite**: Open-source backend as a service.

Contributing
------------

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1.  Fork the repository.
2.  Create a feature branch.
3.  Commit your changes.
4.  Push your changes to your feature branch.
5.  Create a pull request.
