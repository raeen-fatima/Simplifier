import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing necessary components from React Router
import HomePage from "./Pages/HomePage";
import FeaturePage from "./Pages/FeaturePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
