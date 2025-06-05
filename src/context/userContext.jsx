import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

     const baseApi = "https://questlabassign.onrender.com/users";


    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const response = await axios.get(baseApi);
            setUserData(response.data.UserData);
        } catch (error) {
            console.error("Error on fetching users", error);
        }
        };

        fetchUsers();
    }, []);


    const addUser = async (newUser) => {
        console.log("Sending user data:", newUser);

        try {
            const response = await axios.post(baseApi, newUser, {
                headers: {
                "Content-Type": "application/json",
                },
            });

        setUserData((prev) => [...prev, response.data]);
        } catch (error) {
            console.error("Error on adding user", error);
        }
    };

    
  
  
  return (
    <UserContext.Provider value={{ userData, addUser}}>
      {children}
    </UserContext.Provider>
  );
};