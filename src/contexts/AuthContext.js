import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {  Navigate } from 'react-router-dom'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [load, setLoad] = useState()
    const [err, setErr] = useState()

    function signUp(email, password) {
        setLoad(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch((err) => setErr(err.message))
            .finally(() => setLoad(false))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,
            (res) => {
                if (res) {
                    setCurrentUser(res)
                    console.log("user is logged in")
                }
                else {
                    setCurrentUser()
                    console.log("user set to null")
                }
                setErr("")
                setLoad(false)
            })

        return unsubscribe
    }, [])

    function signIn(email, password) {
        setLoad(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => console.log(res))
            .catch((err) => setErr(err.message))
            .finally(() => setLoad(false))
    }

    function logout() {
        signOut(auth)
    }

    const value = {
        currentUser,
        signUp,
        signIn,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
