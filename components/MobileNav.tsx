'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose, // Import SheetClose
} from "@/components/ui/sheet";
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import { sidebarLinks } from '../constants/index';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation'; // Import usePathname

interface MobileNavProps {
  user: { firstName: string; lastName: string };
}

const MobileNav: React.FC<MobileNavProps> = ({ user }) => {
  const pathname = usePathname(); // Get the current path for active link

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-white"
        >
          <Link href="/" className="px-4 flex cursor-pointer items-center gap-1">
            <Image
              src="/icons/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
            <h1 className="text-26 font-ibm-plex-serif text-black-1">CirqlePay</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}`);

                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.route}
                        className={cn('mobilenav-sheet_close w-full', { 'bg-bankGradient': isActive })}
                      >
                        
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              'brightness-[3] invert-0': isActive,
                            })}
                          />
                        <p className={cn('text-16 font-semibold text-black-2', { '!text-white': isActive })}>
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}

                USER 
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
        FOOTER
        
      </Sheet>
    </section>
  );
};

export default MobileNav;