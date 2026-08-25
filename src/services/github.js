export async function getReadmeDoGithub(repositorio) {
  // revalidate: 86400 garante que a Vercel faça cache por 24 horas
  const res = await fetch(`https://raw.githubusercontent.com/AlissonCDB/${repositorio}/main/README.md`, {
    next: { revalidate: 86400 }
  });

  if (!res.ok) {
    return "README indisponível no momento ou repositório privado.";
  }

  return res.text();
}

