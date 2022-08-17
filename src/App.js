import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainContext from "./context/MainContext";

import Home from "./components/Home";
import Translation from "./components/Translation";
import Profile from "./components/Profile";

function App() {
    const [state, setState] = useState(1)

    return (
      <>
        <MainContext.Provider value={ {state, setState} }>          
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="translation" element={<Translation />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
          </div>
        </MainContext.Provider>
      </>
        
    );
}

export default App;
