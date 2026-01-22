const VillageCard = () => {
  const cards = [
    {
      id: 1,
      title: "एक पेड मां के नाम कार्यक्रम",
      date: "02 November 2025",
      desc: "ग्राम पंचायत पळसुन येथे एक व्यक्ती एक झाड उपक्रम राबविण्यात आला.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/053/870/541/small/hillside-village-at-dawn-houses-with-tiled-roofs-and-vibrant-colors-photo.jpeg",
    },
    {
      id: 2,
      title: "फार्मर producer कंपनी स्थापना",
      date: "02 November 2025",
      desc: "शेतकऱ्यांची चर्चा करून फार्मर producer कंपनी स्थापन करण्यात आली.",
      image: "https://burst.shopifycdn.com/photos/small-farming-village-seen-through-branches.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    },
    {
      id: 3,
      title: "कर वसुली उपक्रम",
      date: "01 November 2025",
      desc: "ग्राम पंचायत पळसुन येथे कर वसुली उपक्रम राबविण्यात आला.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/034/318/225/small/a-village-at-dusk-in-the-mountains-ai-generated-free-photo.jpg",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <h3 className="text-lg font-semibold leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm opacity-90 mt-1">{card.date}</p>
                <p className="text-sm mt-2 line-clamp-2">{card.desc}</p>
                <button className="mt-4 self-start text-sm font-medium text-yellow-300 hover:underline">
                  पुढे वाचा →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VillageCard;
