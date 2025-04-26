# 🎟️ Dev Con 2025 

- [Veja em produção](https://dev-con.vercel.app)

Aplicação web desenvolvida como parte do **Teste Técnico – Desenvolvedor Front-End Júnior (React + Next.js)**.  
O projeto simula um sistema simples de venda de ingressos para eventos.

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShacnUI](https://ui.shadcn.com/)
- [Aceternity](https://ui.aceternity.com/) (animações)
- [Framer Motion](https://www.framer.com/motion/) (animações)
- [Phosphor Icons](https://phosphoricons.com/) (ícones)
- [Vercel](https://vercel.com/) (deploy)
- [Git](https://git-scm.com/) + [GitHub](https://github.com/) (controle de versão)

## 🎯 Objetivo do Projeto

Criar uma aplicação web com 3 páginas utilizando React e Next.js, focando em:
- Estruturação de componentes
- Estilização responsiva
- Navegação entre páginas
- Interatividade e feedback visual

---

## 📄 Páginas da Aplicação

### 1. Página Inicial (`/`)
- Nome do evento: **Dev Con 2025**
- Banner ilustrativo do evento
- Descrição curta
- Botão "Ver Detalhes" que redireciona para `/evento`

### 2. Página de Detalhes do Evento (`/evento`)
- Nome completo do evento
- Descrição longa: data, local, atrações
- Galeria de imagens (mínimo 3 imagens)
- Botão "Comprar Ingresso" que redireciona para `/compra`

### 3. Página de Compra de Ingressos (`/compra`)
- Formulário com campos obrigatórios:
  - Nome completo
  - E-mail
  - Quantidade de ingressos
- Validação dos campos
- Botão "Finalizar Compra"
- Exibição de mensagem de sucesso após a compra

---

## ⚙️ Requisitos Atendidos

- ✅ Navegação entre páginas funcionando corretamente
- ✅ Formulário com validação de campos obrigatórios
- ✅ Organização de componentes reutilizáveis
- ✅ Utilização de imagens públicas
- ✅ Feedback visual no envio (ex: carregando...)
- ✅ Responsividade (Mobile-First)

---

## 🌟 Diferenciais Implementados

- Componentes reutilizáveis (Botão, Input, Formulário)
- Animações suaves usando Framer Motion
- Deploy no Vercel
- Código limpo e organizado, seguindo boas práticas
- Commits frequentes e descritivos no repositório

---

## 🚀 Como rodar o projeto localmente

Clone o repositório:

```bash
git clone https://github.com/giovanademiranda03/DevCon.git
cd DevCon
```

Instale as dependências:

```bash
npm install
# ou
yarn install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra http://localhost:3000 no seu navegador para ver o resultado.