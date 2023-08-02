import { User } from "../user"

export default function Rank() {

  function compareByNumerosLength(userA, userB) {
    return userB.numeros.length - userA.numeros.length;
  }
  User.sort(compareByNumerosLength);

  const sortedUser = [...User].sort(compareByNumerosLength);

  const numberToCurrency = (number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number);
  };

  return (
    <div className="p-5 h-screen bg-gray-100">
      <div className="py-8">
        <p className="text-center text-2xl font-medium text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300">Nuestro Top De Voletas Vendidas</p>
      </div>
       <div className="overflow-auto rounded-lg shadow">
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
            sortedUser.map((user, index) => (
              <tr className="bg-white" key={user.id}>
                <td className="p-3 text-lg text-gray-700 whitespace-nowrap">{index + 1}</td>
                <td className="p-3 text-lg text-gray-700 whitespace-nowrap">{user.fullName}</td>
                <td className="p-3 text-lg text-gray-700 whitespace-nowrap">{user.numeros.length} ( {numberToCurrency(user.numeros.length * 20000)} )</td>
              </tr>
            ))
          }
          </tbody>
        </table>
       </div>
      </div>

  )
}
