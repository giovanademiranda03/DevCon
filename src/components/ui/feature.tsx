import type { ReactNode } from "react";

interface FeatureProps {
  title: string;
  description: ReactNode
  icon: ReactNode
}

export function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="p-5 flex flex-col gap-4 bg-neutral-800/50 rounded-2xl">
      <div className="flex gap-2 items-center">   
        <div className="flex items-center justify-center bg-green-950 rounded-full p-3 size-9">
          <div className="text-green-500 size-4">{icon}</div>
        </div>
      <h4 className="text-white lg:text-xl md:lg text-base font-semibold">{title}</h4>
      </div>
      <div className="text-neutral-400 lg:text-base md:sm text-xs font-medium">{description}</div>
    </div>
  );
}
