import Image from "next/image";

export default function ContactImage() {
    return (<section className="relative group flex items-center">

        {/* 🔵 PANEL DE CONTACTO */}
        <div className="
    absolute left-0
    flex flex-col gap-2
    pl-28
    opacity-0 translate-x-[-20px]
    group-hover:opacity-100 group-hover:translate-x-0
    transition-all duration-500 ease-out
  ">

            <h2 className="text-gray-700 font-semibold mb-2">Contacto</h2>

            {/* EMAIL */}
            <button className="
      bg-gradient-to-r from-gray-700 to-gray-900
      text-white px-4 py-2 rounded-lg shadow-md
      opacity-0 translate-y-2
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 delay-100
      hover:scale-105
    ">
                📧 pablodev1@outlook.com
            </button>

            {/* TELÉFONO */}
            <button className="
      bg-gradient-to-r from-[rgb(104,117,142)] to-[rgb(74,97,138)]
      text-white px-4 py-2 rounded-lg shadow-md
      opacity-0 translate-y-2
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 delay-200
      hover:scale-105
    ">
                📱 +52 331-326-2108
            </button>

            {/* UBICACIÓN */}
            <button className="
      bg-gradient-to-r from-[rgb(104,142,119)] to-[rgb(69,133,90)]
      text-white px-4 py-2 rounded-lg shadow-md
      opacity-0 translate-y-2
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 delay-300
      hover:scale-105
    ">
                📍 Tlaquepaque, Jalisco
            </button>

            {/* MENSAJE */}
            <button className="
      bg-gradient-to-r from-[rgb(175,155,103)] to-[rgb(179,130,66)]
      text-white px-4 py-2 rounded-lg shadow-md
      opacity-0 translate-y-2
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 delay-400
      hover:scale-105
    ">
                💬 Mensaje web
            </button>
        </div>


        {/* 🟣 IMAGEN */}
        <div className="
    relative z-10
    transition-transform duration-500 ease-out
    group-hover:-translate-x-24
  ">
            <Image
                src="/pablo.png"
                alt="Pablo Hernández"
                width={200}
                height={200}
                className="
        rounded-full border-4 border-gray-400 
        shadow-xl
      "
            />
        </div>

    </section>)
}