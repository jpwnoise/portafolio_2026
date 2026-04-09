'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import ContactImage from "../components/ContactImage";
import AnimatedContactImage from "../components/AnimatedContactImage";

export default function Home() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="h-screen max-w-sm p-2 bg-linear-to-b from-[rgb(0,68,131)] to-[rgb(113,155,223)] flex flex-col items-center justify-content-center rounded-lg shadow-lg">
            <div className="bg-linear-to-b from-[rgb(0,68,131)] to-[rgb(136,170,225)] w-full h-full p-1">
                <div className="bg-linear-to-b  from-[rgb(0,68,131)] to-[rgb(113,155,223)] w-full h-full">
                    <AnimatedContactImage />
                    <motion.div className="p-4 text-gray-100">
                        <p style={{ fontFamily: 'var(--font-poppins)' }}>Ingeniero Pablo Hernández</p>
                        <p >Desarrollador Fullstack</p>
                    </motion.div>
                </div>
            </div>

        </motion.section>)
}