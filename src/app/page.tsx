export default function Home() {
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
    </div>
  );
}
