
export default function Products() {
  interface Card {
    name: string;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      image: "/Hero.png",
      description: "Stylish cafe chair",
    },

    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "image7.png",
      description: "Stylish cafe chair",
    },

    {
      name: "Lolito",
      price: "Rp 7.000.000",
      image: "/image1.png",
      description: "Luxury big sofa",
    },

    {
      name: "Respira",
      price: "Rp 500.000",  
      image: "image2.jpeg",
      description: "Outdoor bar table and stool",
    },

    {
      name: "Grifo",
      price: "Rp 1.500.000",
      image: "image3.png",
      description: "Night lamp",
    },

    {
      name: "Muggo",
      price: "Rp 150.000",
      image: "image4.png",
      description: "Small mug",
    },

    {
      name: "Pingky",
      price: "Rp 7.000.000",
      image: "image5.jpeg",
      description: "Cute bed set",
    },

    {
      name: "Potty",
      price: "Rp 500.000",
      image: "image6.jpeg",
      description: "Minimalist flower pot",
    },
  ];

  return (
    <div className="p-8 bg-[#f9f9f9]">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">
        Our Products
      </h2>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold text-gray-800">{card.name}</h5>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              <h5 className="text-lg font-bold text-amber-600 mt-4">
                {card.price}
              </h5>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex items-center justify-center mt-12">
        <button className="px-6 py-3 text-[#B88E2F] border-2 border-[#B88E2F] rounded-lg font-medium hover:bg-[#B88E2F] hover:text-white transition duration-300">
          Show More
        </button>
      </div>
    </div>
  );
}
