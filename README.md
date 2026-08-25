# Meu Portfólio | Da Concepção à Maturidade

> *"Não espere nada dos usuários, mas ao mesmo tempo espere tudo."*

Uma lição sobre produto, usabilidade e desenvolvimento que carrego desde as primeiras linhas deste código.

---

## Sobre o Projeto

Concebido originalmente em 2023, este portfólio representa o ponto de virada na minha trajetória como desenvolvedor. Foi o meu primeiro projeto autoral verdadeiramente elaborado — saindo do escopo guiado de cursos para enfrentar o ciclo completo de vida de um software: idealização, levantamento de requisitos, planejamento visual, implementação e testes com usuários reais.

Embora na época eu ainda não dominasse formalmente os conceitos avançados de **IHC (Interação Humano-Computador)** e **UX/UI**, o projeto nasceu da vontade de criar uma interface autêntica, intuitiva e focada na experiência de quem navega.

---

## Lições de Engenharia e UX

Durante os primeiros testes manuais com amigos, aprendi na prática a maior premissa do design centrado no usuário: *o que é óbvio para quem constrói raramente é óbvio para quem consome*. Observar pessoas interagindo com a interface mostrou que usuários exploram caminhos imprevistos e testam os limites da aplicação de formas nunca planejadas.

Tecnicamente, o projeto também foi um laboratório de persistência:

* **Resolução de problemas nativos:** O desafio de fixar o cabeçalho/menu no topo durante a rolagem preservando o efeito de brilho (*glow*) das bordas exigiu ir além das abstrações do ecossistema e manipular eventos nativos do DOM da janela.

Foi aqui que compreendi que desenvolver software vai muito além da sintaxe — trata-se de transformar intenção em usabilidade estável.

---

## Evolução da Arquitetura

O portfólio acompanhou meu amadurecimento técnico ao longo do tempo:

* **2023 (React.js puro):** Nascimento da identidade visual e estrutura base de componentes.
* **Migração para Vite:** Otimização do ambiente de desenvolvimento e *build tooling*.
* **Migração para Next.js (App Router + ISR):** Para solucionar o custo de manutenção manual, a arquitetura foi modernizada para utilizar o próprio GitHub como um **CMS Headless**:
  * As seções de *Skills* e *Projetos* consomem diretamente os arquivos `README.md` dos meus repositórios via **Server Components**.
  * O conteúdo é atualizado de forma centralizada a partir do GitHub, com cache inteligente de 24 horas via **ISR (Incremental Static Regeneration)** para otimizar requisições e consumo de infraestrutura na Vercel.

---

## Identidade Preservada

Mesmo com o avanço dos meus estudos na faculdade e a maturidade adquirida no desenvolvimento full-stack e análise de dados, optei por preservar a estética e o design originais de 2023. Este projeto é um registro vivo de aprendizado contínuo, documentando a transição de um estudante autodidata para um desenvolvedor consciente de arquitetura, produto e usuário.