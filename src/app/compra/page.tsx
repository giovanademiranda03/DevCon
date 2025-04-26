"use client";

import Image from 'next/image'
import { BreadcrumbDemo } from "@/components/ui/breadcrumb";


export default function PurchasePage() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen max-w-7xl">
        <div className="flex flex-col w-full p-10 gap-5">
          <BreadcrumbDemo />
          <Image alt="DevCon 2025" src="https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2" width={500} height={500} className="w-full object-cover rounded-2xl"/>
          <h2 className="text-start text-2xl font-bold text-balance text-white md:text-3xl lg:text-4xl w-full">DevCon Festival 2025</h2>
          <p className="text-base text-neutral-200">
        O maior evento de Desenvolvedores Front-End do ano. Conecte-se com os melhores devs, descubra novas ferramentas e leve sua UI ao próximo nível.
        </p>
        </div>
      </div>
    </div>
  );
}
