'use client';

import Image from 'next/image';
import SocialLinks from './SocialLinks';

//const name = 'Jose Laurito';
//const title = '';
//const job = '';

const Hero = () => {
  const handleDownloadCV = () => {
    // Change this to your actual CV filename
    const cvFileName = 'Jose-Resume.pdf';
    const cvPath = `/${cvFileName}`;

    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="px-12 lg:px-32 xl:px-56 flex flex-col items-center gap-12 lg:flex-row min-h-screen justify-center text-secondary mt-20 md:mt-5 lg:mt-1 lg:gap-28"
    >
      <div className="relative">
        <Image
          src={'/images/profile-image.jpg'}
          alt="Jose Photo"
          width={1000}
          height={1000}
          className="rounded-xl w-[250px] lg:w-72 z-20 relative"
        />
        <span className="absolute z-10 border-8 border-primary w-full h-full top-5 left-5 rounded-xl"></span>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl text-secondary">Hi, my name is</h3>
          <h1 className="text-7xl md:text-8xl text-secondary font-bold">
            JOSE <span className="text-primary">LAURITO</span>
          </h1>
          <h3 className="text-xl">
            Chicago based{' '}
            <span className="text-primary font-semibold">
              Full-Stack Software Engineer
            </span>
          </h3>
          <h3 className="text-xl">
            and an{' '}
            <span className="text-primary font-semibold">
              MES Operations Data Analyst at StarPlus Energy, Indiana
            </span>
          </h3>
        </div>

        <div className="flex gap-3 justify-evenly mt-10">
          <button
            onClick={handleDownloadCV}
            className="rounded-full px-4 py-2 w-40 text-tertiary bg-secondary hover:bg-secondary-light"
          >
            Download CV
          </button>
          <button className="rounded-full px-4 py-2 w-40 text-tertiary bg-secondary hover:bg-secondary-light">
            Contact Me
          </button>
        </div>

        <SocialLinks />
      </div>
    </div>
  );
};

export default Hero;
