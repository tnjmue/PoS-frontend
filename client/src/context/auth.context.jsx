import React, { useState, useEffect, createContext } from "react";
import API from "../utils/api";

const AuthContext = createContext();


function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  
    const storeToken = (token) => {
        localStorage.setItem('authToken', token);
    }
  
    const authenticateUser = () => {
      /* setIsLoading(true); */
      const storedToken = localStorage.getItem('authToken');

        if (storedToken) {
            return API.get("/auth/verify", { headers: { Authorization: `Bearer ${storedToken}`} } )
            .then((response) => {
                setIsLoggedIn(true);
                setIsLoading(false);
                setUser(response.data);
            })
            .catch((error) => {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
            throw error;
            });

        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null); 
        }
    }
    
    const removeToken = () => {
      localStorage.removeItem("authToken");
    }     

    const logOutUser = () => {
        removeToken();
        authenticateUser();
    }  

    useEffect(() => {
        authenticateUser();
    }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
