import { useEffect } from "react";
import React from "react";
import { Footer } from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Home from "./pages/home/Home";
import Documentation from "./pages/documentation/Documentation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//==============

function App() {
  useEffect(() => {
    const clearLocalStorageOnUnload = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", clearLocalStorageOnUnload);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorageOnUnload);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen ">
      <div className=" h-[120px]">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="*" element={<h1>This route does not exist</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
