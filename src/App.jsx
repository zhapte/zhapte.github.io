import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import HaulerPage from "./pages/HaulerPage";
import ConfidentialProjectPage from "./pages/ConfidentialProjectPage";
import GoodBooksPage from "./pages/GoodBooksPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/projects/hauler"
          element={<HaulerPage />}
        />

        <Route
          path="/projects/confidential"
          element={<ConfidentialProjectPage />}
        />

        <Route
          path="/projects/goodbooks"
          element={<GoodBooksPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;