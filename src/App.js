import React from 'react';
import './App.scss';
import '@aws-amplify/ui-react/styles.css';
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./register_wizard/RegisterPage";
import Home from "./Home/Home";
import FlexHome from "./Home/FlexHome";
import GlobalNotifications from "./services/global-notifications/GlobalNotifications";

function App() {

    return (
        <div className="App">
            <GlobalNotifications />
            <Routes>
                <Route path="/" element={<FlexHome/>} />
                <Route path="/static" element={<Home/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Routes>
        </div>
    );
}

export default App;