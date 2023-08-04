import logo from "../assets/logo.svg";
import emailIcon from "../assets/email-icon.svg";
import wsIcon from "../assets/ws-icon.svg";

import { Link } from "wouter";

const owner = "BR-teamoficial";

export default function Footer() {
  return (
    <div className="md:flex py-10 md:h-[40vh] md:py-10 md:px-10">
      <div className="md:w-3/4">
        <div className="md:flex  mb-10" >
          <img className="md:w-20 md:pl-0 pl-36 mb-10"  src={logo} alt="logo" />
          {/* Nav Liks */}
          <div className="md:flex text-center md:pl-0 pl-0  ml-[0%] md:justify-center md:items-center md:gap-20 md:ml-[20%] ">
            <div className="md:mb-0 mb-4">
            <Link className="text-2xl hover:scale-125 duration-300 font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300" to="/">
              Inicio
            </Link>
            </div>
            <div className="md:mb-0 mb-4">
            <Link className="text-2xl hover:scale-125 duration-300 font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300" to="/rank">
              Rank
            </Link>
            </div>
           <div>
           <Link className="text-2xl hover:scale-125 duration-300 font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300" to="/numeros-confirmados">
              Numeros Confirmados
            </Link>
           </div>
          </div>
        </div>
        <p className="font-semibold md:text-left text-center">
          © 2023. Derechos Reservados.
        </p>
      </div>
      {/* Social Links */}
      <div className="md:flex  md:flex-col mt-6 md:gap-4 md:w-1/4 ">
        {/* Email */}
        <div className="md:flex justify-center flex mb-4 md:items-center md:gap-4">
          <img className="md:w-8" src={emailIcon} alt="email" />
          <a href="#" className="font-semibold">
          info@BR-teamoficial.com
          </a>
        </div>
        {/* WhatsApp */}
        <div className="md:flex justify-center flex mb-4 md:items-center md:gap-4">
          <img className="md:w-8" src={wsIcon} alt="email" />
          <a href="#" className="font-semibold">
          +57 301 000 0000
          </a>
        </div>
        <p className=" text-center mt-6 font-semibold">
        Sorteos realizados por {owner}
        </p>
      </div>
    </div>
  );
}
