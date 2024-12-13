import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Sprotte Development. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://linkedin.com/in/tony-david-sprotte-6555a11a5" className="hover:text-gray-300">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/qualiti" className="hover:text-gray-300">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
