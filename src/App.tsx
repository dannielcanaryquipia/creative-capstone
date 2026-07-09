import { Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/layout/NavBar";
import Footer from "./components/shared/layout/Footer";
import ScrollProgress from "./components/shared/layout/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Resources from "./pages/Resources";
import Documentation from "./pages/Documentation";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </main>
      <Footer />
      <ScrollProgress />
    </>
  );
}
