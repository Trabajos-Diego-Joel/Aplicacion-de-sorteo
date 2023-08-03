import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";


const supabase = createClient(
  "https://oyltvjfmloodupovoqoe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bHR2amZtbG9vZHVwb3ZvcW9lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDY2MjgyMSwiZXhwIjoyMDA2MjM4ODIxfQ.SwX21h80-C0yk9K19vk_UerdvH8CwVVSJRrHX9Q8MJA"
);

export default function ConfirmedNumbers() {

  const [data, setData] = useState([])
    
  useEffect(() => {
    fetchUsersWithValidation();
  }, []);
  const fetchUsersWithValidation = async() => {
    try {
      // Realiza la consulta a la base de datos
    let { data: users, error } = await supabase
    .from('users')
    .select('*')
    .eq('validated', true);

  if (error) {
    throw error;
  }

  // Ejemplo: Actualizar el estado del componente con los datos obtenidos
  setData(users);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error.message);
    }
  }

  return (
    <div>
      <div className="p-5 h-screen bg-gray-100">
      <div className="py-8">
        <p className="text-center text-2xl font-medium text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300">Numeros Confirmados</p>
      </div>
       <div className="overflow-auto rounded-lg shadow">
       <table className="w-full">
      <thead className="bg-gray-50 border-b-2 border-gray-500">
        <tr>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Números</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {data.map((user) => (
          <tr key={user.documento} className="bg-white">
            <td className="p-3 text-lg text-gray-700 whitespace-nowrap">{user.full_name}</td>
            <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
              <ul className="flex">
                {user.numbers.map((numero, index) => (
                  <div className="flex justify-center" key={index}>
                    <li className="px-2">{numero},</li>
                  </div>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
       </div>
      </div>
    </div>
  )
}
