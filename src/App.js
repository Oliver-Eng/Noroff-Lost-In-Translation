import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Translation from "./components/Translation";
import Profile from "./components/Profile";

function App() {
    const [state, setState] = useState("")
    const MainContext = createContext(null);

    return (
        <MainContext.Provider value={ {state, setState} }>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/translation" element={<Translation />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </MainContext.Provider>
    );
}

export default App;
