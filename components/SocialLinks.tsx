import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn, FaFacebook } from 'react-icons/fa6';
import { TiSocialInstagram } from 'react-icons/ti';

const links = [
  {
    href: 'https://github.com/jigolaurito93/',
    icon: <FaGithub />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/jose-laurito/',
    icon: <FaLinkedinIn />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/jigolaurito',
    icon: <FaFacebook />,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/jigolaurito/',
    icon: <TiSocialInstagram />,
    label: 'Instagram',
  },
];

const SocialLinks = () => {
  return (
    <div className="glass absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-5 px-2.5 py-5 lg:flex xl:right-10">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="text-2xl text-primary transition duration-300 hover:scale-110 hover:text-primary-light"
          target="_blank"
          rel="noreferrer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
