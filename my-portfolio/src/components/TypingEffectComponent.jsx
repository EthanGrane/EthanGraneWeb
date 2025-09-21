import * as React from "react";
import { motion, useInView } from "framer-motion";

export default function TypingEffect({
    tag: Tag = "h2",
    className = "",
    content = "",
    duration = 0.2,
    delay = 0.1
}) {
    const parts = content.split(/<br\s*\/?>/i);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    return React.createElement(
        Tag,
        { ref, className },
        parts.map((part, pi) => (
            <React.Fragment key={pi}>
                {part.split("").map((letter, i) => (
                    <motion.span
                        key={`${pi}-${i}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, delay: (pi * part.length + i) * 0.05 }}
                    >
                        {letter}
                    </motion.span>
                ))}
                {/* Insertar salto de línea entre partes */}
                {pi < parts.length - 1 && <br />}
            </React.Fragment>
        ))
    );
}