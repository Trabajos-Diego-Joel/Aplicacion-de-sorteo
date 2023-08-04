import { Link } from "wouter";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { MdClose } from "react-icons/md";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hidden md:flex  items-center h-[12vh]  mt-10 ">
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
          <Link className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 hover:scale-125 duration-300" to="/">
            Inicio
          </Link>
          <Link className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 hover:scale-125 duration-300" to="/rank">
            Rank
          </Link>
          <Link className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300 hover:scale-125 duration-300" to="/numeros-confirmados">
            Numeros confirmados
          </Link>
        </div>
      </div>
      <div className="md:hidden flex justify-between items-center py-8">
        <Link to="/">
          {/* Logo Image */}
          <img className="w-16 ml-16 cursor-pointer " src={logo} alt="logo" />
        </Link>
        <button onClick={toogleNavbar}>
          {isOpen ? <MdClose className="w-16" /> : <TfiMenu className="w-16" />}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center basis-full gap-9">
          <Link className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300" to="/">
            Inicio
          </Link>
          <Link className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300" to="/rank">
            Rank
          </Link>
          <Link className="text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300" to="/numeros-confirmados">
            Numeros Confirmados
          </Link>
        </div>
      )}
    </>
  );
}
