import { User } from "../user"

export default function ConfirmedNumbers() {
  const usuerValidate = User.filter(usuario => usuario.validado)

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
        {usuerValidate.map((user) => (
          <tr key={user.id} className="bg-white">
            <td className="p-3 text-lg text-gray-700 whitespace-nowrap">{user.fullName}</td>
            <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
              <ul className="flex">
                {user.numeros.map((numero, index) => (
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
