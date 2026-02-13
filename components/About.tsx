import Image from 'next/image';

const About = () => {
  return (
    <div
      id="about"
      className="text-white flex flex-col gap-7 justify-center mb-36 px-12 lg:px-32 xl:px-56 scroll-mt-56"
    >
      <h1 className="text-4xl font-semibold text-primary">Who am I?</h1>

      <div className="">
        <div className="relative w-64 mx-auto md:mx-0 md:w-[400px] md:mr-28">
          <Image
            src={'/images/programmer.jpg'}
            width={300}
            height={300}
            alt=""
            className="md:hidden z-20 rounded-sm mb-10 relative w-64"
          />
          <Image
            src={'/images/whiteboard.jpg'}
            width={600}
            height={600}
            alt=""
            className="relative hidden z-20 rounded-sm md:flex md:mr-10 mb-8 md:float-left md:mx-0 md:w-[400px]"
          />
          <span className="absolute z-10 border-8 border-primary w-full h-full md:h-[270px] top-6 left-7 md:top-4 md:left-5 rounded-sm"></span>
        </div>

        <p>
          Hello, I&apos;m Jose, a{' '}
          <span className="text-primary font-semibold text-lg">
            Full-Stack Software Engineer{' '}
          </span>
          and{' '}
          <span className="text-primary font-semibold text-lg">
            MES Operations Data Analyst{' '}
          </span>
          , driven by a passion for building scalable technology and optimizing
          complex systems.
        </p>
        <br />
        <p>
          Currently, at{' '}
          <span className="text-primary font-semibold text-lg">
            StarPlus Energy
          </span>
          , I bridge the gap between software and large-scale manufacturing by
          managing Manufacturing Execution Systems (MES). I specialize in
          real-time troubleshooting, automation oversight, and leveraging
          data-driven insights to enhance operational efficiency.
        </p>
        <br />
        <p>
          Previously, as a{' '}
          <span className="text-primary font-semibold text-lg">
            Senior Developer
          </span>{' '}
          at{' '}
          <span className="text-primary font-semibold text-lg">
            The Spartan IT Group
          </span>
          , I led the development of dynamic solutions for local businesses in
          an Agile environment. My work focused on architecting robust
          applications using Next.js, Supabase, and PostgreSQL, while
          implementing secure OAuth authentication and CI/CD pipelines to
          streamline deployments. Key projects include "The Kennel" e-commerce
          platform and the Spartan IT Group’s corporate site.
        </p>
        <br />
        <p>
          Before this role, I earned my full-stack software engineering
          certification in 2023 while balancing my career as a chef and
          apprentice at{' '}
          <span className="text-primary font-semibold text-lg">Co.Lab</span>,
          contributing to projects like “Matrimoni” and “Break Buddy.” My
          background in Hospitality - Culinary enhances my creativity and
          problem-solving skills.
        </p>
      </div>
    </div>
  );
};

export default About;
