import { Github, LinkedinIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-start gap-4">
        <div className="flex flex-col">
          <p>Feel free to reach out to me for any inquiries.</p>
          <a href="mailto:tony@sprotte.dev" className="w-fit text-gray-600 hover:text-gray-800">
            tony@sprotte.dev
          </a>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="https://www.linkedin.com/in/sprotte/"
            target="_blank"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 w-fit"
          >
            <LinkedinIcon className="w-6 h-6" />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://github.com/qualiti"
            target="_blank"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 w-fit"
          >
            <Github className="w-6 h-6" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
