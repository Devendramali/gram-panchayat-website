import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
const Topnav = () => {
  return (
    <>
      <div className="bg-gray-300 h-15 py-2 px-10 flex justify-between">
        <div className="flex items-center justify-center">
          <img src='/clean_logo.webp' className="size-15" alt="" />
          <img src='/Logo2.png' alt="" />
          <span className="text-xl font-bold">
            Government of Maharashtra | महाराष्ट्र शासन
          </span>
        </div>
        <div className="flex items-center gap-4 text-base">
          <span className="flex items-center gap-2">
            <FaPhone /> 9765394546
          </span>
          <span className="flex items-center gap-2">
            <IoMail /> grampanchayatwavdi@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <MdLocationOn /> PIN: 425418
          </span>

          <div className="bg-orange-500 text-white size-8 flex justify-center items-center rounded-full">
            <NavLink to="/login">
              <RiLoginCircleLine className="text-white" />
            </NavLink>
          </div>
          <div className="bg-blue-500 text-sm text-white size-8 flex justify-center items-center rounded-full">
            Eng
          </div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
