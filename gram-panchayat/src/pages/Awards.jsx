import SectionHeader from "../component/SectionHeader";

const Awards = () => {
  return (
    <>
      <div className="py-8 flex justify-start flex-col h-[90vh]">
        <div className="flex flex-col itemc">
          <p className="text-2xl text-orange-400 font-bold text-center">
            ✨ गावाचे पुरस्कार आणि सन्मान ✨
          </p>
          <p className="text-[11px] text-center pt-2 text-blue-500">
            आमच्या गावाच्या प्रगती आणि उत्कृष्टतेची ओळख
          </p>
        </div>

        <div className="max-w-full mt-6 flex justify-center">
          <div className="bg-white w-2xl border border-dashed p-5">
            <p className="text-[10px] text-center pt-2 text-zinc-500">पुरस्कारांमध्ये अद्याप कोणतीही माहिती जोडलेली नाही.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
