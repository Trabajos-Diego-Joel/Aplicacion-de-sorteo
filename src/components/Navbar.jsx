import { Link } from "wouter";

import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="flex items-center h-[12vh] px-14 mt-10 ">
      {/* Logo */}
      <div>
        {/* Logo Link */}
        <Link to="/">
          {/* Logo Image */}
          <img className="w-16 ml-16 cursor-pointer " src={logo} alt="logo" />
        </Link>
      </div>
      {/* Nav Links */}
      <div className="flex justify-center gap-20 ml-[20%]">
        <Link className="text-2xl" to="/">
          Inicio
        </Link>
        <Link className="text-2xl" to="/rank">
          Rank
        </Link>
        <Link className="text-2xl" to="/numeros-confirmados">
          Numeros Confirmados
        </Link>
      </div>
    </div>
  );
}
