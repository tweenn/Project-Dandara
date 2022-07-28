import { BrowserRouter as Router } from 'react-router-dom';
import React from "react";
import { AuthProvider } from './components/BackgrondTasks/AuthContex';
import AnimatedRoutes from './components/BackgrondTasks/AnimatedRoutes'
import { UserDataContext } from './components/BackgrondTasks/UserDataContext';
import { Helmet } from "react-helmet";


function App() {

    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Helmet>
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