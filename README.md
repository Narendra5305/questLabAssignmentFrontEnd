React Frontend for User Management System
=========================================

📁 Project Structure:
---------------------
This is a React-based frontend for managing users. It allows adding users through a modal form and displays them after fetching from a backend API.

📌 Features:
-----------
- Add new users via a modal popup form.
- Client-side form validation before submission.
- Sends user data to the backend API.
- Fetches and displays the list of users.
- State management using useState, useReducer, and useContext.

🔧 Technologies Used:
---------------------
- React
- Axios
- useReducer, useContext, useEffect
- CSS for styling


🚀 How to Run:
--------------
1. Clone the repository.
2. Navigate into the frontend directory.
3. Install dependencies:
   > npm install
4. Start the development server:
   > npm start



🌐 API Endpoint:
----------------
The frontend communicates with the backend via:

> https://questlabassign.onrender.com/users

This endpoint is used for:
- GET: Fetching all users
- POST: Adding a new user



🧩 Folder Overview:
-------------------
- `src/components/UserModel.jsx` - Modal form to add user.
- `src/context/UserContext.jsx` - Context API to manage user state and API integration.
- `src/component/userModal.css` - CSS styles for the modal form.



