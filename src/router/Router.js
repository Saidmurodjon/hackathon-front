import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Notfound from "../components/error/Notfound";
import Navbar from "../components/navbar/Navbar";
import Home from "../view/home/Home";

function Routerd() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}
export default Routerd;
