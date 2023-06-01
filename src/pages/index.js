import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import SpotifyStatus from '@/components/SpotifyStatus';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl grid grid-cols-6 gap-6 px-6 pt-12'>
      <div className='col-span-4 flex items-center justify-center gap-4 bg-violet-200 rounded-lg'>
        <div className='flex flex-col items-center space-y-4 md:flex-row p-8 md:space-x-4 md:space-y-0'>
          <Image
            src='/memoji.svg'
            alt='My personal memoji'
            width={75}
            height={75}
          />
          <div className='space-y-1'>
            <h1 className='text-xl font-bold text-center text-violet-900 md:text-left'>
              Fabio Bonati
            </h1>
            <p className='text-violet-700 text-center md:text-left'>
              19 y/o developer and student from 🇮🇹
            </p>
          </div>
        </div>
      </div>
      <div className='col-span-2 h-full flex items-center justify-center bg-[#333] rounded-lg transform-gpu transition-all duration-500 hover:scale-95'>
        <Link
          href='https://github.io/fabiobonati'
          className='text-white text-4xl'
        >
          <SiGithub />
        </Link>
      </div>
      <div className='col-span-2 h-52 flex items-center justify-center bg-[#1DA1F2] rounded-lg transform-gpu transition-all duration-500 hover:scale-95'>
        <Link
          href='https://twitter.com/bonatifabioo'
          className='text-white text-4xl'
        >
          <SiTwitter />
        </Link>
      </div>
      <div
        className='col-span-4 h-full flex items-center justify-center bg-yellow-200 rounded-lg
        '
      ></div>
    </main>
  );
}
