import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

// Images
import logo from '../public/shared/logo.svg';
import hamburger from '../public/shared/icon-hamburger.svg';
import close from '../public/shared/icon-close.svg';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const ref = useRef(null);

  const menuLinks = [{'url': '/', 'title': 'Home'}, {'url': '/destination', 'title': 'Destination'}, {'url': '/crew', 'title': 'Crew'}, {'url': '/technology', 'title': 'Technology'}];
  var menu = '';

  useEffect(() => {
    menu = document.getElementById('menu');
  });


  function menuToggle() {
    setShowMenu(!showMenu);

    menu.classList.remove(showMenu ? 'right-0' : 'right-[-254px]');
    menu.classList.add(showMenu ? 'right-[-254px]': 'right-0');
  }

  return (
    <nav className='p-6 lg:px-0 relative z-50 container mx-auto'>
      <div className='flex flex-row justify-between items-center'>
        <Image 
          src={logo}
          alt='Logo'
          width={40}
          height={40}
        />

        <button onClick={menuToggle} className={`${ showMenu ? 'hidden' : 'block' } flex justify-center items-center md:hidden`}>
          <Image
            src={hamburger}
            alt='Hamburger icon'
            width={18}
            height={18}
          />
        </button>
        <div ref={ref} id='menu' className='fixed top-0 right-[-254px] md:right-0 w-[254px] md:w-auto h-screen md:h-auto backdrop-blur-30 bg-white/10 px-6 flex flex-col md:flex-row text-white duration-300 md:gap-8 lg:relative lg:after:absolute lg:after:bottom-0 lg:after:top-0 lg:after:left-full lg:after:w-screen lg:after:backdrop-blur-30 lg:after:bg-white/10 lg:before:absolute lg:before:bottom-0 lg:before:top-0 lg:before:right-full lg:before:w-1/12 lg:before:backdrop-blur-30 lg:before:bg-white/10'>
          <div className='relative hidden lg:block lg:before:right-8 lg:before:top-1/2 lg:before:absolute lg:before:h-px lg:before:w-48 xl:before:w-96 lg:before:bg-white lg:before:opacity-25'></div>
          <button onClick={menuToggle} className='ml-auto mt-6 mb-16 md:mb-auto h-10 flex justify-end items-center md:hidden'>
            <Image
              src={close}
              alt='Close icon'
              width={18}
              height={18}
            />
          </button>

          {menuLinks.map((item, index) => (
            <Link href={item.url} key={index}>
              <a
                className={`${ router.pathname === item.url
                  ? 'md:after:absolute md:after:bottom-0 md:after:left-0 md:after:right-0 md:after:h-1 md:after:bg-white'
                  : 'hover:md:after:absolute hover:md:after:bottom-0 hover:md:after:left-0 hover:md:after:right-0 hover:md:after:h-1 hover:md:after:bg-white hover:md:after:opacity-25 hover:md:after:transition-all'  
                } text-white uppercase flex gap-2 mb-8 md:mb-0 md:h-full md:flex md:flex-col md:justify-center md:py-7 nav-text relative lg:flex-row`}
              >
                <span className='font-barlow-condensed-bold w-6 md:hidden lg:block'>{index < 10 ? ('0' + index) : index}</span>
                {item.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
