'use client'

import { motion } from "motion/react"
import '@/components/Hero.css'

export default function Hero() {
  return (
    <div id="container" className="">
      {/* Fundo com blur e cor translúcida */}
      <div className="fixed inset-0 backdrop-blur-sm bg-white/1 z-[0]" />

      {/* Conteúdo Hero por cima */}
      <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center text-center text-white relative z-[10]">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl mb-4 text-white"
        >
          Olá, eu sou o Gabriel 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-gray-300 max-w-xl"
        >
          Desenvolvedor fullstack apaixonado por tecnologia e construção de soluções digitais modernas. Este é meu portfólio.
        </motion.p>
      </section>
    </div>
  )
}
