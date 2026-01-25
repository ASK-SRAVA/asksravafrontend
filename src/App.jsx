import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import SearchResults from "./pages/searchResults/searchResults";
import Feedbacks from "./pages/Feedbacks";
import { usePageTitle } from "./utils/usePageTitles";
import AboutUs from "./pages/aboutUs";

const AppContent = () => {
  usePageTitle();
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults/>} />
        <Route path="/about" element= {<AboutUs/>} />
        <Route path="/feedbacks" element={<Feedbacks/>} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
