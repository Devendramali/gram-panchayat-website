import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Topnav from "./pages/Topnav";
import Home from "./pages/Home";
import GrampanchayatPrashsan from "./pages/GrampanchayatPrashsan";
import AboutUs from "./pages/AboutUs";
import MahitiAdhikar from "./pages/MahitiAdhikar";
import Awards from "./pages/Awards";
import Schemes from "./pages/Schemes";
import Notices from "./pages/Notices";
import SoiSuvidha from "./pages/SoiSuvidha";
import JamaKharchPatrak from "./pages/JamaKharchPatrak";
import Contact from "./pages/Contact";
import PanchayatRajMission from "./pages/PanchayatRajMission";
import History from "./pages/History";


const App = () => {
  return (
    <>
      <div className="bg-gray-200 h-full">
        <Topnav />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/GrampanchayatPrashsan" element={<GrampanchayatPrashsan/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/mahitiadhikar" element={<MahitiAdhikar/>} />
          <Route path="/awards" element={<Awards/>} />
          <Route path="/schemes" element={<Schemes/>} />
          <Route path="/notices" element={<Notices/>} />
          <Route path="/soisuvidha" element={<SoiSuvidha/>} />
          <Route path="/jamaKharchPatrak" element={<JamaKharchPatrak/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/panchayatRajMission" element={<PanchayatRajMission/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
