import React from 'react';
import './App.scss';
import '@aws-amplify/ui-react/styles.css';
import { Routes, Route } from "react-router-dom";
import UserRegistryForm from "./user_registry/UserRegistryForm";
import Home from "./Home/Home";

function App() {
    return (
        <div className="App">
            {/*<nav>*/}
            {/*    <Link to="/">Home</Link>*/}
            {/*    <Link to="/register">Register</Link>*/}
            {/*</nav>*/}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<UserRegistryForm/>} />
            </Routes>
        </div>
    );
}

export default App;