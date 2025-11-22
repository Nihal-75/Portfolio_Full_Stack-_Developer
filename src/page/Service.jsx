import { useNavigate } from "react-router-dom";
import { ServiceData } from "../store/survicess";

function Service() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-[92%] sm:w-[90%] mx-auto py-6">
      {/* Back Arrow */}
      <button
        className="font-extrabold text-[26px] sm:text-[30px] hover:bg-red-600 hover:text-white transition-all duration-200 rounded-full px-3 cursor-pointer w-fit"
        onClick={() => navigate(-1)}
      >
        ←
      </button>

      {/* Heading */}
      <header className="flex items-center flex-col justify-center mt-4 text-center">
        <h1 className="font-serif text-[28px] sm:text-[32px] md:text-[38px] font-extrabold capitalize">
          Services
        </h1>

        <p className="text-gray-500 text-sm sm:text-base mt-2">
          What I can build for you
        </p>
      </header>

      {/* Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-10 place-items-center">
        {ServiceData.map((item) => (
          <div
            key={item.id}
            className="group w-full sm:w-[90%] md:w-[95%] h-[330px] flex flex-col justify-start transition-all duration-300 p-6 rounded-2xl 
            text-center border bg-white/60 backdrop-blur-sm hover:bg-white hover:-translate-y-2 cursor-pointer 
            shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.45)]"
          >
            <span className="text-red-600 flex justify-center text-5xl group-hover:scale-110 transition-all duration-300">
              {item.icon}
            </span>

            <h1 className="font-serif font-extrabold text-[20px] sm:text-[22px] mt-4">
              {item.title}
            </h1>

            <p className="text-[15px] sm:text-[16px] mt-4 font-serif leading-relaxed text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Service;
