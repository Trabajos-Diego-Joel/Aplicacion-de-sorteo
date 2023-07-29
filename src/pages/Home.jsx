import iphone from "../assets/iphone14.png";
import Card from "../components/Card";

// Number Cards.
const cards_numbers = [1, 2, 3, 4, 10, 20, 50, 100];

const customNumbers = () => {};

// fecha de sorteo en ingles
const dateLottery = {
  day: "29",
  month: "Septiembre",
  lottery: "Medellin",
};

export default function Home() {
  return (
    <>
      {/* First Section */}
      <div className="flex mt-10">
        {/* Text */}
        <div className="w-3/5 pl-32  ">
          {/* Title */}
          <h1 className="text-6xl font-bold  pt-10">
            ¡Participa y Gana un iPhone 14 pro max en Nuestra Gran Rifa!
          </h1>
          {/* Description */}
          <p className="my-14 pl-10 text-2xl text-[#656565]">
            ¡Participa en nuestra rifa y podrías ganar un iPhone 14 pro max!
            Obtén tu boleto ahora para tener la oportunidad de disfrutar este
            increíble teléfono inteligente de Apple. ¡No te lo pierdas!
          </p>
          {/* Button */}
          <a
            href="#second"
            className=" ml-10 border border-blue-500  px-10 py-4 text-2xl font-semibold rounded border-4"
          >
            ¡Participa!
          </a>
        </div>
        {/* Phone Image */}
        <div className="w-2/5 pl-14">
          <img className="w-[65%]" src={iphone} alt="iphone-14" />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center mt-20">
        {/* Title */}
        <h1 id="second" className="w-full  text-center text-4xl font-bold">
          HAZ REALIDAD TUS SUEÑOS, ELIGE TUS NÚMEROS
        </h1>
        {/* Numbers Container */}
        <div className="grid grid-cols-4 mt-10 h-screen w-full px-[10%] py-20 place-items-center">
          {cards_numbers.map((number) => (
            <Card key={number} number={number} />
          ))}
        </div>
        {/* Custom Numbers Button */}
        <div className="grid place-items-center">
          <button
            onClick={() => customNumbers}
            className=" border border-blue-500  px-10 py-4 text-2xl font-semibold rounded border-4"
          >
            ¡Elige tus números!
          </button>
        </div>
      </div>

      {/* Third Section */}
      <div className="mt-20 h-[80vh] bg-senior bg-cover text-white px-20 py-20">
        {/* Title */}
        <h1 className="w-3/5 text-4xl font-bold mb-40">
          ¿Quién se llevará el iPhone 14 Pro Max? Comprueba el Avance de la Rifa
        </h1>

        {/* Progress bar */}
        <div className=" relative pt-1 w-1/3">
          <div className="overflow-hidden h-10 mb-4 text-xs flex rounded bg-[#51515191]">
            <div
              style={{ width: "52%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            >
              <span className="my-auto mx-auto text-lg">52.39% Completado</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="font-bold">
          este sorteo se realizará el {dateLottery.day} DE {dateLottery.month}{" "}
          con la Loteria {dateLottery.lottery}
        </p>
      </div>
    </>
  );
}
