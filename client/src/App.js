// import background from './202landingpage.jpeg';
import './App.css';
import React, { useState } from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from './screens/LandingPage/LandingPage';
import AirlinePage from './screens/AirlinePage/AirlinePage';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Dashboard from './screens/Dashboard/Dashboard';
const App = () => {

    /*
     * Need to add authentication check and ensure we re-direct to
     * the login page if the check fails
    */

    return (
        <Container fluid className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/airline/:airline_id" element={<AirlinePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    
                </Routes>
                <Footer />
            </BrowserRouter>
        </Container>
    )
};

export default App;
