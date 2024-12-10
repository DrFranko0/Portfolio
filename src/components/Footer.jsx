// Footer.jsx
import { Link } from 'react-scroll';

export default function Footer(){
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="home" smooth>
            My Portfolio
          </Link>
        </div>
        <div className="flex space-x-4">
          <a href="mailto:rohitrrout00@gmail.com" className="text-gray-400 hover:text-white">
            Email
          </a>
          <a href="https://github.com/DrFranko0" className="text-gray-400 hover:text-white">
            GitHub
          </a>
          <a href="www.linkedin.com/in/rohit-ranjan-rout-n"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};