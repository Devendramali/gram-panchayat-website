import { Volume2 } from "lucide-react"

const Suchanacard = ({data}) => {

  return (
    <>
      <div key={data.id} className="flex shadow-[0px_0px_12px_#bfbfbf] mb-6">
                <figure className="mb-0 max-h-[200px] w-[30%]">
                    <img src={data.imgSrc} className="h-full w-full" alt="" />
                </figure>
                <div className="p-4 w-[70%] max-h-[200px] flex flex-col justify-between">
                  <div className="">
                    <h3 className="flex gap-2 text-[#FD7E14] font-[700] mb-4"> <Volume2 color="#FD7E14"/> {data.title}</h3>
                    <p className="text-[12px]">{data.discription}</p>
                  </div>
                  <p className="text-right text-[13px] text-[#FD7E14] font-[700]">{data.date}</p>

                </div>


              </div>
    </>
  )
}

export default Suchanacard