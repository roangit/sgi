import { createContext, useState } from "react";

// criando contexo
export const AuthContext = createContext();

// criando provider
export const AuthContextProvider = ({children}) => {    
     const[user, setUser] = useState(null);
     const login = (email, password) => {
       console.log("login auth", {email, password});
       
       if(password === "123") {
          setUser({id: "123", email});
       }

     };
     const logout = () => {
       console.log("logout");
     };

     return(
          <AuthContext.Provider 
          value={{autenticado: !!user, user, login, logout}}
          >
          {children}
          </AuthContext.Provider>
     );
};

