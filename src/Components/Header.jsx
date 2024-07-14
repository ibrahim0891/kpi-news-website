import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg sticky top-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">NewsSite</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="px-3 py-2 hover:bg-gray-700 rounded">Home</a>
            <a href="#world" className="px-3 py-2 hover:bg-gray-700 rounded">World</a>
            <a href="#business" className="px-3 py-2 hover:bg-gray-700 rounded">Business</a>
            <a href="#tech" className="px-3 py-2 hover:bg-gray-700 rounded">Tech</a>
            <a href="#sports" className="px-3 py-2 hover:bg-gray-700 rounded">Sports</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <form className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="p-2 rounded-lg text-gray-900"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 text-gray-700 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9H7V7h2v2zm4 0h-2V7h2v2zm-3 3H7v-2h2v2zm4 0h-2v-2h2v2z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
          <a href="#profile" className="hidden md:block hover:bg-gray-700 rounded p-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5.25 0-8 2.67-8 5v1h16v-1c0-2.33-2.75-5-8-5z" />
            </svg>
          </a>
        </div>
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#home" className="px-3 py-2 hover:bg-gray-700 rounded">Home</a>
            <a href="#world" className="px-3 py-2 hover:bg-gray-700 rounded">World</a>
            <a href="#business" className="px-3 py-2 hover:bg-gray-700 rounded">Business</a>
            <a href="#tech" className="px-3 py-2 hover:bg-gray-700 rounded">Tech</a>
            <a href="#sports" className="px-3 py-2 hover:bg-gray-700 rounded">Sports</a>
            <form className="relative mt-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full p-2 rounded-lg text-gray-900"
              />
              <button type="submit" className="absolute right-0 top-0 mt-2 mr-2 text-gray-700 hover:text-gray-900">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9H7V7h2v2zm4 0h-2V7h2v2zm-3 3H7v-2h2v2zm4 0h-2v-2h2v2z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;