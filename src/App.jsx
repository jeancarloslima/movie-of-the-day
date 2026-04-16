import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/assets/Footer";
import Header from "./components/assets/Header";
import HomePage from "./components/pages/HomePage";
import ArchivePage from "./components/pages/ArchivePage";
import AboutPage from "./components/pages/AboutPage";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
