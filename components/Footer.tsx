import Link from 'next/link';
import { GithubIcon, LinkedInIcon } from './Icons';

const FooterLinks = [
  {
    name: 'GitHub',
    link: 'https://github.com/jigolaurito93/',
    icon: <GithubIcon />,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jose-laurito/',
    icon: <LinkedInIcon />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-primary/10 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-sm text-primary md:flex-row">
        <p className="font-mono">© {year} Jose Laurito</p>
        <div className="flex items-center gap-6">
          {FooterLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-primary-light transition hover:text-primary"
            >
              {link.name}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/90 text-tertiary">
                {link.icon}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
