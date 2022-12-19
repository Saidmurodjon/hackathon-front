import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Notfound from "../components/error/Notfound";
import Navbar from "../components/navbar/Navbar";
import Admin from "../view/admin/Admin";
import Doctor from "../view/doctor/Doctor";
import Home from "../view/home/Home";
import Login from "../view/login/Login";

function Routerd() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="top-[20px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/admin" element={<Admin />} />

            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default Routerd;
