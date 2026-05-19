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
- [x] Botões de compartilhamento (LinkedIn, WhatsApp, Instagram, Discord)
- [x] Design responsivo e tema escuro
- [x] Deploy automático via Vercel
- [ ] Página de projetos com repositórios do GitHub
- [ ] Página de comunidade e eventos

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
│   │   └── blog/           # Posts em Markdown (.md)
│   ├── layouts/            # Layout base dos posts
│   ├── pages/              # Páginas do site
│   │   ├── index.astro     # Página inicial
│   │   ├── about.astro     # Sobre mim
│   │   └── blog/           # Listagem e posts
│   └── styles/
│       └── global.css      # Estilos globais
├── astro.config.mjs
└── package.json
```

---

## 📝 Como adicionar um novo post

1. Crie um arquivo `.md` em `src/content/blog/`
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

## 📬 Contato

[🌐 Site](https://vanessaamancio.com) <br>
[💼 LinkedIn ](https://www.linkedin.com/in/vanessa-sousa-silva-pro/) <br>
[🐙 GitHub](https://github.com/vanessasousapro) <br>

---

<p align="center">
  Feito com cuidado 💙 por Vanessa Amancio
</p>
