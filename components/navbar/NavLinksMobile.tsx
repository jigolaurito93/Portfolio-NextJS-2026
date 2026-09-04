import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { FaHamburger } from 'react-icons/fa';
import { navLinks } from '@/lib/navLinks';
import { cn } from '@/lib/utils';

interface NavLinksMobileProps {
  active: string;
}

const NavLinksMobile = ({ active }: NavLinksMobileProps) => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger aria-label="Open navigation menu">
          <FaHamburger className="text-3xl text-primary hover:text-primary-light active:text-primary-dark" />
        </SheetTrigger>
        <SheetContent className="border-l border-primary/20 bg-tertiary lg:hidden">
          <SheetHeader>
            <SheetTitle className="font-display text-left text-2xl text-secondary">
              J<span className="text-primary">LAU</span>
            </SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation
            </SheetDescription>
          </SheetHeader>
          <div className="mt-16 flex flex-col items-start gap-8 font-display text-4xl font-bold md:text-5xl">
            {navLinks.map((link) => (
              <SheetClose key={link.name} asChild>
                <Link
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-primary-light active:text-primary-dark',
                    active === link.href ? 'text-primary' : 'text-secondary'
                  )}
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavLinksMobile;
