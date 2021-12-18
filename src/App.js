import React from 'react';
import './App.scss';
import '@aws-amplify/ui-react/styles.css';
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./register_wizard/RegisterPage";
import Home from "./Home/Home";
import FlexHome from "./Home/FlexHome";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/flex" element={<FlexHome/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Routes>
        </div>
    );
}

export default App;