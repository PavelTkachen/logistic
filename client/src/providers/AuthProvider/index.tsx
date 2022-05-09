import React, { createContext, useState } from "react"
import { AuthContextInterface } from "./types";
import { User } from "common/entities";

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const [userState, setUserState] = useState<User | null>(null);
  const [isLoading, setIsLoadingState] = useState<boolean>(false);

  const signIn = async (login: string, callback: () => void) => {
    setUserState({login});
    callback();
  };
  const signOut = async () => {
    setUserState(null);
  };
  const value: AuthContextInterface = {
    user: userState,
    signIn,
    signOut,
    isLoading,
  }
  return (
    <AuthContext.Provider value={value} >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return React.useContext(AuthContext);
}