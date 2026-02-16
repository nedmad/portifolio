import Intro from "@/components/intro/intro";
import Projetos from "@/components/projetos/projetos";
import Tecnology from "@/components/tecnology/contatos";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll ">
      <Intro />
      <Projetos />
      <Tecnology />
    </main>
  );
}
