import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <div className='flex items-center justify-between max-w-6xl'>
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

      <h1 className=''>Right side</h1>
      {/* Right */}
    </div>
  );
};

export default Header;
