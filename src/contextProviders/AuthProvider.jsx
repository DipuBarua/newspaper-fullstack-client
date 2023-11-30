import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.confige";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // sign up 
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log in 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update profile 
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    //google login
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // log out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
            console.log(currentUser);

            // called jwt
            if (currentUser) {
                const userEmail = { email: currentUser.email };
                axiosPublic.post("/jwt", userEmail)
                    .then(res => {
                        // console.log(res.data?.token);
                        if (res.data?.token) {
                            setLoading(false);
                            localStorage.setItem("access-jsonwebtoken", res.data?.token);
                        } else {
                            setLoading(false);
                            localStorage.removeItem("access-jsonwebtoken");
                        }
                    })
            }

        });

        return () => {
            return unsubscribe();
        };
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        signUp,
        logIn,
        updateUser,
        googleSignIn,
        logOut,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;