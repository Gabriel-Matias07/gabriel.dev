// components/Hero.jsx
'use client'

import { motion } from "motion/react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center max-h 100vh">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-4"
      >
        Olá, eu sou o Gabriel 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-600 max-w-xl"
      >
        Desenvolvedor fullstack apaixonado por tecnologia e construção de soluções digitais modernas. Este é meu portfólio.
      </motion.p>
    </section>
  )
}
