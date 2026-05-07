import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mocks from "./pages/Mocks";
import MockTest from "./pages/MockTest";
import Analysis from "./pages/Analysis";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mocks" element={<Mocks />} />
          <Route path="/mocks/:id" element={<MockTest />} />
          <Route path="/analysis/:attemptId" element={<Analysis />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
    </div>
  );
}
