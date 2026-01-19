import {  FileMinus2, FileText } from "lucide-react"
import SectionHeader from "../component/SectionHeader"

const MahitiAdhikar = () => {
  return (
    <>
      <div className="py-[90px]">
        <SectionHeader title="माहिती अधिकार"/>

        <div className="px-6 flex flex-wrap max-w-[1000px] m-auto justify-center gap-6 mt-[60px]">
          <div className="h-[250px] rounded-[16px] p-3 flex justify-center items-center flex-col w-[200px] bg-white">
            <FileText size={80} className="" color="#dc3545"/>
            <p className="mt-8 text-[14px] text-center">फॉर्मर producer कंपनी कमिटी स्थापना</p>
          </div>
          <div className="h-[250px] rounded-[16px] p-3 flex justify-center items-center flex-col w-[200px] bg-white">
            <FileText size={80} className="" color="#dc3545"/>
            <p className="mt-8 text-[14px] text-center">फॉर्मर producer कंपनी कमिटी स्थापना</p>
          </div>
          <div className="h-[250px] rounded-[16px] p-3 flex justify-center items-center flex-col w-[200px] bg-white">
            <FileText size={80} className="" color="#dc3545"/>
            <p className="mt-8 text-[14px] text-center">फॉर्मर producer कंपनी कमिटी स्थापना</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default MahitiAdhikar