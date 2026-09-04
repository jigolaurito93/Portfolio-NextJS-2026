import Link from 'next/link';
import { navLinks } from '@/lib/navLinks';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  active: string;
}

const NavLinks = ({ active }: NavLinksProps) => {
  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={cn(
              'font-mono text-sm tracking-wide transition-colors',
              active === link.href
                ? 'text-primary'
                : 'text-secondary hover:text-primary-light'
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
