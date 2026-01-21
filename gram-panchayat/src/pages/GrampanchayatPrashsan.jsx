import BigCards from "../component/cards/BigCards";
import Smallcards from "../component/cards/Smallcards";
import SectionHeader from "../component/SectionHeader";

const GrampanchayatPrashsan = () => {
  
  return (
    <>
    <div className="grampanchayatmain bg-white bg-dot px-5 py-[90px]">
      <SectionHeader title="ग्रामपंचायत प्रशासन" classname="mb-[60px]"/>
      <div className="m-auto flex flex-wrap gap-[40px] justify-center">
        {Administration.map((item) => (
            <BigCards key={item.id} data={item} />
          ))}

      </div>
      <div className="mt-12 flex justify-center gap-5 flex-wrap">
        {
          members.map((item)=>(
            <Smallcards data={item}/>
          ))
        }
      </div>
    </div>
    <div className="bg-white py-[90px]">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="md:col-span-7 col-span-12">
          <SectionHeader title="शासकीय शाळा मराठी" classname="mb-[30px]" />
            <div className="flex gap-2 justify-center items-center">
              <figure className="mb-0 bg-[#FD7E14] w-9 h-9 flex rounded-[50px] justify-center items-center">
              <img src="./icon1.svg" alt=""  className="h-6 w-6"/>

              </figure>
              <div>
                <h3 className="text-[20px] font-[700]">जिल्हा परिषद प्राथमिक शाळा वावडी केंद्र उमराण ता नवापुर जिल्हा नंदुरबार</h3>
                <span className="font-[600] text-[14px]">स्थापना : 1955</span>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                <p className="text-[14px] font-[600] text-[#555]">शाळेतील मुल :</p>
                <p className="text-[14px] font-[600] text-[#ca00ff]">17</p>
              </div>
              <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                <p className="text-[14px] font-[600] text-[#555]">शाळेतील मुली :</p>
                <p className="text-[14px] font-[600] text-[#ca00ff]">16</p>
              </div>
              <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                <p className="text-[14px] font-[600] text-[#555]">एकूण शिक्षक :</p>
                <p className="text-[14px] font-[600] text-[#ca00ff]">2</p>
              </div>
              <div className="flex justify-between bg-[#f9f9f9] p-3 mb-1 px-4 rounded-[12px] transition hover:-translate-y-0.5 hover:bg-[#eef7ff]">
                <p className="text-[14px] font-[600] text-[#555]">संपर्क :</p>
                <p className="text-[14px] font-[600] text-[#555]">-------</p>
                {/* <p className="text-[14px] font-[600] text-[#ca00ff]">17</p> */}
              </div>
            </div>

        </div>
         <div className="md:col-span-5 col-span-12">
          <figure className="h-[100%] w-[100%]">
            <img src="./school.webp" alt=""  className="h-[100%] w-[100%]"/>
          </figure>
         </div>
         
      </div>
      <div className=" mt-12 px-6 flex justify-center">
          
         {
           item1.map((item)=>(
             
             <Smallcards data={item}/>
            ))
          }
          </div>

    </div>

    </>
  )
}

export default GrampanchayatPrashsan;



export const item1=[
  {
        id:1,
    imgsrc:"./user-circle.svg",
    title:"श्री दिनेश मोतीराम चव्हाण",
      position:"शासकीय शाळा मराठी मुख्याध्यापक"
  }
]
export const Administration = [
   {
    id: 1,
    imgsrc: "./member/1.webp",
    title: "श्री.भालेराव तोडू कोकणी ",
    position: "सरपंच, पळसुन ",
    contact: {
      number: 132648566,
    },
  },
    {
    id: 3,
    imgsrc: "./user-circle.svg",
    title: "श्री.रूपसिंग केसू वळवी",
    position: "उपसरपंच",
    contact: {
      number: 132648566,
    },
  },
  {
    id: 2,
    imgsrc: "./member/6.webp",
    title: "-----",
    position: "ग्रामारोजगार सेवक ",
    contact: {
      number: 132648566,
    },
  },
];

export const members = [
  {
    id: 1,
    imgsrc: "./member/5.webp",
    title: "श्री.संतोषकुमार जयसिंग गवळी",
    position: "ग्रामपंचायत सदस्य, पळसुन ",
    contact: {
      number: 132648566,
    },
  },
  {
    id: 2,
    imgsrc: "./member/4.webp",
    title: "सौ.उषाबाई रतिलाल साळी",
    position: "ग्रामपंचायत सदस्य, पळसुन ",
    contact: {
      number: 132648566,
    },
  },
  {
    id: 3,
    imgsrc: "./member/3.webp",
    title: "सौ.अप्सराबाई अमरनाथ कोकणी",
    position: "ग्रामपंचायत सदस्य, पळसुन ",
    contact: {
      number: 132648566,
    },
  },
  {
    id: 4,
    imgsrc: "./user-circle.svg",
    title: "सौ.सुभद्रा विकास कोकणी ",
    position: "ग्रामपंचायत सदस्य, पळसुन ",
    contact: {
      number: 132648566,
    },
  },
  {
    id: 5,
    imgsrc: "./member/7.webp",
    title: "सौ.अस्मिता उपेंद्र कोकणी",
    position: "ग्रामपंचायत सदस्य, पळसुन ",
    contact: {
      number: 132648566,
    },
  },
  {
    id: 6,
    imgsrc: "./member/6.webp",
    title: "श्री.अमन बाबुलाल कोकणी",
    position: "ग्रामपंचायत सदस्य, पळसुन ",
    contact: {
      number: 132648566,
    },
  },
  {
    id: 7,
    imgsrc: "./user-circle.svg",
    title: "सौ.रेखाबाई आखात्या कोकणी",
    position: "ग्रामपंचायत सदस्य, पळसुन ",
    contact: {
      number: 132648566,
    },
  },
];
