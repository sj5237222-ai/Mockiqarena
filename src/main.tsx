import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Mocks from "./pages/Mocks";

import { AuthProvider } from "./context/Auth";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/mocks" element={<Mocks />} />
        </Routes>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
