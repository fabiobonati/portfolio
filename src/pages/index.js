import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import SpotifyStatus from '@/components/SpotifyStatus';
import TechStackSlider from '@/components/TechStackSlider';
import ContactForm from '@/components/ContactForm';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl grid grid-cols-6 gap-6 px-6 my-12'>
      <div className='col-span-4 flex items-center justify-center gap-4 bg-violet-200 rounded-xl'>
        <div className='flex flex-col items-center space-y-4 md:flex-row p-8 md:space-x-4 md:space-y-0 md:h-52'>
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
      <Link
        href='https://github.com/fabiobonati'
        target='_blank'
        className='col-span-2 h-full flex group items-center justify-center bg-[#333] rounded-xl transform-gpu transition-all duration-500 hover:scale-95 text-white text-4xl'
      >
        <SiGithub className='transition-all duration-500 group-hover:scale-[1.15]' />
      </Link>
      <Link
        href='https://twitter.com/bonatifabioo'
        target='_blank'
        className='text-white text-4xl group col-span-2 h-52 flex items-center justify-center bg-[#1DA1F2] rounded-xl transform-gpu transition-all duration-500 hover:scale-95'
      >
        <SiTwitter className='transition-all duration-500 group-hover:scale-[1.15] group-hover:-rotate-12' />
      </Link>
      <div
        className='col-span-4 h-full flex items-center justify-center bg-green-200 rounded-xl
        '
      >
        <TechStackSlider />
      </div>
      <div className='col-span-6 md:col-span-3 h-52'>
        <SpotifyStatus />
      </div>
      <Link
        className='col-span-3 md:col-span-2 overflow-hidden bg-white h-full p-8 group flex items-center justify-center rounded-xl transform-gpu transition-all duration-500 hover:scale-95
      '
        href='https://nite.is'
        target='_blank'
      >
        <Image
          className='absolute inset-0 -z-10 h-full w-full object-cover object-center blur-3xl '
          src='/nitebackground.svg'
          alt='Nite logo'
          width={200}
          height={200}
        />
        <Image
          src='/nitelogo.svg'
          alt='Nite logo'
          width={80}
          height={100}
          className='transition-all duration-500 group-hover:scale-[1.15]'
        />
      </Link>
      <Link
        href='https://www.linkedin.com/in/fabiobonati/'
        target='_blank'
        className='text-white group text-4xl col-span-3 md:col-span-1 h-52 flex items-center justify-center bg-[#0077B5] rounded-xl transform-gpu transition-all duration-500 hover:scale-95'
      >
        <SiLinkedin className='transition-all duration-500 group-hover:scale-[1.15]' />
      </Link>
      <div className='col-span-6 bg-yellow-200 rounded-xl text-black'>
        <ContactForm />
      </div>
    </main>
  );
}
