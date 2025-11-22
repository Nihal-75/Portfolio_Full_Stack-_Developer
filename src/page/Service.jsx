
import { useNavigate } from "react-router-dom";
import { ServiceData } from "../store/survicess";

function Service() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-[92%] sm:w-[90%] mx-auto py-6">
      {/* Back Arrow */}
      <h1
        className="font-extrabold text-[26px] sm:text-[30px] hover:bg-red-500 hover:text-white transition-all duration-200 rounded-full px-2 cursor-pointer w-fit"
        onClick={() => navigate(-1)}
      >
        ←
      </h1>

      {/* Heading */}
      <header className="flex items-center flex-col justify-center mt-4 text-center">
        <h1 className="font-serif text-[28px] sm:text-[32px] md:text-[38px] font-extrabold capitalize">
          services
        </h1>

        {/* Cards */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full py-10 place-items-center">
          {ServiceData.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[90%] md:w-[95%] h-[310px] flex flex-col justify-start hover:scale-105 transition-transform duration-200 p-6 rounded-2xl text-center border bg-white/70 backdrop-blur-sm 
              shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.55)]"
            >
              <h1 className="text-red-600 flex justify-center text-5xl">
                {item.icon}
              </h1>
              <h1 className="font-serif font-extrabold text-[20px] sm:text-[22px] mt-3">
                {item.title}
              </h1>
              <p className="text-[15px] sm:text-[16px] mt-4 font-serif leading-relaxed px-1">
                {item.description}
              </p>
            </div>
          ))}
        </main>
      </header>
    </div>
  );
}

export default Service;
