/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
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

    const login = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        Navigate(`/${user.role}-dashboard`);
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        Navigate('/login');
    };
    const authInfo = {
        user,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
