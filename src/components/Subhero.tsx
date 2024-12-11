import Image from "next/image";

export default function SubHero() {
  return (
    <div className="p-8 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800">Browse The Range</h3>
        <p className="text-gray-600 text-lg mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dining */}
        <div className="text-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <Image
            src="/Dining.png"
            width={381}
            height={480}
            alt="Dining"
            className="w-full h-auto"
          />
          <h6 className="text-lg font-bold text-gray-800 mt-4">Dining</h6>
        </div>

        {/* Living */}
        <div className="text-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <Image
            src="/Living.png"
            width={381}
            height={480}
            alt="Living"
            className="w-full h-auto"
          />
          <h6 className="text-lg font-bold text-gray-800 mt-4">Living</h6>
        </div>

        {/* Bedroom */}
        <div className="text-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <Image
            src="/Bedroom.png"
            width={381}
            height={480}
            alt="Bedroom"
            className="w-full h-auto"
          />
          <h6 className="text-lg font-bold text-gray-800 mt-4">Bedroom</h6>
        </div>
      </div>
    </div>
  );
}
