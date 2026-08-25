import { getReadmeDoGithub } from '@/services/github';
import ListaProjetosInterativa from '@/componentes/ListaProjetosInterativa';

export default async function ProjetosPage() {
  // Lista de projetos configurada com suas respectivas tecnologias para os filtros
  const meusProjetos = [
    { repo: 'anime-sinopse', tecnologias: ['React', 'JavaScript', 'HTML/CSS'] },
    { repo: 'BeyondMemory', tecnologias: ['React Native', 'SQLite', 'TypeScript'] },
    { repo: 'Group-Leveling', tecnologias: ['Next.js', 'Supabase', 'TypeScript'] },
  ];

  // Busca todos os READMEs em paralelo no servidor
  const projetosComDados = await Promise.all(
    meusProjetos.map(async (p) => {
      const conteudoMarkdown = await getReadmeDoGithub(p.repo);
      return {
        ...p,
        conteudoMarkdown,
      };
    })
  );

  return (
    <section className="flex flex-col items-center w-full text-[#cfb072] p-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 border-b-2 border-[#cfb072] pb-2">Meus Projetos</h1>
      <ListaProjetosInterativa projetosComDados={projetosComDados} />
    </section>
  );
}