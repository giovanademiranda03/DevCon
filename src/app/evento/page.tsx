"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Feature } from "@/components/ui/feature";
import { ArrowRight, MapPin, Timer } from "@phosphor-icons/react";

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
    </div>
  );
}