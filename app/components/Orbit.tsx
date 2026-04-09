import { motion, useAnimationControls } from 'framer-motion'
import { useState } from 'react';
import { FaMoon, FaSun } from "react-icons/fa";

export default function Orbit() {
    const [rotated, setRotated] = useState(false);
    const controls = useAnimationControls();

    const toggleRotation = async () => {
        const nextRotation = rotated ? 0 : 180;
        setRotated(prev => !prev);

        await controls.start({
            rotate: nextRotation,
            opacity: [1, 0, 1],
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                opacity: {
                    duration: 0.6,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                },
            },
        });
    };

    return (<div className="relative w-40 h-24 flex items-center justify-center translate-y-15">

        {/* SEMICIRCULO */}
        <div className="
            absolute
            w-40 h-20
            border-t-[3px] border-gray-500/40
            rounded-t-full
            top-0
            left-1/2
            -translate-x-1/2
            blur-[0.3px]
          " />

        {/* PLANETAS */}
        <motion.div
            onClick={toggleRotation}
            animate={controls}
            className="
              absolute
              top-0
              z-10
              flex flex-col items-center
              gap-6
              cursor-pointer
            "
        >

            {/* LUNA */}
            <div className="
              rounded-full bg-gray-900 text-[rgb(78,190,250)] p-2 -translate-y-5
              shadow-[0_0_12px_rgba(78,190,250,0.6)]
            ">
                <FaMoon />
            </div>

            {/* SOL */}
            <div className="
              rounded-full bg-gray-900 text-yellow-300 p-2 translate-y-5
              shadow-[0_0_12px_rgba(255,200,0,0.6)]
            ">
                <FaSun />
            </div>

        </motion.div>
    </div>)
}