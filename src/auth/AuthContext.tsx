import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface AuthContextType {
  user: { token: string } | null;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {
    throw new Error("Out of the AuthProvider");
  },
  logout: () => {
    throw new Error("Out of the AuthProvider");
  },
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ token: string } | null>(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = localStorage.getItem("spotify_token");
    if (token) {
      setUser({ token });
    }
    setLoading(false); 
  }, []);

  const login = (token: string) => {
    localStorage.setItem("spotify_token", token);
    setUser({ token }); 
    return Promise.resolve(); 
  };

  const logout = () => {
    localStorage.removeItem("spotify_token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
