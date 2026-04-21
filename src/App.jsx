import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/assets/Footer";
import Header from "./components/assets/Header";
import HomePage from "./components/pages/HomePage";
import ArchivePage from "./components/pages/ArchivePage";
import AboutPage from "./components/pages/AboutPage";
import ErrorPage from "./components/pages/ErrorPage";
import { reviewsDeFilmes } from "./components/assets/dadosReviews";
import { useState } from "react";
import ReviewPage from "./components/pages/ReviewPage";

function App() {
  const [telaAtiva, setTelaAtiva] = useState("Home");

  return (
    <div className="bg-white text-black min-h-dvh flex flex-col">
      <Header telaAtiva={telaAtiva} setTelaAtiva={setTelaAtiva} />

      <Routes>
        <Route path="/" element={<HomePage reviews={reviewsDeFilmes} setTelaAtiva={setTelaAtiva} />} />
        <Route path="/archive" element={<ArchivePage reviews={reviewsDeFilmes} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/review/:id" element={<ReviewPage reviews={reviewsDeFilmes} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
