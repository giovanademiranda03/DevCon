import { CTA } from "@/components/ui/cta";
import { ThreeDMarquee } from "@/components/ui/threed-marquee";

export default function Home() {
  const images = [
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1582192730841-2a682d7375f9",
    "https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2",
    "https://images.unsplash.com/photo-1637073849640-b283dcd9a111",
    "https://images.unsplash.com/photo-1624377632657-3902bfd35958",
    
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1582192730841-2a682d7375f9",
    "https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2",
    "https://images.unsplash.com/photo-1637073849640-b283dcd9a111",
    "https://images.unsplash.com/photo-1624377632657-3902bfd35958",

    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1582192730841-2a682d7375f9",
    "https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2",
    "https://images.unsplash.com/photo-1637073849640-b283dcd9a111",
    "https://images.unsplash.com/photo-1624377632657-3902bfd35958",

    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1582192730841-2a682d7375f9",
    "https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2",
    "https://images.unsplash.com/photo-1637073849640-b283dcd9a111",
    "https://images.unsplash.com/photo-1624377632657-3902bfd35958",

    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "https://images.unsplash.com/photo-1582192730841-2a682d7375f9",
    "https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2",
    "https://images.unsplash.com/photo-1637073849640-b283dcd9a111",
    "https://images.unsplash.com/photo-1624377632657-3902bfd35958",
  ];

  return (
    <div className="relative mx-auto flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
      DevCon 2025: onde o{" "}
        <span className="relative z-20 inline-block rounded-xl bg-green-500/40 px-4 py-1 text-white underline decoration-green-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          código
        </span>{" "}
        encontra a criatividade
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-lg">
      O maior evento de Desenvolvedores Front-End do ano. Conecte-se com os melhores devs, descubra novas ferramentas e leve sua UI ao próximo nível.
      </p>

      <CTA />

      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
