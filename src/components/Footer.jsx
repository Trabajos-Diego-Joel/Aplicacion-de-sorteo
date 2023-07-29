import logo from "../assets/logo.svg";
import emailIcon from "../assets/email-icon.svg";
import wsIcon from "../assets/ws-icon.svg";

import { Link } from "wouter";

const owner = "BR-teamoficial";

export default function Footer() {
  return (
    <div className="flex h-[40vh] py-20 px-20">
      <div className="w-3/4">
        <div className="flex mb-10" >
          <img className="w-20" src={logo} alt="logo" />
          {/* Nav Liks */}
          <div className="flex justify-center items-center gap-20 ml-[20%] ">
            <Link className="text-lg" to="/">
              Inicio
            </Link>
            <Link className="text-lg" to="/rank">
              Rank
            </Link>
            <Link className="text-lg" to="/numeros-confirmados">
              Numeros Confirmados
            </Link>
          </div>
        </div>
        <p>
          © 2023. Derechos Reservados.
        </p>
      </div>
      {/* Social Links */}
      <div className="flex flex-col gap-4 w-1/4 ">
        {/* Email */}
        <div className="flex items-center gap-4">
          <img className="w-8" src={emailIcon} alt="email" />
          <a href="#">
          info@BR-teamoficial.com
          </a>
        </div>
        {/* WhatsApp */}
        <div className="flex items-center gap-4">
          <img className="w-8" src={wsIcon} alt="email" />
          <a href="#">
          +57 301 000 0000
          </a>
        </div>
        <p className="mt-6">
        Sorteos realizados por {owner}
        </p>
      </div>
    </div>
  );
}
