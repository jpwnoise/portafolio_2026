import Image from "next/image";
import { FaEnvelope, FaPhone, FaMarkdown } from 'react-icons/fa'

interface ContactRow {
    info: string;
    icon: React.ReactNode;
    background: string;

}

interface ContactImageProps {
    width?: number;
    height?: number;
    data?: ContactRow[]
}

const ContactData: ContactRow[] = [
    {
        info: "pablodev1@outlook.com",
        icon: <FaEnvelope />,
        background: 'bg-linear-to-r from-gray-100 to-gray-200'
    },
    {
        info: "331-326-2108/332-152-8819",
        icon: <FaPhone />,
        background: 'bg-linear-to-r from-gray-100 to-gray-200'
    },
    {
        info: "Tlaquepaque,Jalisco",
        icon: <FaMarkdown />,
        background: 'bg-linear-to-r from-gray-100 to-gray-200'
    },
    {
        info: "Mensaje web",
        icon: <FaEnvelope />,
        background: 'bg-linear-to-r from-gray-100 to-gray-200'
    },

]

export default function ContactImage({ width = 150, height = 150, data = ContactData }: ContactImageProps) {
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

            {data ? data.map((row, index) => (
                <button key={index} className={`${row.background} text-white px-4 py-2 rounded-lg shadow-md
      opacity-0 translate-y-2
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-500 delay-100
      hover:scale-105`} >
                    {row.icon}
                    {row.info}
                </button>
            )) : <div>no data</div>
            }

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
        </div>

    </section>
    )
}