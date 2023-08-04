import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "wouter";
import { ticketsQuantity } from "../redux/numberSlice";


export default function Card({number}) {


  const [location, navigate] = useLocation();
  const dispatch = useDispatch();

  const clickButton = (event) => {
    // Save data in global state.
    console.log(event);
    dispatch(ticketsQuantity(Number(event)));

    // Navigate to the next page.
    // eslint-disable-next-line no-unused-vars
    navigate("resumen-compra");


  };

  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  const numberToCurrency = (number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number);
  };

  return (
    <div
      className={`grid place-items-center md:mt-5 mt-10 relative  w-[16rem]  h-[16rem] shadow-lg shadow-indigo-500/50 rounded-xl cursor-pointer hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ${
        hover ? 'hover:bg-gradient-to-r from-indigo-800 via-fuchsia-600 to-pink-300' : 'hover:bg-white'
        
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
        <span className={`text-xl font-bold top-5 absolute text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 ${
          hover ?  'from-transparent to-transparent': 'from-indigo-800 via-fuchsia-600 to-pink-300'
        }`}>{numberToCurrency(number * 20000)}</span>

        <span
        className={`text-8xl font-extrabold text-transparent bg-gradient-to-r bg-clip-text ${
          hover ?  'from-transparent to-transparent': 'from-indigo-800 via-fuchsia-600 to-pink-300'
        }`}
      >
        {number}
      </span>
      <button
        id={number}
        onClick={(event) => clickButton(event.target.id)}
        className={`absolute text-xl font-bold border border-4 px-6 py-2 rounded-lg ${hover ? '' : 'hidden'} hover:bg-white hover:text-black hover:border-none transition ease-in-out delay-150`}
      >
        ¡Adquirir!
      </button>
     
    </div>
  )
}
