import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { name: "मुख्यपृष्ठ", path: "/" },
    { name: "ग्रामपंचायत प्रशासन", path: "/GrampanchayatPrashsan" },
    { name: "आमच्या बद्दल", path: "/about" },
    { name: "माहिती अधिकार", path: "/mahitiadhikar" },
    { name: "पुरस्कार", path: "/awards" },
    { name: "योजना व कार्यक्रम +", path: "/schemes" },
    { name: "सूचना", path: "/notices" },
    { name: "सोई-सुविधा", path: "/soisuvidha" },
    { name: "जमा खर्च", path: "/jamaKharchPatrak" },
    { name: "यशोगाथा / नाविन्यपूर्ण उपक्रम", path: "/history" },
    {
      name: "मुख्यमंत्री समृद्ध पंचायतराज अभियान",
      path: "/panchayatRajMission",
    },
    { name: "संपर्क", path: "/contact" },
  ];

  const topMenu = menuItems.slice(0, -2);
  const bottomMenu = menuItems.slice(-2);
  return (
    <header className="bg-white lg:py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Menu */}
          <nav className="hidden lg:flex justify-center space-x-6">
            {topMenu.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-bold ${
                    isActive
                      ? "text-orange-600"
                      : "text-gray-800 hover:text-orange-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex justify-center gap-6 text-sm">
          {bottomMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="text-base font-bold hover:text-red-500"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          <SlMenu />
        </button>
        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="text-gray-800 hover:text-orange-600 text-sm"
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
