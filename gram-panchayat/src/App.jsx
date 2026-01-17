import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topnav from "./components/Topnav";
import Home from "./components/Home";
import GrampanchayatPrashsan from "./components/GrampanchayatPrashsan";
import AboutUs from "./components/AboutUs";
import MahitiAdhikar from "./components/MahitiAdhikar";
import Awards from "./components/Awards";
import Schemes from "./components/Schemes";
import Notices from "./components/Notices";
import SoiSuvidha from "./components/SoiSuvidha";
import JamaKharchPatrak from "./components/JamaKharchPatrak";
import Contact from "./components/Contact";
import PanchayatRajMission from "./components/PanchayatRajMission";
import History from "./components/History";


const App = () => {
  return (
    <>
      <div className="bg-gray-300 h-full">
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
