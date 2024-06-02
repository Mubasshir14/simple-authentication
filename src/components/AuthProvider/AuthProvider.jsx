import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { createContext, useEffect, useState } from "react";


export const AUthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    // handle register with email and pass word
    const registerUser = (email, password) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
        // .then(result => console.log(result.user))
        // .catch(error => console.log(error.message))
    }
    // google login
    const googleLogin = () => {
      return signInWithPopup(auth, googleProvider)
    }
    // facebook login
    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider) 
    }
    // handle login
    const logInUserUser = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
        // .then(result => console.log(result.user))
        // .catch(error => console.log(error.message))
    }
    // logout
    const logout = () => {
        return signOut(auth)
    }
    const authInfo = {
        registerUser,
        logInUserUser,
        user,
        setUser,
        googleLogin,
        facebookLogin,
        logout
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
          } 
          else{
            setUser(null)
          }
        });
    
        // Clean up the subscription on component unmount
        return () => {
            unsubscribe();
        }
      }, []);

    return (
        <div>
            <AUthContext.Provider value={authInfo} >
                {children}
            </AUthContext.Provider>
        </div>
    );
};

export default AuthProvider;