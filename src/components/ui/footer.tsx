import React from 'react'
import { Button } from './button';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full min-h-14 flex flex-col md:flex-row items-center gap-5 justify-between'>
      <p className='text-white text-center text-xs md:text-sm lg:text-base font-semibold'>Copyright © {currentYear} Giovana de Miranda</p>

      <div className='flex gap-4 items-center justify-end'>
        <Link target="_blanck" href="https://github.com/giovanademiranda03">
          <Button title='Github' variant={'outline'} size={'icon'}>
            <GithubLogo weight='fill' size={16} />
          </Button>
        </Link>
        <Link target="_blanck" href="https://www.linkedin.com/in/giovana-de-miranda/">
          <Button title='LinkedIn' variant={'outline'} size={'icon'}>
            <LinkedinLogo weight='fill' size={16} />
          </Button>
        </Link>
        <Link target="_blanck" href="https://giovana-portfolio.vercel.app/">
          <Button title='Portfolio' variant={'outline'} size={'icon'} className='font-bold'>
            P
          </Button>
        </Link>
      </div>
    </footer>
  )
}
