import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Sprotte Development</h1>
          <p className="text-sm text-gray-600">Building software to solve real-world problems</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
