import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import {
  SiCsharp,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPhpstorm,
  SiPlanetscale,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTwitter,
  SiVercel,
  SiVisualstudiocode,
} from 'react-icons/si';
import SpotifyStatus from '@/components/SpotifyStatus';
import ContactForm from '@/components/ContactForm';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl grid grid-cols-6 gap-6 px-6 my-12'>
      <Head>
        <title>Fabio Bonati</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content='Fabio Bonati' />
        <meta name='publisher' content='Fabio Bonati' />
        <meta
          name='description'
          content='Fabio Bonati, 19 y/o software developer and student'
        />
        <meta
          name='keywords'
          content='Fabio Bonati, bonati, fabio, bonati, software developer, fabio bonati software developer'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@bonatifabioo' />
        <meta name='twitter:creator' content='@bonatifabioo' />
        <meta name='twitter:title' content='Fabio Bonati' />
        <meta name='twitter:description' content='code ✧ @joinnite' />
        <meta name='twitter:image' content='/memoji.svg' />
        <meta property='og:title' content='Fabio Bonati' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fabiobonati.com' />
        <meta property='og:image' content='/memoji.svg' />
        <meta
          property='og:description'
          content='Fabio Bonati, 19 y/o software developer and student'
        />
        <meta property='og:site_name' content='Fabio Bonati' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:locale:alternate' content='it_IT' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:locale:alternate' content='en_GB' />
        <meta property='og:locale:alternate' content='en_CA' />
        <meta property='og:locale:alternate' content='en_AU' />
        <meta property='og:locale:alternate' content='en_NZ' />
        <meta property='og:locale:alternate' content='en_IE' />
        <meta property='og:locale:alternate' content='en_ZA' />
        <meta property='og:locale:alternate' content='en_JM' />
        <meta property='og:locale:alternate' content='en' />
      </Head>
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
      <div className='col-span-4 h-52 flex items-center justify-center p-6 bg-teal-200 rounded-xl'>
        <div className='grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center'>
          <SiHtml5 size={24} />
          <SiCss3 size={24} />
          <SiJavascript size={24} />
          <SiCsharp size={24} />
          <SiPhp size={24} />
          <SiNodedotjs size={24} />
          <SiTailwindcss size={24} />
          <SiReact size={24} />
          <SiNextdotjs size={24} />
          <SiPrisma size={24} />
          <SiMysql size={24} />
          <SiGit size={24} />
          <SiVercel size={24} />
          <SiPlanetscale size={24} />
          <SiVisualstudiocode size={24} />
          <SiPhpstorm size={24} />
        </div>
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
