import Container from "@/components/container/container";
import Contatos from "@/components/contatos/contatos";
import Intro from "@/components/intro/intro";
import Projetos from "@/components/projetos/projetos";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Intro />
      <Projetos />
      <Contatos />
    </main>
  );
}
