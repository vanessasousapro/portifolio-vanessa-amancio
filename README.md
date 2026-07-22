<h1 align="center">
 Vanessa Amancio
</h1>

<p align="center">
  <strong>Portfólio pessoal e blog de desenvolvimento</strong><br/>
  Software Developer · Back-End · Java
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framework-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white"/>
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Styling-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/Status-Online-00C851?style=for-the-badge"/>
</p>

---

## 📖 Sobre o Projeto

O **vanessaamancio.com** é meu portfólio pessoal e blog, desenvolvido com Astro, onde compartilho minha jornada no desenvolvimento back-end, conquistas, participações em eventos e contribuições para a comunidade tech.

> *"Sou desenvolvedora back-end, apaixonada por construir soluções robustas, escaláveis e bem estruturadas."*

---

## 🚀 Funcionalidades

- [x] Página inicial com último post publicado
- [x] Página sobre mim com informações profissionais
- [x] Blog com posts em Markdown
- [x] Botões de compartilhamento (LinkedIn, WhatsApp, Discord)
- [x] Design responsivo e tema escuro
- [x] Deploy automático via Vercel
- [x] Página de eventos com data e status de inscrição
- [ ] Página de projetos com repositórios do GitHub

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| Astro | Framework principal do site |
| TypeScript | Tipagem e configurações |
| Markdown | Escrita dos posts do blog |
| CSS3 | Estilização customizada |
| Vercel | Deploy e hospedagem |
| GitHub | Versionamento do código |

---

## 🏗️ Estrutura do Projeto

```
portfolio-vanessa-amancio/
├── public/                 # Imagens e arquivos estáticos
├── src/
│   ├── assets/             # Logo e fontes
│   ├── components/         # Header, Footer, BaseHead
│   ├── content/
│   │   ├── posts/          # Posts estilo LinkedIn (eventos, comunidade) em Markdown (.md)
│   │   ├── blog/           # Artigos sobre métodos de estudo em Markdown (.md)
│   │   └── eventos/        # Eventos com data, local e status de inscrição em Markdown (.md)
│   ├── layouts/            # Layout base dos posts/artigos/eventos
│   ├── pages/              # Páginas do site
│   │   ├── index.astro     # Página inicial
│   │   ├── about.astro     # Sobre mim
│   │   ├── posts/          # Listagem e posts estilo LinkedIn
│   │   ├── blog/           # Listagem e artigos de métodos de estudo
│   │   └── eventos/        # Listagem e detalhe de eventos
│   └── styles/
│       └── global.css      # Estilos globais
├── astro.config.mjs
└── package.json
```

---

## 📝 Como adicionar um novo post ou artigo

1. Crie um arquivo `.md` em `src/content/posts/` (posts estilo LinkedIn) ou `src/content/blog/` (artigos de métodos de estudo)
2. Adicione o frontmatter com as informações do post:

```markdown
---
title: 'Título do post'
description: 'Resumo curto'
pubDate: 'May 19 2026'
heroImage: '/nome-da-imagem.png'
---

Conteúdo do post aqui...
```

3. Copie a imagem de capa para a pasta `public/`
4. Faça o commit e push — a Vercel publica automaticamente!

---

## 📅 Como adicionar um novo evento

1. Crie um arquivo `.md` em `src/content/eventos/`
2. Adicione o frontmatter com as informações do evento:

```markdown
---
title: 'Nome do evento'
description: 'Resumo curto'
eventDate: 'Aug 15 2026'
heroImage: '/nome-da-imagem.png'
location: 'São Paulo, SP · Presencial'
registrationUrl: 'https://link-de-inscricao.com'
---

Detalhes do evento aqui...
```

3. O status ("Inscrições abertas" ou "Encerrado") é calculado automaticamente comparando `eventDate` com a data de hoje — não precisa atualizar manualmente
4. `registrationUrl` é opcional e só aparece como botão enquanto o evento ainda não aconteceu
5. Copie a imagem de capa para a pasta `public/`, faça o commit e push

---

## 📬 Contato

[🌐 Site](https://vanessaamancio.com) <br>
[💼 LinkedIn ](https://www.linkedin.com/in/vanessa-sousa-silva-pro/) <br>
[🐙 GitHub](https://github.com/vanessasousapro) <br>

---

<p align="center">
  Feito com cuidado 💙 por Vanessa Amancio
</p>
