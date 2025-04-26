"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Feature } from "@/components/ui/feature";
import { ArrowRight, MapPin, Timer } from "@phosphor-icons/react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Event() {
  return (
    <div className="w-full h-full pt-10 grid grid-cols-1 max-w-7xl mx-auto gap-4 relative">  
    <div className="flex justify-between w-full items-center">
      <Link href="/">
        <h2 className="text-start text-2xl font-bold text-balance text-white md:text-3xl lg:text-4xl w-full">DevCon Festival 2025</h2>
      </Link>

      <Link href={'/compra'}>
          <Button variant={"default"}  size={"lg"} >
            Comprar Ingressos
            <ArrowRight size={18} />
          </Button>
        </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 pt-6">
     <Feature title="Data" description={
      <p>Nos dias <strong className="text-neutral-300">22 e 23 de Novembro de 2025,</strong> o DevCon Festival vai reunir os maiores nomes do front-end em uma experiência inesquecível.</p> } icon={<Timer size={16} weight="fill"/>} />
     <Feature title="Local" description={
     <p>Prepare-se para dois dias imersivos de conhecimento, inovação e networking no coração do <strong className="text-neutral-300">Parque Tecnológico de Sorocaba</strong></p>} icon={<MapPin size={16} weight="fill"/>} />
    </div>

    <div className="flex flex-col w-full gap-2 bg-green-950 rounded-2xl py-10 my-8">
      <h2 className="text-center text-xl font-bold text-balance text-white md:text-2xl lg:text-3xl">Atrações</h2>
      <p className="text-center text-neutral-300 text-sm lg:text-base">Fique por dentro das atrações do maior encontro de devs</p> 
      <AnimatedTestimonials testimonials={attractions} />
     </div>
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
