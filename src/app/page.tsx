import Header from './Header';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Footer from './Footer';
import Projects from './Projects';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
