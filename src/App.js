import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import { AuthProvider } from './components/BackgrondTasks/AuthContex';
import AnimatedRoutes from './components/BackgrondTasks/AnimatedRoutes'
import { UserDataContext } from './components/BackgrondTasks/UserDataContext';


function App() {

    return (
        <>
            <AuthProvider>
                <UserDataContext>
                    <Router>
                        <AnimatedRoutes />
                    </Router>
                </UserDataContext>
            </AuthProvider>
        </>
    )
}

export default App;