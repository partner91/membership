import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex fixed top-0 left-0 w-svw px-4 pt-2 pb-4 border-b-[1px] border-gray-200 h-16'>
      <Link href={'/'} className='flex items-center'>
        <div className='relative w-12 h-12'>
          <Image
            src={'/member-card.png'}
            alt='Logo image'
            fill
            className='inline-block'
          />
        </div>
        <h1 className='font-semibold text-xl ml-4'>Membership</h1>
      </Link>
    </header>
  );
}
