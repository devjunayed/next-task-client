import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProviders = ({children}) => {
    const auth = getAuth(app);
    const googleAuthProvider = new GoogleAuthProvider();

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [auth]);
    console.log(user);
    const values = {
        auth,
        loading,
        user,
        createUser,
        updateUserProfile,
        emailSignIn,
        googleSignIn,
        logOut
    }
    return <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
};

AuthProviders.propTypes = {
    children: PropTypes.node
}
export default AuthProviders;