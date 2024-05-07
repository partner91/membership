import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className='flex mr-8 items-center'>
      <Link href='/'>
        <Image
          src='/logo.png'
          height={32}
          width={32}
          alt='Logo'
          className='mr-4'
        />
      </Link>
      <Link href='/'>
        <h2 className='text-slate-800 font-semibold text-lg'>Membership</h2>
      </Link>
    </div>
  );
}
