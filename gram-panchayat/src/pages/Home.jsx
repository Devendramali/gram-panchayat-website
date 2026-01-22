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
import Card from "../component/cards/Card";
import Button from "../component/cards/Button";

const members = [
  {
    name: "जयकुमार गोरे",
    post: "माननीय मंत्री, ग्रामविकास व पंचायत राज विभाग",
    img: "/q.webp",
  },
  {
    name: "एकनाथ शिंदे",
    post: "माननीय उपमुख्यमंत्री",
    img: "/w.webp",
  },
  {
    name: "देवेंद्र फडणवीस",
    post: "माननीय मुख्यमंत्री",
    img: "/e.webp",
  },
  {
    name: "अजित पवार",
    post: "माननीय उपमुख्यमंत्री",
    img: "/r.jpg",
  },
  {
    name: "योगेश कदम",
    post: "माननीय राज्यमंत्री, ग्रामविकास व पंचायत राज विभाग",
    img: "/t.webp",
  },
  {
    name: "एकनाथ डवले",
    post: "प्रधान सचिव, ग्रामविकास व पंचायत राज विभाग",
    img: "/y.webp",
  },
  {
    name: "डॉ. प्रविण जाधव",
    post: "विभागीय आयुक्त (नाशिक)",
    img: "/u.jpg",
  },
];

const slides = [
  {
    image:
      "./member/slider1.webp",
    title: "ग्रामपंचायत",
    subtitle: "पळसुन",
    desc: "शाश्वत विकासाच्या दिशेने, गावातील प्रत्येक नागरिकाच्या सहभागातून, शिक्षण, आरोग्य, पाणी, स्वच्छता, आणि डिजिटायझेशन यांचा समन्वय साधत ,गाव घडवण्यासाठी कटीबद्ध एक सक्षम ग्रामपंचायत.",
  },
  {
    image:
      "./member/slider2.webp",
    title: "ग्रामपंचायत",
    subtitle: "पळसुन",
    desc: "शाश्वत विकासाच्या दिशेने, गावातील प्रत्येक नागरिकाच्या सहभागातून, शिक्षण, आरोग्य, पाणी, स्वच्छता, आणि डिजिटायझेशन यांचा समन्वय साधत ,गाव घडवण्यासाठी कटीबद्ध एक सक्षम ग्रामपंचायत.",
  },
  {
    image:
      "./member/slider3.webp",
    title: "ग्रामपंचायत",
    subtitle: "पळसुन",
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

  const firstRow = members.slice(0, 5);
  const lastRow = members.slice(5);
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
      <div className="w-full py-3 px-3 sm:px-6">
        <div className="max-w-7xl bg-[#FEEFDD] mx-auto flex flex-col lg:flex-row items-center gap-3">
          {/* LEFT OR TOP LABEL */}
          <div className="bg-orange-600 md:w-fit w-full text-center md:justify-start justify-center text-white px-4 py-2 flex items-center gap-2 shrink-0">
            <span className="text-lg">📢</span>
            <span className="font-semibold text-sm sm:text-base">
              आजचा सुविचार:
            </span>
          </div>

          {/* RIGHT / TEXT */}
          <div className="text-center w-full lg:text-left text-sm sm:text-base text-gray-800 leading-relaxed">
            <marquee
              behavior="scroll"
              direction="left"
              onmouseover="this.stop();"
              onmouseout="this.start();"
              scrollamount="6"
            >
                🌸 जे मिळालंय त्याबद्दल कृतज्ञ राहा आणि जे मिळवायचं आहे त्यासाठी
                प्रयत्न करा. 🌸
            </marquee>
          </div>
        </div>
      </div>
      {/* -------- */}
      <div className="max-w-[1300px] mx-auto px-4 py-16">
        {/* FIRST ROW */}
        <SectionHeader
          title="माननीय मंत्री व पदाधिकारी"
          classname="mb-[60px] underline1"
        />
        <div
          className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-5 
        justify-items-center"
        >
          {firstRow.map((item, index) => (
            <Card
              key={index}
              item={item}
              raised={index === 1 || index === 2 || index === 3}
            />
          ))}
        </div>

        {/* LAST ROW CENTER */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          {lastRow.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
      {/* ------------- */}

      <div className="py-[60px] bg-[#fff]">
        <SectionHeader
          title="आमचे प्रशासकीय अधिकारी"
          classname="mb-[60px] underline1"
        />
        <div className="m-auto flex justify-center gap-5">
          {officers.map((item) => (
            <MediumCard data={item} />
          ))}
        </div>
      </div>
      <div className="grampanchayatmain px-6 bg-[#f6f7fa] py-[60px]">
        <SectionHeader
          title="ग्रामपंचायतीचे माननीय सदस्य"
          classname="mb-[60px] "
        />
        <div className="m-auto max-w-[1000px] flex-wrap flex gap-[40px] justify-center">
          {Administration.map((item) => (
            <BigCards key={item.id} data={item} />
          ))}
        </div>
        <div className="w-full flex justify-center mt-10">
          <Button href="/GrampanchayatPrashsan" text="अधिक पहा..."/>
        </div>
      </div>
      <div className="py-[60px] px-5 pb-[150px] bg-[#fff]">
        <div className="flex flex-col lg:flex-row max-w-[1200px] m-auto">
          <div className="py-5 lg:py-0">
            <span className="text-[14px]">आमच्याबद्दल जाणून घ्या</span>
            <SectionHeader
              title="ग्रामपंचायतीचे माननीय सदस्य"
              classname="mb-[20px] text-left "
            />
            <p className="text-[15px]">
              ही ग्रामपंचायत संबंधित पंचायत समिती अंतर्गत कार्यरत असून तिच्या
              अखत्यारीत ३ गावे समाविष्ट आहेत...नागरिक माहिती{" "}
            </p>
            <div className="w-full flex justify-start my-5">
          <Button href="/about" text="अधिक पहा..."/>
        </div>
          </div>
          <div className="relative lg:min-w-[500px]">
            <img
              src="./about1.webp"
              className="w-full lg:w-[350px] bg-[#fff] p-1 rounded-[24px] shadow-[1px_1px_12px_#bfbfbf]"
              alt=""
            />
            <img
              src="./about2.webp"
              className="w-full mt-2 lg:w-[350px] lg:absolute lg:top-[80px] bg-[#fff] p-1 rounded-[24px] shadow-[1px_1px_12px_#bfbfbf] right-0"
              alt=""
            />
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

      <div className="mt-10 px-5 w-full flex flex-col justify-center">
        <div className="py-2">
          <SectionHeader
            title="आमचे कार्यक्रम म्हणजे गावाला सक्षम, स्वयंपूर्ण आणि आधुनिक बनवण्याचा एक सामूहिक प्रयत्न आहे"
            classname="mb-[30px]"
          />
        </div>
        <VillageCard />
        <div className="w-full flex justify-center my-5">
          <Button text="अधिक पहा..."/>
        </div>
      </div>

      <div className="bg-pink-50 py-[60px]">
        <div>
          <SectionHeader title="ग्रामपंचायतीच्या सूचना" classname="mb-[0px]" />
        </div>
        {/* <Suchanacard /> */}
        <div className="mt-[60px] max-w-[1200px] m-auto px-6">
          {Noticeslist.length === 0 && (
            <p className="text-center text-[#595450]">
              कोणतीही सूचना सापडली नाही 😕
            </p>
          )}

          {Noticeslist.map((item) => (
            <Suchanacard key={item.id} data={item} />
          ))}
        </div>
        <div className="w-full flex justify-center my-5">
          <Button text="अधिक पहा..." href="/notices"/>
        </div>
      </div>

      <div className="pt-5">
        <div>
          <SectionHeader title="फोटो गॅलरी" classname="mb-[15px]" />
        </div>
        <p className="text-[14px] text-zinc-700 text-center">
          ग्रामीण जीवन, घटना आणि नैसर्गिक सौंदर्याची झलक.
        </p>
        <div className="w-full flex justify-center my-5">
          <Button href="/gallery" text="अधिक पहा..."/>
        </div>
        <Herobanner />
      </div>
    </>
  );
};

export default Home;

export const officers = [
  {
    id: 1,
    // imgsrc: "./user-circle.svg",
    imgsrc: "./member/adhikari.webp",
    title: "श्री.परमेश्वर विठोबा गंडे",
    position: "ग्रामपंचायत अधिकारी, पळसुन ",
    contact: {
      number: 9421477822,
    },
  },
];

export const Noticeslist = [
  {
    id: 1,
    imgSrc: "./announcedefault.jpg",
    title: "मतदार यादी प्रसिद्ध करणे.",
    discription:
      "जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date: "13/10/2025",
  },
  {
    id: 2,
    imgSrc: "./announcedefault.jpg",
    title:
      "दिनांक ०७/१०/२०२५ रोजी सर्व ऑनपद्तीने चे कागदपत्रेसाठी कम्प लावल्यात आला आहे",
    discription:
      "जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date: "13/10/2025",
  },
  {
    id: 3,
    imgSrc: "./announcedefault.jpg",
    title: "मतदार यादी प्रसिद्ध करणे.",
    discription:
      "जिल्हा परिषद निवडणूक विभाग व पंचायत समिती गणाची प्रारूप मतदार यादी प्रसिद्ध करणे साठी मा. राज्य निवडणूक क आयोग याच्या कडील आदेश क्र./राणीआ/जि. प.प. स./2025/प्र. क्र.20/का7 दिनांक-23/09/2025",
    date: "13/10/2025",
  },
];


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
    imgsrc: "./member/2.webp",
    title: "श्री.रूपसिंग केसू वळवी",
    position: "उपसरपंच",
    contact: {
      number: 132648566,
    },
  },
  // {
  //   id: 2,
  //   imgsrc: "./public/member/6.webp",
  //   title: "श्री.रूपसिंग केसू वळवी",
  //   position: "ग्रामारोजगार सेवक ",
  //   contact: {
  //     number: 132648566,
  //   },
  // },

];

// export const members = [
//   {
//     id: 1,
//     imgsrc: "./public/member/5.webp",
//     title: "श्री.संतोषकुमार जयसिंग गवळी",
//     position: "ग्रामपंचायत सदस्य, पळसुन ",
//     contact: {
//       number: 132648566,
//     },
//   },
//   {
//     id: 2,
//     imgsrc: "./public/member/4.webp",
//     title: "सौ.उषाबाई रतिलाल साळी",
//     position: "ग्रामपंचायत सदस्य, पळसुन ",
//     contact: {
//       number: 132648566,
//     },
//   },
//   {
//     id: 3,
//     imgsrc: "./public/member/3.webp",
//     title: "सौ.अप्सराबाई अमरनाथ कोकणी",
//     position: "ग्रामपंचायत सदस्य, पळसुन ",
//     contact: {
//       number: 132648566,
//     },
//   },
//   {
//     id: 4,
//     imgsrc: "./user-circle.svg",
//     title: "सौ.सुभद्रा विकास कोकणी ",
//     position: "ग्रामपंचायत सदस्य, पळसुन ",
//     contact: {
//       number: 132648566,
//     },
//   },
//   {
//     id: 5,
//     imgsrc: "./public/member/7.webp",
//     title: "सौ.अस्मिता उपेंद्र कोकणी",
//     position: "ग्रामपंचायत सदस्य, पळसुन ",
//     contact: {
//       number: 132648566,
//     },
//   },
//   {
//     id: 6,
//     imgsrc: "./public/member/6.webp",
//     title: "श्री.अमन बाबुलाल कोकणी",
//     position: "ग्रामपंचायत सदस्य, पळसुन ",
//     contact: {
//       number: 132648566,
//     },
//   },
//   {
//     id: 7,
//     imgsrc: "./user-circle.svg",
//     title: "सौ.रेखाबाई आखात्या कोकणी",
//     position: "ग्रामपंचायत सदस्य, पळसुन ",
//     contact: {
//       number: 132648566,
//     },
//   },
// ];
