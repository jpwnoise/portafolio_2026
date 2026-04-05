'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
const ejemploMariscos = () => {
    return (
        <motion.div
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-xl"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-full bg-white/50 shadow-md"
            >
                <FaUtensils className="text-5xl text-gray-800" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl text-gray-800"
            >
                Vendes productos como{" "}
                <span className="font-bold italic text-red-600">
                    Mariscos
                </span>
            </motion.p>
        </motion.div>
    );
};

const revisaEjemplo = () => {
    return (
        <motion.div
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-xl"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-full bg-white/30 shadow-md"
            >
                <FaArrowRight className="text-5xl text-white" />
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl text-white font-semibold"
            >
                Revisa el siguiente ejemplo
            </motion.p>

            <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm text-white/80"
            >
                👇 Desliza para verlo
            </motion.span>
        </motion.div>
    );
};


interface Frase {
    content: React.ReactNode;
    inicial: { x: string; y: string };
    gradient: string;
}

interface AdNovilleroProps {
    onComplete?: () => void; // handler que se llama al terminar
}

// 🔥 Animación base reutilizable
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
};

const masClientes = () => {
    return (
        <motion.div
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-xl"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-full bg-white/50 shadow-md"
            >
                <FaUsers className="text-5xl text-gray-800" />
            </motion.div>

            <motion.p
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="text-3xl text-gray-800 leading-tight"
            >
                ¿Quieres más{" "}
                <span className="font-bold italic text-red-600">
                    clientes
                </span>
                ?
            </motion.p>
        </motion.div>
    );
};

// 📱 PEDIDOS DESDE CELULAR
const pedidosCelular = () => {
    return (
        <motion.div
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-full bg-white/20 shadow-md"
            >
                <FaMobileAlt className="text-5xl text-white" />
            </motion.div>

            <motion.p
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="text-3xl text-white font-semibold leading-tight"
            >
                Recibir pedidos desde tu celular
            </motion.p>

            <motion.span
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="text-sm text-white/80"
            >
                Fácil y rápido 🚀
            </motion.span>
        </motion.div>
    );
};

// 🎨 DISEÑO
const diseno = () => {
    return (
        <motion.div
            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl backdrop-blur-md bg-white/30 border border-white/40 shadow-xl"
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2 }}
        >
            <motion.div
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="p-4 rounded-full bg-white/50 shadow-md"
            >
                <FaPaintBrush className="text-5xl text-gray-800" />
            </motion.div>

            <motion.p
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="text-3xl text-gray-800 font-semibold"
            >
                Buscas un diseño atractivo
            </motion.p>

            <motion.span
                {...fadeUp}
                transition={{ duration: 0.6 }}
                className="text-sm text-gray-700"
            >
                Para tu negocio ✨
            </motion.span>
        </motion.div>
    );
};

// 🎯 FRASES
export const frases: Frase[] = [
    {
        content: masClientes(),
        inicial: { x: '-100%', y: '0%' },
        gradient: 'linear-gradient(90deg, #fab5a4, #facdaa)'
    },
    {
        content: pedidosCelular(),
        inicial: { x: '100%', y: '0%' },
        gradient: 'linear-gradient(90deg, #6a11cb, #2575fc)'
    },
    {
        content: diseno(),
        inicial: { x: '0%', y: '-100%' },
        gradient: 'linear-gradient(90deg, #43e97b, #38f9d7)'
    },
    {
        content: ejemploMariscos(),
        inicial: { x: '100%', y: '0%' },
        gradient: 'linear-gradient(90deg, #fbc2eb, #a6c1ee)'
    },
    {
        content: revisaEjemplo(),
        inicial: { x: '0%', y: '100%' },
        gradient: 'linear-gradient(90deg, #1e3c72, #2a5298)'
    },
];

export default function AdNovillero({ onComplete }: AdNovilleroProps) {
    const [index, setIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const hasCompletedRef = useRef(false);

    useEffect(() => {
        if (index >= frases.length) {
            if (!hasCompletedRef.current) {
                hasCompletedRef.current = true; // 🔒 evita múltiples ejecuciones
                setCompleted(true);
                onComplete?.(); // 👈 ahora solo se ejecuta una vez
            }
            return;
        }

        const timer = setTimeout(() => {
            setIndex(prev => prev + 1);
        }, 3000);

        return () => clearTimeout(timer);
    }, [index, onComplete]);

    useEffect(() => {
        hasCompletedRef.current = false;
        setIndex(0);
        setCompleted(false);
    }, []);


    if (completed) return null; // opcional: ocultar componente al terminar

    const current = frases[index] ?? null;

    return (
        <div className="w-full h-full relative rounded-xl overflow-hidden p-6 flex items-center justify-center">
            {/* Fondo animado */}
            <AnimatePresence mode="wait">
                {current && (
                    <motion.div
                        key={current.gradient}
                        className="absolute w-full h-full top-0 left-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ background: current.gradient }}
                    />
                )}
            </AnimatePresence>

            {/* Frase animada */}
            <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {current && (
                        <motion.div
                            key={index} // Asegura que el key cambie con cada frase
                            className="absolute text-center text-gray-800 font-semibold text-4xl whitespace-nowrap"
                            initial={{ x: current.inicial.x, y: current.inicial.y, opacity: 0 }}
                            animate={{ x: '50%', y: '50%', opacity: 1 }}
                            exit={{ x: current.inicial.x, y: current.inicial.y, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ translateX: '-50%', translateY: '-50%' }}
                        >
                            {current.content}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}