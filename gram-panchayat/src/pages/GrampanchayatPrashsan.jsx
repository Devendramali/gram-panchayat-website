import BigCards from "../component/cards/BigCards";
import Smallcards from "../component/cards/Smallcards";
import SectionHeader from "../component/SectionHeader";

const GrampanchayatPrashsan = () => {
  
  return (
    <>
    <div className="grampanchayatmain bg-white bg-dot py-[90px]">
      <SectionHeader title="ग्रामपंचायत प्रशासन" classname="mb-[60px]"/>
      <div className="m-auto flex gap-[40px] justify-center">
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
      <div className="max-w-[1000px] px-6 m-auto grid gap-5 grid-cols-12">
        <div className="col-span-7">
          <SectionHeader title="शासकीय शाळा मराठी" classname="mb-[30px]" />
            <div className="flex gap-2 justify-center items-center">
              <figure className="mb-0 bg-[#FD7E14] w-9 h-9 flex rounded-[50px] justify-center items-center">
              <img src="./public/icon1.svg" alt=""  className="h-6 w-6"/>

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
         <div className="col-span-5">
          <figure className="h-[100%] w-[100%]">
            <img src="./public/school.png" alt=""  className="h-[100%] w-[100%]"/>
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
export const Administration =[
  {
    id:1,
    imgsrc:"./user-circle.svg",
    title:"श्रीमती बाजुबाई भूपेंद्र वसावे",
    position:"सरपंच, ग्रामपंचायत"
  },
   {
    id:2,
    imgsrc:"./user-circle.svg",
    title:"श्री दावा देवलसिंग वसावे",
    position:"उपसरपंच, ग्रामपंचायत"
  }
]

export const members =[
  {
    id:1,
    imgsrc:"./user-circle.svg",
    title:"श्री भूपेंद्र कथु वसावे",
    position:"ग्रामपंचायत सदस्य, ग्रामपंचायत"
  },
   {
    id:2,
    imgsrc:"./user-circle.svg",
    title:"श्री दशरथ विष्णू पाडवी",
      position:"ग्रामपंचायत सदस्य, ग्रामपंचायत"
  },
   {
    id:3,
    imgsrc:"./user-circle.svg",
    title:"श्रीमती एरिना सुनील पाडवी",
    position:"ग्रामपंचायत सदस्य, ग्रामपंचायत"
  },
   {
    id:4,
    imgsrc:"./user-circle.svg",
    title:"श्रीमती सरिता किरण वसावे",
    position:"ग्रामपंचायत सदस्य, ग्रामपंचायत"
  }
]