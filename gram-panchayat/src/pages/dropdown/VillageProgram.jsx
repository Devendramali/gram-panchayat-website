import { useState } from "react";
import SectionHeader from "../../component/SectionHeader";

const VillageProgram = () => {
  const galleryData = [
    {
      id: 1,
      img: "https://thumbs.dreamstime.com/b/indian-village-people-watching-hyderabad-india-indian-village-people-watching-th-aug-hyderabad-india-397312246.jpg",
      date: "02 Nov 2025",
      title: "एक पेड मां के नाम कार्यक्रम. एक व्यक्ती एक झाड.",
      desc: "ग्राम पंचायत वावडी येथे एक व्यक्ती एक झाड लावण्यात आले. त्यावेळी सरपंच उपसरपंच सदस्य माजीसरपंच माजी उपसपंच आणि महिला सहभाग मोठ्या प्रमाणात होता.",
    },
    {
      id: 2,
      img: "https://thumbs.dreamstime.com/b/indian-village-people-watching-hyderabad-india-indian-village-people-watching-th-aug-hyderabad-india-397312246.jpg",
      date: "02 Nov 2025",
      title: "फॉर्मर producer कंपनी स्थापना करणे",
      desc: "ग्राम पंचायत वावडी येथे सर्व प्रतिष्ठित शेतकऱ्यांशी चर्चा करून फॉर्मर producer कंपनी कमिटी स्थापना करण्यात आली.",
    },
    {
      id: 3,
      img: "https://thumbs.dreamstime.com/b/indian-village-people-watching-hyderabad-india-indian-village-people-watching-th-aug-hyderabad-india-397312246.jpg",
      date: "01 Nov 2025",
      title: "कर वसुली उपक्रम",
      desc: "ग्राम पंचायत वावडी येथे सुशासन युक्त पंचायत मधील घटक घरपट्टी पाणीपट्टी वसुली उपक्रम.",
    },
    {
      id: 4,
      img: "https://thumbs.dreamstime.com/b/indian-village-people-watching-hyderabad-india-indian-village-people-watching-th-aug-hyderabad-india-397312246.jpg",
      date: "31 Oct 2025",
      title: "बाल सभा",
      desc: "ग्राम पंचायत वावडी येथे आज बाल सभा घेण्यात आली व मुलांना बिस्कीट पुडे वाटप करण्यात आले.",
    },
    {
      id: 5,
      img: "https://thumbs.dreamstime.com/b/indian-village-people-watching-hyderabad-india-indian-village-people-watching-th-aug-hyderabad-india-397312246.jpg",
      date: "31 Oct 2025",
      title: "वॉर्ड सभा क्रमांक एक",
      desc: "ग्राम पंचायत वावडी येथे वॉर्ड सभा क्रमांक एक घेण्यात आली.",
    },
    {
      id: 6,
      img: "https://thumbs.dreamstime.com/b/indian-village-people-watching-hyderabad-india-indian-village-people-watching-th-aug-hyderabad-india-397312246.jpg",
      date: "30 Oct 2025",
      title: "वॉर्ड सभा क्रमांक 2",
      desc: "ग्राम पंचायत वावडी येथे वॉर्ड सभा क्रमांक 2 घेण्यात आली.",
    },
  ];
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = galleryData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );
  return (
    <>
      <div className="mt-10">
        <SectionHeader title="गावातील कार्यक्रम" />
        <p className="text-[12px] text-center mt-2">
          ग्रामपंचायतीद्वारे आयोजित सामुदायिक बैठकांचे, उत्सव आणि उपक्रमांबद्दल
          अपडेट राहा.
        </p>
      </div>
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="
    bg-white rounded-xl shadow 
    hover:shadow-xl 
    transition-all duration-300 ease-in-out
    hover:-translate-y-2
    overflow-hidden
  "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  <span className="text-orange-500 text-[12px] font-medium">
                    {item.date}
                  </span>
                  <h3 className="font-bold text-gray-800 mt-1 text-[12px]">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`px-4 text-sm py-2 border rounded-md ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-50"
              }`}
            >
              मागे
            </button>

            <span className="text-sm text-gray-700">
              पान {currentPage} पैकी {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`px-4 text-sm py-2 border rounded-md ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-50"
              }`}
            >
              पुढील
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VillageProgram;
