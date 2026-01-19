import { useState } from "react"
import SectionHeader from "../component/SectionHeader"
import {Search,Volume2} from "lucide-react"
import Suchanacard from "../component/cards/Suchanacard"


const Notices = () => {
  const [searchText, setsearchText] = useState("")

  const filteredNotices = Noticeslist.filter((item)=>
  item.title.toLowerCase().includes(searchText.toLowerCase()) ||
  item.discription.toLowerCase().includes(searchText.toLowerCase()) ||
  item.date.includes(searchText)
  )

  return (
    <>
      <div className=" bg-[#f6f7fa] py-[90px]">
        <div className="flex justify-center gap-3">
          <img src="./public/announsc.png" className="h-13" alt="" />
          <SectionHeader title="सूचना"/>
        </div>
        <div className="max-w-[1000px] mt-[60px] m-auto">
          <div className="search flex justify-center items-center gap-4">
            <input type="search" className="bg-[#fff] py-2 px-4 border border-[1px] border-[#ff7400]  focus:outline-none 
             focus:ring-0  rounded-[8px]
             focus:border-[#ff7400]  min-w-[700px]" name="" placeholder="येथे सूचना शोधा...." id=""  value={searchText} onChange={(e)=> setsearchText(e.target.value)}/>
            <button className="bg-[#ffc9a0] h-10 w-11 flex justify-center items-center rounded-[8px]"><Search color="#595450"/></button>
          </div>
          <p className="text-center mt-2 text-[#595450] text-[14px]">गावातील रहिवाशांसाठी नवीनतम अपडेट्स आणि महत्वाची माहिती.</p>
          <div className="mt-[60px]">
            {
              filteredNotices.length === 0 && (
                <p className="text-center text-[#595450]">कोणतीही सूचना सापडली नाही 😕</p>
              )
            }


            {
              filteredNotices.map((item)=>(
                  <Suchanacard key={item.id} data={item}/>
              ))
            }
            
           

          </div>
        </div>
      </div>
    </>
  )
}

export default Notices

export const Noticeslist = [
  {
    id:1,
    imgSrc:"./public/announcedefault.jpg",
    title:"मतदार यादी प्रसिद्ध करणे.",
    discription:"जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date:"13/10/2025"
  },
    {
    id:2,
    imgSrc:"./public/announcedefault.jpg",
    title:"दिनांक ०७/१०/२०२५ रोजी सर्व ऑनपद्तीने चे कागदपत्रेसाठी कम्प लावल्यात आला आहे",
    discription:"जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date:"13/10/2025"
  },
    {
    id:3,
    imgSrc:"./public/announcedefault.jpg",
    title:"मतदार यादी प्रसिद्ध करणे.",
    discription:"जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date:"13/10/2025"
  }
]