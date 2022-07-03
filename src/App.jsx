/** @format */
import { DonarProfile } from "./pages/DonarProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "smooth-scroll";
import { DonarSignIn } from "./components/DonarSignIn";
import { DonarSignUp } from "./components/DonarSignUp";
import { HospitalSignIn } from "./components/HospitalSignIn"
import { HospitalSignUp } from "./components/HospitalSignUp"
import { Home } from "./pages/Home";
import { Navigation } from "./components/navigation";
import { HospitalData } from "./pages/HospitalData";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="DonarSignIn" element={<DonarSignIn />} />
          <Route path="DonarSignUp" element={<DonarSignUp />} />
          <Route path="HospitalSignIn" element={<HospitalSignIn />} />
          <Route path="HospitalSignUp" element={<HospitalSignUp />} />
          <Route path="/donarProfile" element={<DonarProfile />} />
          <Route path="/hospitalData" element={<HospitalData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
