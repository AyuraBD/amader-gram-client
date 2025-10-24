import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Auth from '../Firebase/firebase.config';
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password)
  }
  const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  }
  const logOut = () =>{
    setLoading(true);
    return signOut(Auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(Auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
      if(currentUser?.email){
        axiosPublic.post('/jwt', {email: currentUser?.email}, {withCredentials: true})
        .then(res => {
          console.log(res.data);
          setLoading(false);
        })
      }else{
        axiosPublic.post('/logout', {}, {withCredentials: true})
        .then(res =>{
          console.log('Logout', res.data);
          setLoading(false);
        })
      }
    })
    return () =>{
      unsubscribe();
    }
  },[])


  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
    loading,
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders