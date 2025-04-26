'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

export function CTA() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className="relative z-20 flex items-center justify-center gap-4">
      <Link href="/evento" onClick={handleClick}>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center space-x-2 border border-white"
        >
          <span>{loading ? 'Redirecionando...' : 'Ver Detalhes'}</span>
        </HoverBorderGradient>
      </Link>
    </div>
  );
}
