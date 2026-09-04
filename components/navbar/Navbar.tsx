'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/navLinks';
import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';

const Navbar = () => {
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-colors duration-300 md:px-10 ${
        scrolled
          ? 'border-b border-primary/10 bg-tertiary/75 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#home"
        className="font-display text-3xl font-bold tracking-tight text-secondary md:text-4xl"
      >
        J<span className="text-primary">LAU</span>
      </a>
      <NavLinksMobile active={active} />
      <NavLinks active={active} />
    </nav>
  );
};

export default Navbar;
