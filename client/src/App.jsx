import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Feedback from "./pages/Feedback";
import FeedbackList from "./pages/FeedbackList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedback-list" element={<FeedbackList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;