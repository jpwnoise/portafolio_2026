'use client';

import { motion } from "framer-motion";
import RoundedImage from "../components/RoundedImage";
import ExperiencePro from "../components/experiencia";
import SliderProjects from "../components/SliderProjects";
import Frameworks from "../components/Frameworks";
import ProjectsGrid from "../components/ProjectGrid";

export default function Home() {
    return (
        <div className="grid grid-cols-[320px_1fr] min-h-screen">
        <div className="container-3d sticky top-0 h-screen flex items-center justify-center">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-screen max-w-sm p-2 bg-linear-to-b from-[rgb(0,68,131)] to-[rgb(113,155,223)] flex flex-col items-center justify-content-center rounded-lg shadow-lg card-3d">
                <div className="bg-linear-to-b from-[rgb(0,68,131)] to-[rgb(171,191,225)] w-full h-full p-1 ">
                    <div className="bg-linear-to-b  from-[rgb(0,68,131)] to-[rgb(113,155,223)] w-full h-full hexagonal-pattern">

                        <RoundedImage />

                            <p style={{ fontFamily: 'var(--font-poppins)' }}>Ingeniero Pablo Hernández</p>
                        <motion.div className="bg-black/10 p-4 text-gray-100 backdrop-blur-xs border border-gray-100/50 rounded m-2 shadow-2xl hover:scale-105 transition">
                            <p >Desarrollador Fullstack</p>
                        </motion.div>

                        <motion.div className="bg-black/10 p-4 text-gray-100 backdrop-blur-xs border border-gray-100/50 rounded m-2 shadow-2xl hover:scale-105 transition">
                            <p style={{ fontFamily: 'var(--font-poppins)' }}>
                                Egresado en 2016 en Guadalajara, Jalisco
                            </p>
                            <p>Experiencia en desarrollo de software en general</p>
                            <ul>
                                <li>Sistenas operativos
                                    <ul>
                                        <li>Windows</li>
                                        <li>Linux</li>
                                    </ul>
                                </li>
                                <li>Scripts
                                    <ul>
                                        <li>python</li>
                                        <li>bash</li>
                                    </ul>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>

            </motion.section>
        </div>
        <div>
            <ExperiencePro/>           
            <Frameworks/>
            <SliderProjects/>
            <ProjectsGrid/>
        </div>
                    </div>
    )
}