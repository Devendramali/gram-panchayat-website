import { useEffect, useState } from "react";
import { AiOutlineBook } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import VillageCard from "../component/cards/VillageCard";
import Suchanacard from "../component/cards/Suchanacard";
import SectionHeader from "../component/SectionHeader";
import Herobanner from "../component/Herobanner";
import MediumCard from "../component/cards/MediumCard";
import BigCards from "../component/cards/BigCards";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnxlbnwwfHwwfHx8MA==",
    title: "ग्रामपंचायत",
    subtitle: "वावडी",
    desc: "शाश्वत विकासाच्या दिशेने, गावातील प्रत्येक नागरिकाच्या सहभागातून, शिक्षण, आरोग्य, पाणी, स्वच्छता, आणि डिजिटायझेशन यांचा समन्वय साधत ,गाव घडवण्यासाठी कटीबद्ध एक सक्षम ग्रामपंचायत.",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/070/069/943/small/a-man-in-a-suit-and-bow-tie-looking-up-at-the-sky-free-photo.jpg",
    title: "ग्रामपंचायत",
    subtitle: "वावडी",
    desc: "शाश्वत विकासाच्या दिशेने, गावातील प्रत्येक नागरिकाच्या सहभागातून, शिक्षण, आरोग्य, पाणी, स्वच्छता, आणि डिजिटायझेशन यांचा समन्वय साधत ,गाव घडवण्यासाठी कटीबद्ध एक सक्षम ग्रामपंचायत.",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/070/069/943/small/a-man-in-a-suit-and-bow-tie-looking-up-at-the-sky-free-photo.jpg",
    title: "ग्रामपंचायत",
    subtitle: "वावडी",
    desc: "शाश्वत विकासाच्या दिशेने, गावातील प्रत्येक नागरिकाच्या सहभागातून, शिक्षण, आरोग्य, पाणी, स्वच्छता, आणि डिजिटायझेशन यांचा समन्वय साधत ,गाव घडवण्यासाठी कटीबद्ध एक सक्षम ग्रामपंचायत.",
  },
];

const cards = [
  {
    icon: <AiOutlineBook className="text-orange-400 text-3xl" />,
    title: "स्मार्ट ग्राम",
    desc: "जिल्हास्तरीय स्मार्ट ग्रामपंचायत पुरस्कार मिळाला",
  },
  {
    icon: <BiDesktop className="text-orange-400 text-3xl" />,
    title: "संयोजना",
    desc: "ग्रामपंचायतकप अंतर्गत कॅबडी स्पर्धांचे आयोजन",
  },
  {
    icon: <GiTrophyCup className="text-orange-400 text-3xl" />,
    title: "पुरस्कार",
    desc: "माझी वसुंधरा अभियान अंतर्गत राज्यस्तरीय पुरस्कार प्राप्त",
  },
  {
    icon: <FaHeart className="text-orange-400 text-3xl" />,
    title: "सहभाग",
    desc: "लोकसहभाग आणि श्रमदानाच्या माध्यमातून रविवारी 100 हून अधिक गावं सतत स्वच्छ करा.",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* content */}
            <div className="absolute left-6 md:left-16 bottom-24 text-white max-w-xl">
              <h4 className="text-[35px] font-bold mb-2">{slide.title}</h4>
              <h1 className="text-[70x] font-bold md:text-5xl font-bold mb-4">
                {slide.subtitle}
              </h1>
              <p className="text-sm md:text-base leading-relaxed">
                {slide.desc}
              </p>
              <div className="flex gap-4">
                <p className="text-xs">
                  <span className="text-xl font-bold text-orange-400">
                    28 +{" "}
                  </span>
                  एकूण गाव कार्यक्रम
                </p>
                <p>
                  <span className="text-xl font-bold text-orange-400">0 +</span>{" "}
                  गावाची लोकसंख्या
                </p>
              </div>
            </div>

            <div className="flex justify-end mr-10">
              <button className="mt-6 bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-md text-sm text-white font-medium">
                💳 Pay Now
              </button>
            </div>
          </div>
        ))}

        {/* dots */}
        <div className="absolute bottom-8 w-full flex justify-center gap-3">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-5 rounded-2xl cursor-pointer ${
                i === current ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
      <div className="py-[60px]">
            <SectionHeader title="माननीय मंत्री व पदाधिकारी" classname="mb-[60px] underline1" />

            <div className="px-6 flex gap-4 justify-center flex-wrap">
              <div className="p-3 mt-12 bg-[#fff] w-[250px] transition hover:scale-[1.1] h-[300px] rounded-[18px]">
                <figure className="h-[200px]">
                  <img src="./q.webp" className="h-full object-cover" alt="" />
                </figure>
                <h2 className="text-[18px] font-[700] text-center mt-4">जयकुमार गोरे</h2>
                <p className="text-[12px] text-center">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
              <div className="p-3 mt-6 bg-[#fff] w-[250px] transition hover:scale-[1.1] h-[300px] rounded-[18px]">
                <figure className="h-[200px]">
                  <img src="./w.webp" className="h-full object-cover" alt="" />
                </figure>
                <h2 className="text-[18px] font-[700] text-center mt-4">जयकुमार गोरे</h2>
                <p className="text-[12px] text-center">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
              <div className="p-3 bg-[#fff] w-[250px] transition hover:scale-[1.1] h-[300px] rounded-[18px]">
                <figure className="h-[200px]">
                  <img src="./e.webp" className="h-full object-cover" alt="" />
                </figure>
                <h2 className="text-[18px] font-[700] text-center mt-4">जयकुमार गोरे</h2>
                <p className="text-[12px] text-center">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
              <div className="p-3 mt-6 bg-[#fff] w-[250px] transition hover:scale-[1.1] h-[300px] rounded-[18px]">
                <figure className="h-[200px]">
                  <img src="./r.jpg" className="h-full object-cover" alt="" />
                </figure>
                <h2 className="text-[18px] font-[700] text-center mt-4">जयकुमार गोरे</h2>
                <p className="text-[12px] text-center">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
              <div className="p-3 mt-12 bg-[#fff] w-[250px] transition hover:scale-[1.1] h-[300px] rounded-[18px]">
                <figure className="h-[200px]">
                  <img src="./t.webp" className="h-full object-cover" alt="" />
                </figure>
                <h2 className="text-[18px] font-[700] text-center mt-4">जयकुमार गोरे</h2>
                <p className="text-[12px] text-center">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>


                <div className="p-3  bg-[#fff] w-[200px] transition hover:scale-[1.1] h-[280px] rounded-[18px]">
                <figure className="h-[170px]">
                  <img src="./y.webp" className="h-full object-cover" alt="" />
                </figure>
                <h2 className="text-[16px] font-[700] text-center mt-4">जयकुमार गोरे</h2>
                <p className="text-[12px] text-center">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
              <div className="p-3 bg-[#fff] w-[200px] transition hover:scale-[1.1] h-[280px] rounded-[18px]">
                <figure className="h-[170px]">
                  <img src="./u.jpg" className="h-full object-cover" alt="" />
                </figure>
                <h2 className="text-[16px] font-[700] text-center mt-4">जयकुमार गोरे</h2>
                <p className="text-[12px] text-center">माननीय मंत्री, ग्रामविकास व पंचायतराज विभाग</p>
              </div>
            </div>

      </div>
      <div className="py-[60px] bg-[#fff]">
            <SectionHeader title="आमचे प्रशासकीय अधिकारी" classname="mb-[60px] underline1" />
         <div className="m-auto flex justify-center gap-5">
          {
              officers.map((item)=>(
                <MediumCard data={item}/>
              ))
          }
         </div>
      </div>
      <div className="grampanchayatmain bg-[#f6f7fa] py-[60px]">
        <SectionHeader title="ग्रामपंचायतीचे माननीय सदस्य" classname="mb-[60px] " />
        <div className="m-auto max-w-[1000px] flex-wrap flex gap-[40px] justify-center">
          {Administration.map((item) => (
            <BigCards key={item.id} data={item} />
          ))}

        </div>
        </div>
        <div className="py-[60px] pb-[150px] bg-[#fff]">
          <div className="flex max-w-[1200px] m-auto">
            <div className="">
              <span className="text-[14px]">आमच्याबद्दल जाणून घ्या</span>
              <SectionHeader title="ग्रामपंचायतीचे माननीय सदस्य" classname="mb-[20px] text-left " />
              <p className="text-[15px]">ही ग्रामपंचायत संबंधित पंचायत समिती अंतर्गत कार्यरत असून तिच्या अखत्यारीत ३ गावे समाविष्ट आहेत...नागरिक माहिती </p>
            </div>
            <div className="relative min-w-[500px]">
              <img src="./about1.webp" className="w-[350px] bg-[#fff] p-1 rounded-[24px] shadow-[1px_1px_12px_#bfbfbf]" alt="" />
              <img src="./about2.webp" className="w-[350px] absolute top-[80px] bg-[#fff] p-1 rounded-[24px] shadow-[1px_1px_12px_#bfbfbf] right-0" alt="" />
            </div>
          </div>
             
        </div>

      <div className="bg-gray-100 py-10">
        <div className="py-2">
          <SectionHeader title="विशेष आकर्षणे" classname="mb-[60px]" />
        </div>
        <div className="w-full lg:px-15 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
          {cards.map((card, index) => (
            <div key={index} className="text-left">
              <div className="flex justify-left mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-7">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-6">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 w-full flex flex-col justify-center">
        <div className="py-2">
          <SectionHeader
            title="आमचे कार्यक्रम म्हणजे गावाला सक्षम, स्वयंपूर्ण आणि आधुनिक बनवण्याचा एक सामूहिक प्रयत्न आहे"
            classname="mb-[30px]"
          />
        </div>
        <VillageCard />
      </div>

      <div className="bg-pink-50 py-[60px]">
        <div>
          <SectionHeader title="ग्रामपंचायतीच्या सूचना" classname="mb-[0px]" />
        </div>
        {/* <Suchanacard /> */}
          <div className="mt-[60px] max-w-[1200px] m-auto px-6">
            {
              Noticeslist.length === 0 && (
                <p className="text-center text-[#595450]">कोणतीही सूचना सापडली नाही 😕</p>
              )
            }


            {
              Noticeslist.map((item)=>(
                  <Suchanacard key={item.id} data={item}/>
              ))
            }
            
           

          </div>
      </div>

      <div className="pt-5">
        <div>
          <SectionHeader title="फोटो गॅलरी" classname="mb-[15px]" />
        </div>
        <p className="text-[14px] text-zinc-700 text-center">
          ग्रामीण जीवन, घटना आणि नैसर्गिक सौंदर्याची झलक.
        </p>
        <Herobanner />
      </div>
    </>
  );
};

export default Home;

export const officers = [
  {
    id: 1,
    imgsrc: "./user-circle.svg",
    title: "श्रीमती बाजुबाई भूपेंद्र वसावे",
    position: "सरपंच, ग्रामपंचायत",
    contact: {
      number: 132648566
    }
  }
]


export const Noticeslist = [
  {
    id:1,
    imgSrc:"./announcedefault.jpg",
    title:"मतदार यादी प्रसिद्ध करणे.",
    discription:"जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date:"13/10/2025"
  },
    {
    id:2,
    imgSrc:"./announcedefault.jpg",
    title:"दिनांक ०७/१०/२०२५ रोजी सर्व ऑनपद्तीने चे कागदपत्रेसाठी कम्प लावल्यात आला आहे",
    discription:"जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date:"13/10/2025"
  },
    {
    id:3,
    imgSrc:"./announcedefault.jpg",
    title:"मतदार यादी प्रसिद्ध करणे.",
    discription:"जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date:"13/10/2025"
  }
]

export const Administration = [
  {
    id: 1,
    imgsrc: "./user-circle.svg",
    title: "श्रीमती बाजुबाई भूपेंद्र वसावे",
    position: "सरपंच, ग्रामपंचायत",
    contact: {
      number: 132648566
    }
  },
  {
    id: 2,
    imgsrc: "./user-circle.svg",
    title: "श्री दावा देवलसिंग वसावे",
    position: "उपसरपंच, ग्रामपंचायत",
    contact: {
      number: 132648566
    }
  }
]
