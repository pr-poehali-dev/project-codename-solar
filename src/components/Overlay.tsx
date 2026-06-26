import { motion } from "framer-motion"

export default function Overlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-normal text-white tracking-[0.3em] uppercase">
            ЮГИЛЬМИ
          </h1>
          <p className="mt-2 font-sans text-xs md:text-sm font-light text-white/60 tracking-[0.2em] uppercase">
            Коллекция · 2026
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-sans text-xs font-light text-white/40 tracking-[0.2em] uppercase"
        >
          Двигайте мышью · листайте коллекцию
        </motion.p>
      </div>
    </div>
  )
}