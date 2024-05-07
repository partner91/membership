import Image from 'next/image';

export default function UserDetails({ className }) {
  return (
    <div className={`flex items-center px-8 py-2 ${className}`}>
      <div className='flex  hover:bg-slate-300 transition-all duration-200 px-4 py-2 rounded-xl items-center'>
        <Image
          src={'/user.jpg'}
          width={32}
          height={32}
          quality={100}
          alt='User profile image'
          style={{ objectFit: 'cover' }}
          className='rounded-full min-h-[32px] mr-4'
        />
        <span className='mr-4 text-sm text-slate-800'>Filip</span>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='w-4 h-4'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='m19.5 8.25-7.5 7.5-7.5-7.5'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
