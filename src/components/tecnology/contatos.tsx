"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiGit,
  SiGithub,
} from "react-icons/si";
import Container from "../container/container";

/* ================= FRONT-END ================= */

const frontTechs = [
  { icon: SiHtml5, color: "#E34F26" },
  { icon: SiCss3, color: "#1572B6" },
  { icon: SiJavascript, color: "#F7DF1E" },
  { icon: SiTypescript, color: "#3178C6" },
  { icon: SiReact, color: "#61DAFB" },
  { icon: SiNextdotjs, color: "#FFFFFF" },
  { icon: SiTailwindcss, color: "#38BDF8" },
  { icon: SiSass, color: "#CC6699" },
];

/* ================= BACK-END ================= */

const backTechs = [
  { icon: SiLaravel, color: "#FF2D20" },
  { icon: SiPhp, color: "#777BB4" },
  { icon: SiMysql, color: "#4479A1" },
  { icon: SiFirebase, color: "#FFCA28" },
  { icon: SiGit, color: "#F05032" },
  { icon: SiGithub, color: "#FFFFFF" },
];

export default function Tecnology() {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const [frontWidth, setFrontWidth] = useState(0);
  const [backWidth, setBackWidth] = useState(0);

  useEffect(() => {
    if (frontRef.current) {
      setFrontWidth(frontRef.current.scrollWidth / 2);
    }
    if (backRef.current) {
      setBackWidth(backRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <Container>
      <section className="w-full relative  text-white py-20 space-y-10">
        {/* ================= FRONT-END ================= */}

        <div className="space-y-8 flex flex-col items-center ">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
            <h2 className="text-3xl font-bold">Front-end</h2>
            <p className="text-gray-300 font-medium md:text-2xl max-w-5xl">
              Desenvolvimento de interfaces modernas, responsivas e
              performáticas utilizando React, Next.js e TypeScript. Integração
              com APIs REST, consumo de dados externos, estruturação de
              componentes reutilizáveis, design responsivo com Tailwind e SCSS,
              foco em performance, usabilidade e arquitetura escalável.
            </p>
          </div>

          <div className="relative overflow-hidden w-full max-w-3xl">
            <motion.div
              ref={frontRef}
              className="flex gap-16 w-max"
              animate={{ x: [0, -frontWidth] }}
              transition={{
                ease: "linear",
                duration: 15,
                repeat: Infinity,
              }}
            >
              {[...frontTechs, ...frontTechs].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center text-5xl"
                    style={{ color: tech.color }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ================= BACK-END ================= */}

        <div className="space-y-8 flex flex-col items-center">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
            <h2 className="text-3xl font-bold">Back-end</h2>
            <p className="text-gray-300 font-medium md:text-2xl max-w-5xl ">
              Criação de APIs REST com Laravel, autenticação de usuários,
              controle de acesso, recuperação e redefinição de senha.
              Estruturação e modelagem de banco de dados MySQL, integração com
              CMS e serviços externos, além de deploy e autenticação utilizando
              Firebase.
            </p>
          </div>

          <div className="relative overflow-hidden w-full max-w-3xl">
            <motion.div
              ref={backRef}
              className="flex gap-16 w-max"
              animate={{ x: [0, -backWidth] }}
              transition={{
                ease: "linear",
                duration: 15,
                repeat: Infinity,
              }}
            >
              {[...backTechs, ...backTechs].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center text-5xl"
                    style={{ color: tech.color }}
                  >
                    <Icon />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
}
