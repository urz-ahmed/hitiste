"use client"
import { bottombarLinks } from '@/consts';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const Bottombar = () => {
  const pathname = usePathname();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
                   
            <Link  
              key={link.label} 
              className={isActive ? 'bg-dark-4 group rounded-[10px] flex-center flex-col gap-1 p-2 transition':'group rounded-[10px] flex-center flex-col gap-1 p-2 transition cursor-pointer'} 
              href={link.route}
            >
              <img 
                src={link.imgURL}
                alt={link.label}
                width={16}
                height={16}
                className={isActive ? 'invert-white'  :"invert-white group-hover:invert-white"}
              />
              <p className={isActive ? 'tiny-medium text-light-1':'tiny-medium text-light-2'}>{link.label}</p>
            </Link>
        )
      })}
    </section>
  )
}

export default Bottombar