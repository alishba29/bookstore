import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Home />
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
