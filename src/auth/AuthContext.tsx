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
    throw new Error("Fora do AuthProvider");
  },
  logout: () => {
    throw new Error("Fora do AuthProvider");
  },
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ token: string } | null>(null);
  const [loading, setLoading] = useState(true); // Novo estado

  useEffect(() => {
    const token = localStorage.getItem("spotify_token");
    if (token) {
      setUser({ token });
    }
    setLoading(false); // Finaliza o carregamento
  }, []);

  const login = (token: string) => {
    localStorage.setItem("spotify_token", token);
    setUser({ token }); // Garanta que o estado é atualizado
    return Promise.resolve(); // Retorne uma Promise
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
