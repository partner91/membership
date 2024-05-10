'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [contactsIsOpen, setContactsIsOpen] = useState(false);

  function handleContactsIsOpen() {
    setContactsIsOpen((old) => !old);
  }
  return (
    <nav className='fixed top-16 left-0 min-h-screen pt-4 w-64 border-r-[1px] flex flex-col'>
      <ul className='flex flex-col list-none px-8'>
        <li>
          <Link
            href={'/'}
            className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'
          >
            <svg
              className='w-6 h-6 text-gray-800 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z' />
              <path d='M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z' />
            </svg>
            <span className='font-semibold text-gray-600'>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'
            onClick={handleContactsIsOpen}
          >
            <svg
              className='w-6 h-6 text-gray-800 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fill-rule='evenodd'
                d='M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z'
                clip-rule='evenodd'
              />
            </svg>

            <span className='font-semibold text-gray-600'>Contacts</span>
            <svg
              className='w-6 h-6 text-gray-800 ml-auto'
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
                d='m8 10 4 4 4-4'
              />
            </svg>
          </Link>
          <div className={`pl-12 ${contactsIsOpen ? '' : 'hidden'}`}>
            <ul className='flex flex-col gap-y-2'>
              <li>
                <Link
                  href={'/'}
                  className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'
                >
                  <span className='font-semibold text-gray-600'>Trainers</span>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <span className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'>
                    Users
                  </span>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <span className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'>
                    Parents
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link
            href={'/'}
            className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'
          >
            <svg
              className='w-6 h-6 text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fill-rule='evenodd'
                d='M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z'
                clip-rule='evenodd'
              />
            </svg>
            <span className='font-semibold text-gray-600'>Groups</span>
          </Link>
        </li>

        <li>
          <Link
            href={'/'}
            className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'
          >
            <svg
              className='w-6 h-6 text-gray-800 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fill-rule='evenodd'
                d='M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm2-2a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm0 3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Zm-6 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-6Zm8 1v1h-2v-1h2Zm0 3h-2v1h2v-1Zm-4-3v1H9v-1h2Zm0 3H9v1h2v-1Z'
                clip-rule='evenodd'
              />
            </svg>

            <span className='font-semibold text-gray-600'>Finance</span>
          </Link>
        </li>
        <li>
          <Link
            href={'/'}
            className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'
          >
            <svg
              className='w-6 h-6 text-gray-800 '
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
                d='M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z'
              />
            </svg>

            <span className='font-semibold text-gray-600'>Calendar</span>
          </Link>
        </li>

        <li>
          <Link
            href={'/'}
            className='flex gap-x-2 rounded-xl px-4 py-2 hover:bg-gray-200'
          >
            <svg
              className='w-6 h-6 text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fill-rule='evenodd'
                d='M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z'
                clip-rule='evenodd'
              />
            </svg>

            <span className='font-semibold text-gray-600'>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
