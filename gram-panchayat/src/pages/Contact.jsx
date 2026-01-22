import Map from "../component/Map";
import SectionHeader from "../component/SectionHeader";

const Contact = () => {
  return (
    <>
    
      <div className="max-w-5xl mx-auto px-4 pb-14">
        <div className="py-10"><SectionHeader title='संपर्क साधा'/></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Info Panel */}
          <div className="relative bg-gradient-to-b from-[#001f2d] to-[#00141e] text-white rounded-2xl p-8 overflow-hidden">
            <h2 className="text-3xl font-bold mb-2">संपर्क माहिती</h2>
            <p className="text-sm text-gray-300 mb-6">
              लाईव्ह चॅट सुरू करण्यासाठी माहिती द्या!
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                📞 <span>+grampanchayatvavdi@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                ✉️ <span>grampanchayatvavdi@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                📍 <span>ग्रामपंचायत कार्यालय, पळसुन</span>
              </li>
              <li className="flex items-center gap-3">
                🗺️ <span>तालुका - नवापूर</span>
              </li>
              <li className="flex items-center gap-3">
                🌐 <span>जिल्हा - नंदुरबार</span>
              </li>
              <li className="flex items-center gap-3">
                🏷️ <span>महाराष्ट्र - 425418</span>
              </li>
            </ul>

            <div className="mt-6 text-sm flex items-center gap-2">
              ⏰{" "}
              <span>
                कार्यालयीन वेळ: सोम - शुक्र | सकाळी 10:00 ते संध्या 5:00
              </span>
            </div>

            {/* Decorative Circles */}
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full" />
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="तुमचे नाव"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="tel"
                placeholder="मोबाईल नंबर"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                rows="5"
                placeholder="तुमचा संदेश"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#001f2d] to-[#00141e] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                संदेश पाठवा
              </button>
            </form>
          </div>
        </div>
        <div>
          <Map/>
        </div>
      </div>
    </>
  );
};

export default Contact;
