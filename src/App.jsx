import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/assets/Footer";
import Header from "./components/assets/Header";
import HomePage from "./components/pages/HomePage";
import ArchivePage from "./components/pages/ArchivePage";
import AboutPage from "./components/pages/AboutPage";
import ErrorPage from "./components/pages/ErrorPage";
import { reviewsDeFilmes } from "./components/assets/dadosReviews";

function App() {
  return (
    <div className="bg-white text-black min-h-dvh flex flex-col">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage reviews={reviewsDeFilmes} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
