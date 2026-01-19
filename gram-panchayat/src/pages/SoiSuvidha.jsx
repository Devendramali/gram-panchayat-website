import SectionHeader from "../component/SectionHeader"
import {HandCoins, Link, CloudSunRain, FileText } from "lucide-react"

const SoiSuvidha = () => {
  return (
    <>
      <div className="py-[90px] text-center bg-[#FAF8F1]">
        <span className="text-center m-auto inline-block text-[12px] rounded-[8px] font-[700] text-[#fff] mb-2 bg-[#E65100] px-2 py-1 ">💡 सोई-सुविधा</span>
          <SectionHeader title="उपलब्ध डिजिटल सेवा" classname="mb-2"/>
          <p className="text-[12px] text-center">तुमच्या गावातील माहिती व सेवा आता एका क्लिकवर</p>

          <div className="flex  flex-wrap justify-center gap-6 mt-13 items-center">

            <div className="max-w-[200px] text-center bg-[#fff] rounded-[16px] py-6 px-4">
              <HandCoins size={35}  className="m-auto" color="#fac152"/>
              <h2 className="text-[18px] mt-8 font-[700] text-[#2c3e50]">कर भरणा</h2>
              <p className="text-[14px] mt-2 text-[#6c757d]">ऑनलाईन पद्धतीने घरपट्टी व इतर कर भरणा.</p>
              <a href="#!" className="text-[14px] font-[700] mt-8 block text-[#E65100] border border-[1px] border-[#E65100] py-1 px-8 rounded-[16px]">➡️ कर भरणा</a>
            </div>
             <div className="max-w-[200px] text-center bg-[#fff] rounded-[16px] py-6 px-4">
              <FileText  size={35}  className="m-auto" color="#ff6d41 "/>
              <h2 className="text-[18px] mt-8 font-[700] text-[#2c3e50]">स्वयंघोषणापत्रे</h2>
              <p className="text-[14px] mt-2 text-[#6c757d]">घोषणापत्रे डाउनलोड करा व अर्जासाठी वापरा.</p>
              <a href="#!" className="text-[14px] font-[700] mt-8 block text-[#E65100] border border-[1px] border-[#E65100] py-1 px-5 rounded-[16px]">➡️ डाउनलोड करा</a>
            </div>
             <div className="max-w-[200px] text-center bg-[#fff] rounded-[16px] py-6 px-4">
              <CloudSunRain size={35}  className="m-auto" color="#2cc8c8 "/>
              <h2 className="text-[18px] mt-8 font-[700] text-[#2c3e50]">हवामान अंदाज</h2>
              <p className="text-[14px] mt-2 text-[#6c757d]">गावातील आजचे हवामान जाणून घ्या.</p>
              <a href="#!" className="text-[14px] font-[700] mt-8 block text-[#E65100] border border-[1px] border-[#E65100] py-1 px-8 rounded-[16px]">➡️ हवामान पाहा</a>
            </div>
             <div className="max-w-[200px] text-center bg-[#fff] rounded-[16px] py-6 px-4">
              <Link size={35}  className="m-auto" color="#f9777f"/>
              <h2 className="text-[18px] mt-8 font-[700] text-[#2c3e50]">जनसुविधा लिंक्स</h2>
              <p className="text-[14px] mt-2 text-[#6c757d]">महत्त्वाचे सरकारी पोर्टल्स व सुविधा.</p>
              <a href="#!" className="text-[14px] font-[700] mt-8 block text-[#E65100] border border-[1px] border-[#E65100] py-1 px-8 rounded-[16px]">➡️ पाहा लिंक्स</a>
            </div>

          </div>
      </div>
    </>
  )
}

export default SoiSuvidha