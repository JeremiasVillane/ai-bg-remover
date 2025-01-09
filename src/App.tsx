import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppPage, LandingPage } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </Router>
  );
}

export default App;
