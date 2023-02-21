import { createContext, ReactNode, useState } from "react";

type userType = {
  user: string | null;
  setUser: (value: string) => void;
};

const initialState: userType = {
  user: "agata",
  setUser: () => {},
};

export const AuthContext = createContext<userType>(initialState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("agata");
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
