import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route vers la page d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Route vers la page a propos */}
        <Route path="/a-propos" element={<About />} />
        {/* Route vers une fiche de location précise */}
        <Route path="/location/:id" element={<Location />} />
        {/* Route vers la page erreur 404 */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
