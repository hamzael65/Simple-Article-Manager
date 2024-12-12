import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Articles from "./components/Articles"; 
import AddArticle from "./components/AddArticle";
import UpdateArticle from "./components/UpdateArticle"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/add-article" element={<AddArticle />} />
          <Route path="/update-article/:id" element={<UpdateArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
