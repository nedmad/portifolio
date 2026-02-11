"use client"
import { useEffect, useState } from "react";
import Container from "../container/container";
import { motion } from "motion/react";
export default function Intro() {
  const text = `
              Sou desenvolvedor Full Stack com foco em Front-end
              , criando aplicações modernas, rápidas e bem estruturadas.
              Trabalho com Next.js e TypeScript, desenvolvendo interfaces
              responsivas e performáticas utilizando Tailwind CSS e SCSS. No
              back-end, utilizo Firebase para autenticação, banco de dados e
              deploy, além de integrar aplicações com APIs REST e CMS. Tenho
              experiência com versionamento usando Git, organização de código,
              boas práticas e arquitetura pensada para produtos SaaS. Gosto de
              transformar ideias em soluções reais, com foco em usabilidade,
              performance e código limpo.`

  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  // Cursor piscando
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);
  return (
    <section className="h-screen snap-start bg-blue-900">
      <Container>
        <article className="w-full h-screen flex justify-center items-center text-white">
          <div className="px-1 w-full ">
            <h1 className="font-bold text-3xl mb-4">
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                Olá, me chamo Matheus Ned

              </motion.span>
            </h1>
            <p className="font-medium md:text-2xl max-w-5xl">
              {displayedText}
              <span className="ml-1 text-pink-600 ">{showCursor ? "|" : " "}</span>
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
