import { useState } from "react";
import { useEffect } from "react";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://oyltvjfmloodupovoqoe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bHR2amZtbG9vZHVwb3ZvcW9lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDY2MjgyMSwiZXhwIjoyMDA2MjM4ODIxfQ.SwX21h80-C0yk9K19vk_UerdvH8CwVVSJRrHX9Q8MJA"
);



export default function Rank() {

  const [data, setData] = useState([])

  
  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    let { data: users, error } = await supabase
    .from('users')
    .select("*")
    .eq('validated', true);
  
  // Filtrar aquellos usuarios cuyo array tenga al menos un número
  users = users.filter((user) => user.numbers && user.numbers.length > 0);
  
  // Ordenar los usuarios por la longitud del array en orden descendente
  users.sort((a, b) => b.numbers.length - a.numbers.length);
  
  // Obtener solo los primeros 5 usuarios con más números en el array
  const topFiveUsers = users.slice(0, 30);
    setData(topFiveUsers)
  }

  const numberToCurrency = (number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number);
  };

  return (
    <div className="p-5 h-screen bg-gray-100">
      <div className="py-8">
        <p className="text-center text-2xl font-medium text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300">Nuestro Top 30 De Voletas Mas Vendidas</p>
      </div>
       <div className="overflow-y-scroll h-[90%] rounded-lg shadow ">
       <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-500">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">#</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre Cliente</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Cantidad ($)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
          {
            data.map((user, index) => (
              <tr className="bg-white" key={user.id}>
                <td className="p-3 text-lg text-gray-700 whitespace-nowrap">{index + 1}</td>
                <td className="p-3 text-lg text-gray-700 whitespace-nowrap">{user.full_name}</td>
                <td className="p-3 text-lg text-gray-700 whitespace-nowrap">{user.numbers?.length} ( {numberToCurrency(user.numbers?.length * 20000)} )</td>
              </tr>
            ))
          }
          </tbody>
        </table>
       </div>
      </div>

  )
}
