import { useSelector } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useLocation } from "wouter"

// UUID para generar un ID único para cada imagen
import { v4 as uuidv4 } from 'uuid';




// SUpabase Connection.
const supabase = createClient(
  "https://oyltvjfmloodupovoqoe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95bHR2amZtbG9vZHVwb3ZvcW9lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDY2MjgyMSwiZXhwIjoyMDA2MjM4ODIxfQ.SwX21h80-C0yk9K19vk_UerdvH8CwVVSJRrHX9Q8MJA"
);

export default function FormData() {

  const [location, navigate ] = useLocation()


  const { selectedNumber, tickets } = useSelector(
    (state) => state.numero
  );
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const [selectedFile, setSelectedFile] = useState(null);

  const rifa = "Iphone 14 pro max.";
  const accounts = [
    {
      name: "Nequi",
      number: "30175353553",
      description: "Solo transferencias bancarias",
      important: true,
    },
    {
      name: "Western Union",
      number: "30175353553",
      description: "Solo transferencias bancarias",
      important: true,
    },
    {
      name: "Bancolombia",
      number: "30175353553",
      description: "Solo transferencias bancarias",
      important: true
    }
  ];

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const setFormData = async (event) => {
    event.preventDefault();
  
    const full_name = event.target["full-name"].value;
    const document = event.target["document"].value;
    const email = event.target["email"].value;
    const whatsapp = event.target["whatsapp"].value;
    const city = event.target["city"].value;
  
    const formData = {
      full_name,
      documento:document,
      email:email,
      number:whatsapp,
      city:city,
      numbers: selectedNumber,
      monto: numberToCurrency(tickets * 20000)
    };
    if (selectedFile) {
      try {
        const fileData = await supabase.storage.from('users').upload(full_name.trim() + `${day}-${month}-${year}` + uuidv4(), selectedFile);

        const { data, error } = await supabase.storage.from('users').createSignedUrl(fileData.data?.path, 604800);
  
        if (error) {
          console.error('Error al obtener la URL firmada:', error);
        } else {
          formData.screenshot = data.signedUrl;
        }

        await supabase.from("users").insert([formData]);
      Swal.fire(
        '¡Gracias por participar en la rifa del iPhone 11 Pro Max!',
        'Hemos recibido tu compra con éxito y tu número de rifa ha sido reservado. Pronto recibirás una notificación por WhatsApp con los detalles de tu participación.',
        'success',
      )

      setTimeout(() => navigate("", { replace: true }), 2000)
      } catch (error) {
        console.log('Error al subir la imagen:', error);
      }
    }

  };
  const numberToCurrency = (number) => {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(number);
  };
  

  return (
    <div className="md:flex  md:justify-center md:px-20 md:py-20 px-5 py-0">
      <div className="md:px-10 py-10 md:w-1/4 border-r-2 md:border-gray-300">
        {/* Selected Numbers */}
        <div className="py-2">
          <h3 className="text-black font-bold">NUMEROS SELECCIONADOS</h3>
          <div className="flex flex-wrap h-20 gap-4 overflow-y-scroll my-6">
            {selectedNumber.map((number) => (
              <span
                className="grid place-items-center h-6 w-16 text-white bg-green-400 px-[15px]"
                key={number}
              >
                {number}
              </span>
            ))}
          </div>
        </div>

        <div className="md:bg-gray-300-400 my-0 md:h-[0.5px] md:my-2"></div>

        {/* Payment date */}
        <div className="my-4">
          <h3 className="text-black font-bold">FECHA DE PAGO</h3>
          <span className="text-slate-600 pl-2">{`${day}-${month}-${year}`}</span>
        </div>

        {/*  Payment Detail */}
        <div className="my-4">
          <h3 className="text-black font-bold">DETALLE DE PAGO</h3>
          <p className="text-slate-600 pl-2">
            {tickets} numeros para la rifa {rifa}
          </p>
          <span className="text-black pl-2">{numberToCurrency(tickets * 20000)}</span>
        </div>

        <div className="bg-gray-300 h-[0.5px] my-2 "></div>

        {/* Accounts */}

        {/* Payment Method */}
        {accounts.map((account) => (
          <div className="my-4" key={account.name}>
            <h3 className="text-black font-bold">{account.name}</h3>
            <p className="text-slate-600 pl-2">
              {account.number} ( {account.description} )
            </p>
            {account.important && (
              <span className="text-black font-bold pl-2">IMPORTANTE</span>
            )}
          </div>
        ))}
      </div>
      <form
        className="md:flex md:flex-col md:justify-center md:items-center md:gap-4 md:w-2/4 md:px-20 px-0"
        onSubmit={setFormData}
      >
        {/* Document */}
        <div className="flex  w-full gap-4  md:pb-0 pb-4">
          <input
            className="w-[100%] border-2  px-4 py-4  text-lg "
            type="text"
            placeholder="Nombre Completo"
            name="full-name"
            required
          />
        </div>

        <div className="flex  w-full md:gap-4 gap-1 md:pb-0 pb-4">
          <input
            className="w-[50%] border-2 px-4 py-4  text-lg "
            type="text"
            placeholder="Documento*"
            name="document"
            required
          />
          <input
            className="w-[50%] border-2 px-8 py-4  text-lg "
            type="text"
            placeholder="E-mail*"
            name="email"
            required
          />
        </div>

        <div className="flex  w-full md:gap-4 gap-1 md:pb-0 pb-4 ">
          <input
            className="w-[50%] border-2 px-4 py-4  text-lg "
            type="text"
            placeholder="Whatsapp*"
            name="whatsapp"
            required
          />
          <input
            className="w-[50%] border-2   px-8 py-4  text-lg "
            type="text"
            placeholder="Ciudad*"
            name="city"
            required
          />
        </div>
              <div className="md:pb-0 pb-4 ">
              <input
          className="w-full border-2  px-8 py-4  text-lg  "
          type="file"
          placeholder="Constancia de Pago*"
          name="invoice"
          onChange={handleFileChange}
          required
        />
              </div>
      <div className="md:pb-0 pb-4 flex justify-center">
      <button
          type="submit"
          className=" border-blue-500 md:px-10 p-4 py-4 text-2xl font-semibold rounded border-4 text-transparent bg-gradient-to-r bg-clip-text from-indigo-800 via-fuchsia-600 to-pink-300"
       
        >
          Comprar
        </button>
      </div>
      </form>
    </div>
  );
}
