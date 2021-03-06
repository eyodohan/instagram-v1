import Image from 'next/image';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';

const Header = () => {
  const { data: session } = useSession();

  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className='shadow-sm border-b sticky top-0'>
      <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        {/* Left */}
        <div className='h-24 w-24 relative hidden lg:inline-grid cursor-pointer'>
          <Image
            src='https://marka-logo.com/wp-content/uploads/2020/04/Instagram-Logo.png'
            layout='fill'
            className='object-contain'
          />
        </div>
        <div className='h-24 w-10 relative  lg:hidden'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png'
            layout='fill'
            className='object-contain'
          />
        </div>
        {/* Middle */}
        <div className='relative mt-1'>
          <div className='absolute top-2 left-2'>
            <SearchIcon className='h-5 text-gray-500' />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'
          />
        </div>
        {/* Right */}
        <div className='flex space-x-4 items-center'>
          <HomeIcon className='hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out' />
          {session ? (
            <>
              <PlusCircleIcon
                className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'
                onClick={() => setOpen(true)}
              />
              <img
                onClick={signOut}
                src={session.user.image}
                alt='user-image'
                className='h-10 rounded-full cursor-pointer'
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
