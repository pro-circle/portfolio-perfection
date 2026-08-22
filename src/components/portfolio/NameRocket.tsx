import { motion } from "framer-motion";
import RocketIcon from "./RocketIcon";

/**
 * Rocket sitting at the end of the name with a "ready for exploration" note.
 * Purely decorative — the interactive rocket is the cursor itself.
 */
const NameRocket = () => {
  return (
    <span className="inline-flex items-center gap-2 align-middle ml-2 select-none">
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 0.6 },
          scale: { duration: 0.4, delay: 0.6 },
          y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="inline-block -rotate-45"
      >
        <RocketIcon size={28} idPrefix="name-rocket" />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-[11px] md:text-xs font-medium tracking-widest uppercase text-accent whitespace-nowrap"
      >
        Ready for exploration....
      </motion.span>
    </span>
  );
};

export default NameRocket;
