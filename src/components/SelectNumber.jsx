import { createClient } from "@supabase/supabase-js";
import { useBookStore } from "../store";
import shallow from 'zustand/shallow'

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
    yield i;
  }
}

// Range from DataBase.
const numbers = [...range(1, 1000)];

const clickButton = (event) => {
  // Save data in global state.
  console.log(event.target.id);
};

export default function SelectNumber() {


  return (
    <>
      <h1
        id="second"
        className="w-full  text-center text-4xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 my-20 "
      >
        ¿Cuál Será tu Número Ganador? Elige Ahora
      </h1>
      <div className=" container-scroll grid grid-cols-10 text-white h-[50vh] overflow-y-scroll px-24  place-items-center gap-4 w-[80%]">
        {numbers.map((number) => {
          if (listica_db.includes(number)) {
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
              className="w-20 h-8 bg-red-700 rounded "
            >
              {number}
            </button>
          );
        })}
      </div>
    </>
  );
}
