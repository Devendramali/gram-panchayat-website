import SectionHeader from "../../component/SectionHeader";

const GovSchemes = () => {
  const schemes = [
  { id: 1, icon: "🚰", title: "जलजीवन मिशन योजना", desc: "प्रत्येक ग्रामीण घरात नळाने स्वच्छ पाण्याचा पुरवठा." },
  { id: 2, icon: "🏕️", title: "शबरी आवास योजना", desc: "अनुसूचित जमातीसाठी घर बांधणीसाठी सहाय्य." },
  { id: 3, icon: "🏠", title: "रमाई आवास योजना", desc: "दुर्बल घटकांसाठी निवास सुविधा." },
  { id: 4, icon: "👩‍🦰", title: "लाडकी बहीण योजना", desc: "महिलांच्या सक्षमीकरणासाठी आर्थिक सहाय्य." },
];
  return (
    <>
      <div className=" bg-white">
        <section className="relative w-full bg-[#FFF1E6] overflow-hidden">
          {/* Left Circle */}
          <div className="absolute -left-32 top-1/2 -translate-y-1/2  w-72 h-72 bg-[#FFE1CC] rounded-full hidden md:block"></div>

          {/* Right Circle */}
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFE1CC] rounded-full hidden md:block"></div>

          {/* Content */}
          <div className="relative max-w-5xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
              <SectionHeader title="शासकीय योजना" />
            </h1>

            <p className="inline-block bg-[#FFD7BE] px-4 py-2 text-sm md:text-base text-gray-800 rounded">
              विविध विकास योजनांच्या माध्यमातून आमच्या समुदायाला सक्षम बनवणे आणि
              प्रत्येक नागरिकाला सरकारी योजनांचा लाभ मिळवून देणे
            </p>
          </div>
        </section>
        <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((item) => (
            <div
              key={item.id}
              className={`${item.id === 4 ? "lg:col-span-3 flex justify-center" : ""}`}
            >
              <div className="w-full border-none max-w-sm bg-white rounded-2xl shadow-zinc-400 shadow-lg border p-8 text-center hover:shadow-xl transition">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 text-3xl text-white mb-4">
                  {item.icon}
                </div>

                <h3 className="text-sm font-bold mb-2">{item.title}</h3>
                <p className="text-[12px] text-gray-600 mb-3">{item.desc}</p>

                <span className="text-orange-600 text-sm font-medium cursor-pointer hover:underline">
                  सविस्तर वाचा
                </span>

                <div className="w-full h-px bg-orange-200 my-6"></div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-[12px] font-semibold">
                  संपर्कासाठी →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
      
    </>
  );
};

export default GovSchemes;
