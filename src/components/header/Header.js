'use client';
import Link from 'next/link';
import Logo from '../ui/logo/LogoImage';
import Avatar from '../avatar/Avatar';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    fetch('/api/users');
  }, []);
  function test() {}
  return (
    <header className='fixed z-30 w-full bg-white boder-b border-gray-200 border-b-[1px]'>
      <div className='flex px-3 py-3'>
        <Link href={'/'} className='flex items-center'>
          <Logo />
          <h1 className='ml-2 text-xl font-semibold'>Membership</h1>
        </Link>
        <div className='ml-auto flex items-center justify-center'>
          <svg
            className='w-6 h-6 text-gray-800 dark:text-white mr-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z'
            />
          </svg>
          <Avatar />
        </div>
      </div>
    </header>
  );
}
