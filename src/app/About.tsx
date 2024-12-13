import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-600 max-w-2xl text-justify">
            <p>
              Hi there! I&apos;m Tony, a Full Stack Software Developer currently living in Hamburg,
              Germany. My passion for creating software began in my early youth, and I&apos;ve been
              honing my skills ever since. I have a particular love for building web applications,
              with a focus on Full Stack development. My favorite tech stack includes TypeScript and
              React, and I&apos;ve recently been exploring frameworks like Remix and Next.js to
              expand my expertise.
            </p>
            <p className="mt-2">
              By day, I work full-time at data experts gmbh, and in my free time, I dive into side
              projects under my own company, Sprotte Development. It&apos;s exciting to turn ideas
              into reality and constantly learn new things along the way!
            </p>
          </div>
          <Image
            src="/me.jpeg"
            alt="Tony David Sprotte"
            width={200}
            height={200}
            className="rounded-full justify-self-center order-first md:order-last"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
