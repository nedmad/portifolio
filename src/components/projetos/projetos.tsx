"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Slide = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "DalyGames",
    description: `Aplicação desenvolvida com Next.js e TypeScript, que consome uma API REST para listar jogos dinamicamente. Possui rotas individuais para cada jogo e um sistema de busca por nome, permitindo consultas rápidas e navegação intuitiva`,
    image: "/dalygames.png",
    link: "https://games-pi-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Dev Motors",
    description: `Site exclusivo desenvolvido com Next.js e TypeScript, com integração a um CMS, permitindo a edição de imagens, informações e contatos sem necessidade de alterar o código. O usuário pode gerenciar todo o conteúdo de forma prática e intuitiva.`,
    image: "/devmotors.png",
    link: "https://devmotors-ecru.vercel.app/",
  },
];

export default function CenterCarousel() {
  const [current, setCurrent] = useState(0);
  console.log(current);

  const next = () => {
    if (current === slides.length - 1) {
      setCurrent(0); // volta pro início
    } else {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current === 0) {
      setCurrent(slides.length - 1); // vai pro final
    } else {
      setCurrent(current - 1);
      console.log(current);
    }
  };

  return (
    <div
      id="projetos"
      className="h-screen  flex justify-center items-center flex-col pt-5 px-1"
    >
      <h1 className="text-5xl text-white mt-10 max-md:text-4xl underline decoration-purple-700">
        Projetos
      </h1>
      <div className=" relative  w-full h-full  flex items-center justify-center overflow-hidden">
        <div className="relative w-full flex items-center justify-center">
          {slides.map((slide, index) => {
            const offset = index - current;
            const isActive = offset === 0;

            return (
              <motion.div
                key={slide.id}
                className="absolute w-[100%] max-w-md h-[550px] rounded-xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  const threshold = 100; // distância mínima para trocar

                  if (info.offset.x < -threshold) {
                    next();
                  } else if (info.offset.x > threshold) {
                    prev();
                  }
                }}
                animate={{
                  x: offset * 320,
                  scale: isActive ? 1 : 0.85,
                  opacity: Math.abs(offset) > 1 ? 0 : 1,
                  zIndex: isActive ? 10 : 1,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 7px 10px rgb(124, 58, 237)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <a href={slide.link} target="_blank">
                  <img
                    src={slide.image}
                    className="w-full h-full object-cover "
                  />
                </a>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 bg-black/80 p-6 text-white"
                  >
                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                    <p className="font-bold">{slide.description}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* BOTÕES */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-6 z-50 bg-black/40 hover:bg-black/70 text-white px-6 py-5 rounded-full transition"
            >
              ◀
            </button>
            <button
              onClick={next}
              className="absolute z-50 right-6 bg-black/40 hover:bg-black/70 text-white px-6 py-5 rounded-full transition "
            >
              ▶
            </button>
          </>
        )}
      </div>
    </div>
  );
}
