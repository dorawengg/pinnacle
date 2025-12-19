import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Home from "./Home";
import Consulting from "./Consulting";
import Tutoring from "./Tutoring";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Page wrapper: full viewport height, vertical layout */}
      <div className="min-h-screen flex flex-col">
        {/* Header / Nav */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden">
          <MobileNav />
        </div>

        {/* Main content grows to fill remaining height */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Consulting" element={<Consulting />} />
            <Route path="/Tutoring" element={<Tutoring />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer stays at bottom when content is short */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
