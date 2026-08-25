import { Home } from '@/rotas/Home';
import { getReadmeDoGithub } from '@/services/github';

export default async function HomePage() {
  const readmeContent = await getReadmeDoGithub('Alisson-Britto');

  return <Home readmeContent={readmeContent} />;
}