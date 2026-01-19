import Box from "../component/cards/Box"
import SectionHeader from "../component/SectionHeader"

const JamaKharchPatrak = () => {
  return (
    <>
      <div className="bg-[#fef3e6] h-[67vh] flex flex-col justify-center items-center">
        <h2><SectionHeader title="जमा खर्च पत्रक" classname="text-orange-400 py-5"/></h2>
        <Box classname='bg-white w-sm border border-2 border-orange-400 border-dashed' title="जमा खर्च पत्रकामध्ये अद्याप कोणतीही माहिती जोडलेली नाही."/>
      </div>
    </>
  )
}

export default JamaKharchPatrak