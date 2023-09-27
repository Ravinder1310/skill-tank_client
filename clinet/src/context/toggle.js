import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
const ToggleContext = createContext();

// Create the AuthProvider
export const ToggleProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <ToggleContext.Provider value={{ isLogin, toggleAuthMode }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useToggle = () => {
  return useContext(ToggleContext);
};
