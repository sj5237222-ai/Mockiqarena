import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Mocks from "./pages/Mocks";

export default function App() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "20px", color: "yellow" }}>
          Home
        </Link>

        <Link to="/mocks" style={{ color: "yellow" }}>
          Mocks
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mocks" element={<Mocks />} />
      </Routes>
    </div>
  );
}
