import React, {useState, useEffect, createContext} from 'react'
import fireBaseConfig from '../firebase/firebase'

import firebase from "firebase/app"

import Spinner from '../components/spinner/spinner'

interface INTFAuthProvider{
    user: firebase.User | null;
    loading: Boolean;
    children: React.ReactNode;
}

export const AuthContext = createContext<Partial<INTFAuthProvider>>({});

export const AuthProvider : React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fireBaseConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Spinner/>;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};