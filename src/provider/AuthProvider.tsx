import { createContext, ReactNode, useState } from "react";

type userType = {
  user: string | null;
  setUser: (value: string) => void;
};

const initialState: userType = {
  user: "",
  setUser: () => {},
};

export const AuthContext = createContext<userType>(initialState);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
