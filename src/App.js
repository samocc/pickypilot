import React from 'react';
import './App.scss';
import '@aws-amplify/ui-react/styles.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import RegisterPage from "./register_wizard/RegisterPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Routes>
        </div>
    );
}

export default App;