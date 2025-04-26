"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Feature } from "@/components/ui/feature";
import { ArrowRight, MapPin, Timer } from "@phosphor-icons/react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { SkeletonFour, SkeletonOne, SkeletonThree, SkeletonTwo } from "@/components/ui/card-skeleton";
import Footer from "@/components/ui/footer";

export default function Event() {
   const [loading, setLoading] = useState(false);
  
    const handleClick = () => {
      setLoading(true);
    };
    
  return (
    <div className="w-full h-full pt-10 grid px-6 md:px-6 lg:px-10 xl:px-0 grid-cols-1 max-w-7xl mx-auto gap-5 md:gap-8 relative">  
    <div className="flex flex-col md:flex-row gap-5 justify-between w-full items-center">
      <Link href="/">
        <h2 className="text-start text-2xl font-bold text-balance text-white md:text-3xl lg:text-4xl w-full">DevCon Festival 2025</h2>
      </Link>

      <div className="hidden md:flex">
      <Link href={'/compra'} onClick={handleClick}>
          <Button variant={"default"}  size={"lg"} >
            <span>{loading ? 'Carregando...' : 'Comprar Ingressos'}</span>
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>

      <div className="flex md:hidden">
        <Link href={'/compra'} onClick={handleClick}>
          <Button variant={"default"}  size={"sm"} >
            <span>{loading ? 'Carregando...' : 'Comprar Ingressos'}</span>
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 pt-6">
     <Feature title="Data" description={
      <p>Nos dias <strong className="text-neutral-300">22 e 23 de Novembro de 2025,</strong> o DevCon Festival vai reunir os maiores nomes do front-end em uma experiência inesquecível.</p> } icon={<Timer size={16} weight="fill"/>} />
     <Feature title="Local" description={
     <p>Prepare-se para dois dias imersivos de conhecimento, inovação e networking no coração do <strong className="text-neutral-300">Parque Tecnológico de Sorocaba</strong></p>} icon={<MapPin size={16} weight="fill"/>} />
    </div>

    <div className="flex flex-col w-full gap-2 px-3 bg-green-950 rounded-2xl py-8 md:py-10">
      <h2 className="text-center text-xl font-bold text-balance text-white md:text-2xl lg:text-3xl">Atrações</h2>
      <p className="text-center text-neutral-300 text-sm lg:text-base">Fique por dentro das atrações do maior encontro de devs</p> 
      <AnimatedTestimonials testimonials={attractions} />
    </div>

    <div className="flex flex-col w-full pt-5 md:pt-10 px-3 gap-2 bg-neutral-800/40 rounded-2xl">
      <h2 className="text-center text-xl font-bold text-balance text-white md:text-2xl lg:text-3xl">Eventos anteriores</h2>
      <p className="text-center text-neutral-300 text-sm lg:text-base">Clique nas imagens para mais detalhes</p> 
        <div className="h-screen w-full px-3 md:px-10 py-5">
          <LayoutGrid cards={cards} />
        </div>
    </div>

    <div className="my-5 md:mt-10 py-20 flex flex-col items-center gap-5 bg-green-950/50 rounded-2xl">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center">Garanta já o seu ingresso</h2>
      <div className="hidden md:flex">
       <Link href={'/compra'} onClick={handleClick}>
          <Button variant={"default"}  size={"lg"} >
            <span>{loading ? 'Carregando...' : 'Comprar Ingressos'}</span>
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>

      <div className="flex md:hidden">
        <Link href={'/compra'} onClick={handleClick}>
            <Button variant={"default"}  size={"sm"} >
            <span>{loading ? 'Carregando...' : 'Comprar Ingressos'}</span>
            <ArrowRight size={18} />
            </Button>
        </Link>
      </div>
    </div>

    <Footer />
    </div>
  );
}

const attractions = [
  {
    quote:
      "Especialista em design de interfaces e acessibilidade, Letícia ajudou grandes empresas a criarem experiências digitais mais inclusivas e intuitivas.",
    name: "Letícia Andrade",
    designation: "UX/UI Designer na BravaTech",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Desenvolvedor apaixonado por animações e interações criativas, Bruno é referência quando o assunto é motion design com Framer Motion e Aceternity.",
    name: "Bruno Martins",
    designation: "Front-End Engineer na Animar Digital",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Com mais de 5 anos de experiência, Rafael lidera projetos complexos usando React, Next.js e arquitetura de componentes escalável.",
    name: "Rafael Lima",
    designation: "Tech Lead na Codar.io",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Mentor e criador de conteúdo, Diego foca em ensinar boas práticas de front-end moderno e já impactou milhares de desenvolvedores iniciantes.",
    name: "Diego Barbosa",
    designation: "Educador e Dev Influencer",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote:
      "Lucas é conhecido por seu domínio em performance web e já otimizou portais com milhões de acessos mensais usando estratégias avançadas de SSR e caching.",
    name: "Lucas Ferreira",
    designation: "Especialista em Performance Web na VeloxCode",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];