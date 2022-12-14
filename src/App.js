import {Route,Routes} from "react-router-dom"

import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<DetailPage />} />
    </Routes>
  );
}

export default App;
