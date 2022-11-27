import './App.css';
import React, { useState } from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from './screens/LandingPage/LandingPage';
import AirlinePage from './screens/AirlinePage/AirlinePage';
import AirportPage from './screens/AirportPage/AirportPage.js';
import BaggageAssignment from './screens/AirportPage/BaggageAssignment';
import GateMaintenance from './screens/AirportPage/GateMaintenance';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Dashboard from './screens/Dashboard/Dashboard';


const App = () => {


    return (
        <Container fluid className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/airline/:username" element={<AirlinePage />} />
                    <Route path="/airport" element={<AirportPage />} />
                    <Route path="/airport/gate" element={<GateMaintenance /> } />
                    <Route path="/airport/baggage" element={<BaggageAssignment />} />
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
