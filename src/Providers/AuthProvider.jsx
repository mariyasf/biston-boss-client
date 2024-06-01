import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";

import {
    createContext,
    useEffect,
    useState
} from "react";

import {
    GithubAuthProvider,
    GoogleAuthProvider
} from "firebase/auth/cordova";
import app from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loding, setLoding] = useState(true);

    // New User add
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Use Google login
    const handleGoogleSignIn = () => {
        // console.log("Google login")
        return signInWithPopup(auth, googleProvider)
    }

    // Use Github Login
    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }


    // Logout
    const logOut = () => {
        setLoding(true);
        return signOut(auth);
    }

    // Update Profile
    const updateUserProfile = (name, image, phoneNumber) => {
        setLoding(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
            phoneNumber: phoneNumber
        })

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User', currentUser);
            setLoding(false)
        })
        return () => {
            return unsubscribe;
        }
    }, []);

    const authInfo = {
        user,
        loding,
        createNewUser,
        signIn,
        logOut,
        updateUserProfile,
        handleGoogleSignIn,
        handleGithubSignIn

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;