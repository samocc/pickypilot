import React from 'react';
import './App.scss';
import '@aws-amplify/ui-react/styles.css';
// import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
// // import PickyRegister from "./register_wizard/PickyRegister";
// import RegisterPage from "./register_wizard/RegisterPage";

function App() {
    return (
        <div className="App">
            {/*<nav>*/}
            {/*    <Link to="/">Home</Link>*/}
            {/*    <Link to="/register">Register</Link>*/}
            {/*</nav>*/}
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Home/>} />*/}
            {/*    <Route path="/register" element={<RegisterPage/>} />*/}
            {/*</Routes>*/}
            <Home/>
        </div>
    );
}

export default App;