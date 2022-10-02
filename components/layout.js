import Image from 'next/image';

import Navbar from './navbar';

export default function Layout({ backgroundImage, children }) {
  return (
    <>
      <Navbar />
      <div className='absolute top-0 right-0 bottom-0 left-0'>
        <Image 
          src={backgroundImage}
          alt='image'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='p-6 lg:px-0 relative z-10 container mx-auto'>
        {children}
      </div>
    </>
  )
}
