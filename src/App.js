import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import { AuthProvider } from './components/AuthContex';
import AnimatedRoutes from './components/AnimatedRoutes'
import { UserDataContext } from './components/UserDataContext';


function App() {

    return (
        <AuthProvider>
            <UserDataContext>
                <Router>
                    <AnimatedRoutes />
                </Router>
            </UserDataContext>
        </AuthProvider>
    )
}

export default App;