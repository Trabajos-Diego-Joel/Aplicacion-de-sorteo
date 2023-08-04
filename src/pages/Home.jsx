import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "wouter";
import Card from "../components/Card";

import { ticketsQuantity, selectNumber } from "../redux/numberSlice";

const supabase = createClient(
  "https://oyltvjfmloodupovoqoe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bHR2amZtbG9vZHVwb3ZvcW9lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDY2MjgyMSwiZXhwIjoyMDA2MjM4ODIxfQ.SwX21h80-C0yk9K19vk_UerdvH8CwVVSJRrHX9Q8MJA"
);

// Number Cards.
const cards_numbers = [1, 2, 3, 4, 10, 20, 50, 100];

// fecha de sorteo en ingles
const dateLottery = {
  day: "29",
  month: "Septiembre",
  lottery: "Medellin",
};

export default function Home() {
  const [location, navigate] = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ticketsQuantity(0));
    dispatch(selectNumber());
  }, []);

  const [dataUsers, setDataUsers] = useState([]);


  const getData = async () => {
    // Numbers Data.
    let { data: users, error } = await supabase
    .from("users")
    .select("numbers")
    .eq("validated", "true");
  
    setDataUsers(users)
  
  }
  
  useEffect(() => {
    getData()
  }, []);
  
  // Concatenate all arrays into one.
  let listica_db = [];
  dataUsers?.map((user) => {
  listica_db = listica_db.concat(user.numbers);
  });

  // Calcula el porcentaje completado
  console.log(listica_db.length)
  const porcentajeCompletado = (listica_db.length / 1000) * 100;

  const customNumbers = () => {
    // Save data in global state.
    dispatch(ticketsQuantity(0));

    // Navigate to the next page.
    navigate("resumen-compra");
  };

  return (
    <>
      <div className="md:flex items-center justify-center md:mt-10 ">
        {/* Text */}
        <div className="md:w-3/5 w-4/5 md:pl-32">
          {/* Title */}
          <h1 className="md:text-6xl text-2xl font-bold w-full pt-8 ml-16 md:font-bold md:pt-10 text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300">
            ¡Participa y gana un iPhone 14 pro max en nuestra gran rifa!
          </h1>

          {/* Description */}
          <p className="md:my-14 my-10 text-xl md:pl-10 pl-16 md:text-xl text-[#656565]">
            ¡Participa en nuestra rifa y podrías ganar un iPhone 14 pro max!
            obtén tu boleto ahora para tener la oportunidad de disfrutar este
            increíble teléfono inteligente de Apple. ¡No te lo pierdas!
          </p>
          {/* Button */}
          <a
            href="#second"
            className="md:ml-10 ml-20 border-blue-500 px-10 py-4 text-2xl font-semibold rounded border-4 text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 "
          >
            ¡Participa!
          </a>
        </div>

        {/* Phone Image */}
        <div className="md:w-2/5 md:pl-14 flex justify-center flex-grow items-center">
          <img
            className="md:w-[65%] w-[40%] pt-16 hover:scale-125 duration-300"
            src="https://oyltvjfmloodupovoqoe.supabase.co/storage/v1/object/sign/website/iphone14.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL2lwaG9uZTE0LnBuZyIsImlhdCI6MTY5MTA3NzI5MCwiZXhwIjoxNzIyNjEzMjkwfQ.aPZt66XQ5REjYBVuNdpW9styP5tucj21Fs36t02_cY4&t=2023-08-03T15%3A38%3A15.654Z"
            alt="iphone-14"
          />
        </div>
      </div>

      {/* Second Section */}
      {/* Second Section */}
      <div className="flex flex-col  justify-center mt-20">
        {/* Title */}
        <h1
          id="second"
          className="md:w-full  px-4 text-center md:text-4xl text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300"
        >
          Haz realidad tus sueños, elije tus numeros
        </h1>
        {/* Numbers Container */}
        <div className="md:grid md:grid-cols-4 flex flex-col justify-center md:mt-10 md:h-screen md:w-full md:px-[10%] py-20 place-items-center">
          {cards_numbers.map((number) => (
            <Card key={number} number={number} />
          ))}
        </div>
        {/* Custom Numbers Button */}
        <div className="grid place-items-center">
          <button
            onClick={() => customNumbers()}
            className=" border border-blue-500  px-10 py-4 text-2xl font-semibold rounded border-4 text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300"
          >
            ¡Elige tus números!
          </button>
        </div>
      </div>

      {/* Third Section */}
      <div className="mt-20 md:h-[80vh] h-[60vh] bg-senior bg-cover bg-no-repeat text-white md:px-20 px-6 md:py-20 py-10">
        {/* Title */}
        <h1 className="md:w-3/5 md:text-4xl w-full text-xl font-bold md:mb-40 mb-20  ">
          ¿Quién se llevará el iPhone 14 Pro Max? comprueba el avance de la rifa
        </h1>

        {/* Progress bar */}
        <div className=" relative pt-1 md:w-1/3 w-4/5 ">
          <div className="overflow-hidden h-10 mb-4 text-xs md:flex flex rounded bg-[#51515191]">
            <div
              style={{ width: `${porcentajeCompletado}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-800 via-fuchsia-600 to-pink-300"
            >

            </div>
      <div className="absolute flex justify-center items-center text-center  w-full h-full">
        <span className="text-lg">{porcentajeCompletado.toFixed(2)}% Completado</span>
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
