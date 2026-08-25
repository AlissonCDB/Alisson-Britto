import { Skills } from '@/rotas/Skills';
import { getReadmeDoGithub } from '@/services/github';

export default async function SkillsPage() {

  const readmeContent = await getReadmeDoGithub('AlissonCDB');

  return <Skills readmeContent={readmeContent} />;
}