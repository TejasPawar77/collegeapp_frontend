import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvier = ({children}) =>{
    const [authtoken, setauthToken] = useState(localStorage.getItem("authToken"));
    const [refreshtoken, setrefreshToken] = useState(localStorage.getItem("refreshToken"));

    const storeTokenInLS = (name,serverToken) =>{
        return localStorage.setItem(name,serverToken);
    }

    let isLoggedIn = (!!authtoken && !!refreshtoken);
    // console.log(isLoggedIn);

    // Logout Logic
     const LogoutUser = () => {
      setauthToken("");
      setrefreshToken("");
      
      const remove = [localStorage.removeItem("authToken"),localStorage.removeItem("refreshToken")];
      return  remove;
    }

return(<AuthContext.Provider value={{isLoggedIn, LogoutUser,storeTokenInLS}}>
    {children}
</AuthContext.Provider>
)}

export const useAuth = () =>{
    return useContext(AuthContext);
}