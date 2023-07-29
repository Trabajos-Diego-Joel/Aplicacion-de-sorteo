

export default function Card({number}) {
  return (
    <div className="grid place-items-center w-[16rem] h-[16rem] shadow-lg shadow-indigo-500/50 rounded-xl cursor-pointer hover:text-red-600">
        <span className="text-8xl font-extrabold">{number}</span>
        <button className="absolute hidden ">
            ¡Adquirir!
        </button>
    </div>
  )
}
