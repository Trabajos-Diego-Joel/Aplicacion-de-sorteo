import { createClient } from "@supabase/supabase-js";
import { selectNumber } from "../redux/numberSlice";
import { useDispatch, useSelector } from "react-redux";
// SUpabase Connection.
const supabase = createClient(
  "https://oyltvjfmloodupovoqoe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bHR2amZtbG9vZHVwb3ZvcW9lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDY2MjgyMSwiZXhwIjoyMDA2MjM4ODIxfQ.SwX21h80-C0yk9K19vk_UerdvH8CwVVSJRrHX9Q8MJA"
);

// Functionalities.

// Numbers Data.
let { data: users, error } = await supabase
  .from("users")
  .select("numbers")
  .eq("validated", "true");

// Concatenate all arrays into one.
let listica_db = [];
users.map((user) => {
  listica_db = listica_db.concat(user.numbers);
});

// Range Calculate.
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    // Si el número es menor que 10, agrega un cero a la izquierda
    const formattedNumber = i < 10 ? `0${i}` : `${i}`;
    yield formattedNumber;
  }
}



export default function SelectNumber() {

  const {selectedNumber} = useSelector(state => state.numero)
 
  const dispatch = useDispatch()
// Range from DataBase.
const numbers = [...range(0, 999)];

const clickButton = (event) => {
  // Save data in global state.
  dispatch(selectNumber(event.target.id))
};

  return (
    <>
      <h1
        id="second"
        className="w-full  text-center text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 my-10"
      >
        ¿Cuál Será tu Número Ganador? Elige Ahora
      </h1>
    
      <div className=" container-scroll grid grid-cols-10 text-white h-[50vh] overflow-y-scroll px-24  place-items-center gap-4 w-[80%]">
        {numbers.map((number) => {
          if (listica_db.includes(number) ) {
            return (
              <button
                onClick={(event) => clickButton(event)}
                key={number}
                id={number}
                className="w-20 h-8 bg-gray-600 rounded"
              >
                {number}
              </button>
            );
          }
          return (
            <button
              onClick={(event) => clickButton(event)}
              key={number}
              id={number}
              className={
                selectedNumber.includes(number) ? "w-20 h-8 bg-green-600" : "w-20 h-8 bg-red-600"
              }
            >
              {number}
            </button>
          );
        })}
      </div>
      <div className="flex pt-10 justify-between items-center gap-16">
        <div className="">
        <a
            href="#second"
            className="md:ml-10 ml-20 border-blue-500 px-10 py-4 text-2xl font-semibold rounded border-4 text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 "
          >
            Atras
          </a>
        </div>
        <div className="pb-8">
        <p className="font-semibold text-2xl text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 my-14 ">Numero De Boletas Seleccionadas {selectedNumber.length}</p>
      </div>
        <div className="">
        <a
            href="#second"
            className="md:ml-10 ml-20 border-blue-500 px-10 py-4 text-2xl font-semibold rounded border-4 text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 "
          >
            Comprar
          </a>
        </div>
      </div>
    </>
  );
}
