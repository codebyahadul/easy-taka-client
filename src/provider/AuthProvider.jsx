/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        if (savedUser) {
            setUser(savedUser);
        }
    }, []);
    const register = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    }
    const login = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        toast.success('Logout success')
        Navigate('/login');
    };
    const authInfo = {
        user,
        login,
        logout,
        register
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
