import Image from "next/image";
import Logo from '@/assets/logo.svg'
import LandingImg from '@/assets/main.svg'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className='max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={Logo} alt="Logo image" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="captalize text-4xl md:text-7xl font-bold">Job <span className="text-primary">Tracking</span> app</h1>
          <p className="leading-loose max-w-md mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, in! Fugiat, quos? Vel tempora officiis, doloribus facere quod numquam autem nulla quisquam deserunt minus repudiandae perspiciatis ullam est dolorem assumenda!</p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="Landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
