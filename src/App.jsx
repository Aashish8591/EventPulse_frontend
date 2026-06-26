import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Feedback from "./pages/Feedback";
import ViewFeedback from "./pages/ViewFeedback";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-[#050816] text-white flex flex-col">

        <Navbar />

        <main className="flex-1">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/events" element={<Events />} />

            <Route path="/feedback" element={<Feedback />} />

            <Route path="/view-feedback" element={<ViewFeedback />} />

            <Route path="*" element={<NotFound />} />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;