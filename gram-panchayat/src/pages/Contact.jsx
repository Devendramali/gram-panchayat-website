import { useState } from "react";
import Map from "../component/Map";
import SectionHeader from "../component/SectionHeader";
import API from "../api/api";

const Contact = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const trimmedName = name.trim();
  const trimmedPhone = phone.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || trimmedName.length < 3) {
    alert("नाव किमान 3 अक्षरे असावे!");
    return;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(trimmedPhone)) {
    alert("वैध मोबाईल नंबर टाका!");
    return;
  }

  if (!trimmedMessage || trimmedMessage.length < 5) {
    alert("संदेश किमान 5 अक्षरे असावा!");
    return;
  }

  try {
    const res = await API.post("/contacts", {
      name: trimmedName,
      phone: trimmedPhone,
      message: trimmedMessage
    });

    console.log("Form submitted:", res.data);
    alert("संदेश यशस्वीरित्या पाठवला!");
    setName("");
    setPhone("");
    setMessage("");
  } catch (err) {
    console.error("Contact form error:", err.response || err);
    alert("संदेश पाठवता आला नाही!");
  }
};



  return (
    <>
      <div className="max-w-5xl mx-auto px-4 pb-14">
        <div className="py-10">
          <SectionHeader title="संपर्क साधा" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT PANEL */}
          <div className="relative bg-gradient-to-b from-[#001f2d] to-[#00141e] text-white rounded-2xl p-8 overflow-hidden">
            <h2 className="text-3xl font-bold mb-2">संपर्क माहिती</h2>
            <p className="text-sm text-gray-300 mb-6">
              लाईव्ह चॅट सुरू करण्यासाठी माहिती द्या!
            </p>

            <ul className="space-y-4 text-sm">
              <li>📞 +91 9876543210</li>
              <li>✉️ grampanchayatvavdi@gmail.com</li>
              <li>📍 ग्रामपंचायत कार्यालय, पळसुन</li>
              <li>🗺️ तालुका - नवापूर</li>
              <li>🌐 जिल्हा - नंदुरबार</li>
              <li>🏷️ महाराष्ट्र - 425418</li>
            </ul>

            <div className="mt-6 text-sm">
              ⏰ कार्यालयीन वेळ: सोम - शुक्र | सकाळी 10:00 ते संध्या 5:00
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">

            <form className="space-y-5" onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="तुमचे नाव"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="tel"
                placeholder="मोबाईल नंबर"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                rows="5"
                placeholder="तुमचा संदेश"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#001f2d] to-[#00141e] text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                संदेश पाठवा
              </button>

            </form>
          </div>

        </div>

        <div className="mt-10">
          <Map />
        </div>

      </div>
    </>
  );
};

export default Contact;
