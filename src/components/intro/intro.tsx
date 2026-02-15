"use client";
import { useEffect, useState } from "react";
import Container from "../container/container";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
              performance e código limpo.`;

  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 15);

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
    <>
      <section className="h-screen   snap-start">
        <Container>
          <article className="w-full h-screen  flex flex-col justify-start pt-20     text-white">
            <div className="px-1 w-full min-h-80 max-md:min-h-96 mb-3">
              <h1 className="font-bold text-3xl mb-4 ">
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
                <span className="ml-1 text-pink-600 ">
                  {showCursor ? "|" : " "}
                </span>
              </p>
            </div>
            <div className="mt-3">
              <div className="flex gap-5">
                <a
                  href="https://github.com/nedmad"
                  target="_blank"
                  className="hover:text-purple-700  transition duration-300v cursor-pointer"
                >
                  <SiGithub size={50} />
                </a>
                <a
                  href="https://www.linkedin.com/in/matheus-ned-barros-labre-422564237/"
                  target="_blank"
                  className="hover:text-purple-700 transition duration-300 cursor-pointer"
                >
                  <FaLinkedin size={50} />
                </a>
                <a
                  href="https://wa.me/556499759986"
                  target="_blank"
                  className="hover:text-purple-700 transition duration-300 cursor-pointer"
                >
                  <FaWhatsapp size={50} />
                </a>
                <a
                  href="mailto:matheusned117@gmail.com?subject=Contato&body=Olá%20vim%20pelo%20site"
                  className="hover:text-purple-700 transition duration-300 cursor-pointer"
                >
                  <FaEnvelope size={50} />
                </a>
              </div>
              <div>
                <a
                  href="/arquivos/Currículo Simples com Foto e Informações em Rosa e Branco-3.pdf"
                  target="_blank"
                  className="inline-block bg-purple-700 px-12 py-3 rounded mt-6 font-bold hover:scale-110 hover:shadow-[0_0_25px_rgb(124,58,237)]   transition-all duration-300"
                >
                  Baixar CV
                </a>
              </div>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
