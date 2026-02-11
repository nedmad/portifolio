import Container from "../container/container";

export default function Intro() {
  return (
    <section className="h-screen snap-start bg-blue-900">
      <Container>
        <article className="h-screen flex justify-center items-center text-white">
          <div className="px-1">
            <h1 className="font-bold text-3xl mb-4">
              Olá, me chamo Matheus Ned
            </h1>
            <p className="font-medium md:text-2xl">
              Sou desenvolvedor{" "}
              <strong className="text-blue-500">
                Full Stack com foco em Front-end
              </strong>
              , criando aplicações modernas, rápidas e bem estruturadas.
              Trabalho com Next.js e TypeScript, desenvolvendo interfaces
              responsivas e performáticas utilizando Tailwind CSS e SCSS. No
              back-end, utilizo Firebase para autenticação, banco de dados e
              deploy, além de integrar aplicações com APIs REST e CMS. Tenho
              experiência com versionamento usando Git, organização de código,
              boas práticas e arquitetura pensada para produtos SaaS. Gosto de
              transformar ideias em soluções reais, com foco em usabilidade,
              performance e código limpo.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
