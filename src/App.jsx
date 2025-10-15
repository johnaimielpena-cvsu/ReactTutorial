import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./assets/components/Sidebar.jsx";
import Tutorials from './assets/components/Tutorials.jsx'
import Home from "./assets/components/Home.jsx";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials/:id" element={<Tutorials />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
