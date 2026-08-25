import { Home } from '@/rotas/Home';
import { getReadmeDoGithub } from '@/services/github';

export default async function HomePage() {
  const readmeContent = await getReadmeDoGithub('portfolio');

  return <Home readmeContent={readmeContent} />;
}