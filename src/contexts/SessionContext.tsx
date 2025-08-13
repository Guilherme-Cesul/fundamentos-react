import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "@/services/apiClient";

const CESUL_USER = "cesul.user";
const CESUL_TOKEN = "cesul.token";
const CESUL_REFRESHTOKEN = "cesul.refreshToken";

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

type Credentials = {
  email: string;
  password: string;
};

type SessionContextData = {
  user: User | null;
  updateUser: (user: User) => void;
  signIn: (credentials: Credentials) => Promise<void>;
  signOut: () => void;
};

const SessionContext = createContext({} as SessionContextData);

export function signOut() {
  destroyCookie(null, CESUL_USER, { path: "/" });
  destroyCookie(null, CESUL_TOKEN, { path: "/" });
  destroyCookie(null, CESUL_REFRESHTOKEN, { path: "/" });
}

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  function createCookie(name: string, value: string) {
    setCookie(null, name, value, {
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
    });
  }

  function updateUser(newUser: User) {
    setUser(newUser);
    createCookie(CESUL_USER, JSON.stringify(newUser));
  }

  async function signIn({ email, password }: Credentials) {
    const response = await api.post("sessions", { email, password });
    const { token, refreshToken, permissions, roles } = response.data;

    const newUser: User = { email, permissions, roles };

    createCookie(CESUL_USER, JSON.stringify(newUser));
    createCookie(CESUL_TOKEN, token);
    createCookie(CESUL_REFRESHTOKEN, refreshToken);

    setUser(newUser);
  }

  return (
    <SessionContext.Provider value={{ user, updateUser, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
