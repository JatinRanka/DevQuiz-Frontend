import { createContext, useContext, useState, ReactNode } from "react";

export type UserContextType = {
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
};

const UserContext = createContext<UserContextType>({
  isUserLoggedIn: false,
  setIsUserLoggedIn: (isUserLoggedIn: boolean) => {},
});

export const useUsercontext = () => useContext(UserContext);

const checkIsUserLoggedIn = (): boolean => {
  return Boolean(localStorage.getItem("Authorization"));
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(checkIsUserLoggedIn());

  return (
    <UserContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
