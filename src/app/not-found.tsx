"use client"

import { BackgroundBeams } from "@/components/ui/background-beams";
import { MagicButton } from "@/components/ui/magic-button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { NavigationArrow } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotFound() {
  return (
  <main className="relative h-screen flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5 pb-20 pt-36">
      <div className="max-w-7xl w-full h-full bg-black-100 ">

      <div
        className="h-screen w-full bg-black-100 bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center text-emerald-500"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-neutral-200">
            PAGE NOT FOUND
          </p>

          <TextGenerateEffect
            words="Oops! 404 page"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Parece que a página que você está procurando não existe. Volte para a Home!
          </p>

          <Link href="/">
            <MagicButton
              title="Voltar para a Home"
              icon={<NavigationArrow weight="fill" size={16}/>}
              position="right"
            />
          </Link>
        </div>
      </div>
      </div>
      <BackgroundBeams />
    </main>
  );
}
